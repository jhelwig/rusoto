use inflector::Inflector;

use botocore::{Operation, Service};
use super::GenerateProtocol;

pub struct JsonGenerator;

impl GenerateProtocol for JsonGenerator {

    fn generate_methods(&self, service: &Service) -> String {
        service.operations.values().map(|operation| {

            let output_type = operation.output_shape_or("()");

            format!("
                {documentation}
                {method_signature} -> Result<{output_type}, {error_type}> {{
                    {payload}
                    let mut request = SignedRequest::new(\"{http_method}\", \"{signing_name}\", self.region, \"{request_uri}\");
                    {modify_endpoint_prefix}
                    request.set_content_type(\"application/x-amz-json-{json_version}\".to_owned());
                    request.add_header(\"x-amz-target\", \"{target_prefix}.{name}\");
                    request.set_payload(payload);
                    request.sign(&try!(self.credentials_provider.credentials()));
                    let response = try!(self.dispatcher.dispatch(&request));

                    match response.status {{
                        StatusCode::Ok => {{
                            {ok_response}
                        }}
                        _ => Err({error_type}::from_body(&response.body)),
                    }}
                }}
                ",
                documentation = generate_documentation(operation).unwrap_or("".to_owned()),
                method_signature = generate_method_signature(operation),
                payload = generate_payload(operation),
                signing_name = service.signing_name(),
                modify_endpoint_prefix = generate_endpoint_modification(service).unwrap_or("".to_owned()),
                http_method = operation.http.method,
                name = operation.name,
                ok_response = generate_ok_response(operation, output_type),
                request_uri = operation.http.request_uri,
                target_prefix = service.metadata.target_prefix.as_ref().unwrap(),
                json_version = service.metadata.json_version.as_ref().unwrap(),
                error_type = operation.error_type_name(),
                output_type = output_type
            )
        }).collect::<Vec<String>>().join("\n")
    }

    fn generate_prelude(&self, _service: &Service) -> String {
        "use serde_json;
        use signature::SignedRequest;
        use serde_json::Value as SerdeJsonValue;
        use serde_json::from_str;".to_string()
    }

    fn generate_struct_attributes(&self, struct_name: &str) -> String {
        if can_skip_deserializer(struct_name) {
            return "#[derive(Default, Serialize)]".to_owned();
        }
        if can_skip_serializer(struct_name) {
            return "#[derive(Default, Debug, Deserialize, Clone)]".to_owned();
        }
        "#[derive(Default, Debug, Deserialize, Serialize, Clone)]".to_owned()
    }

    fn timestamp_type(&self) -> &'static str {
        "f64"
    }
}

fn can_skip_serializer(struct_name: &str) -> bool {
    if struct_name.ends_with("Response") {
        return true;
    }
    false
}

fn can_skip_deserializer(struct_name: &str) -> bool {
    if struct_name.ends_with("Request") && 
        !struct_name.starts_with("Failed") && 
        !struct_name.starts_with("Workspace") &&
        struct_name != "SampledHTTPRequest" &&
        struct_name != "HTTPRequest" &&
        struct_name != "WriteRequest" &&
        struct_name != "PutRequest" &&
        struct_name != "DeleteRequest"
        {
            return true;
    }
    false
}

fn generate_endpoint_modification(service: &Service) -> Option<String> {
    if service.signing_name() == service.metadata.endpoint_prefix {
        None
    } else {
        Some(format!("request.set_endpoint_prefix(\"{}\".to_string());", service.metadata.endpoint_prefix))
    }
}

fn generate_method_signature(operation: &Operation) -> String {
    if operation.input.is_some() {
        format!(
            "pub fn {method_name}(&self, input: &{input_type}) ",
            input_type = operation.input_shape(),
            method_name = operation.name.to_snake_case()
        )
    } else {
        format!(
            "pub fn {method_name}(&self) ",
            method_name = operation.name.to_snake_case()
        )
    }
}

fn generate_payload(operation: &Operation) -> String {
    if operation.input.is_some() {
        "let encoded = serde_json::to_string(input).unwrap();
         let payload = Some(encoded.as_bytes());".to_string()
    } else {
        "let payload = None;".to_string()
    }
}

fn generate_documentation(operation: &Operation) -> Option<String> {
    operation.documentation.as_ref().map(|docs| {
        format!("#[doc=\"{}\"]", docs.replace("\\","\\\\").replace("\"", "\\\""))
    })
}

fn generate_ok_response(operation: &Operation, output_type: &str) -> String {
    if operation.output.is_some() {
        format!("Ok(serde_json::from_str::<{}>(&response.body).unwrap())", output_type)
    } else {
        "Ok(())".to_owned()
    }
}

