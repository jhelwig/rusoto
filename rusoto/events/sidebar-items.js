initSidebarItems({"enum":[["DeleteRuleError","Errors returned by DeleteRule"],["DescribeRuleError","Errors returned by DescribeRule"],["DisableRuleError","Errors returned by DisableRule"],["EnableRuleError","Errors returned by EnableRule"],["ListRuleNamesByTargetError","Errors returned by ListRuleNamesByTarget"],["ListRulesError","Errors returned by ListRules"],["ListTargetsByRuleError","Errors returned by ListTargetsByRule"],["PutEventsError","Errors returned by PutEvents"],["PutRuleError","Errors returned by PutRule"],["PutTargetsError","Errors returned by PutTargets"],["RemoveTargetsError","Errors returned by RemoveTargets"],["TestEventPatternError","Errors returned by TestEventPattern"]],"struct":[["CloudWatchEventsClient","A client for the Amazon CloudWatch Events API."],["DeleteRuleRequest","<p>Container for the parameters to the <a>DeleteRule</a> operation.</p>"],["DescribeRuleRequest","<p>Container for the parameters to the <a>DescribeRule</a> operation.</p>"],["DescribeRuleResponse","<p>The result of the <a>DescribeRule</a> operation.</p>"],["DisableRuleRequest","<p>Container for the parameters to the <a>DisableRule</a> operation.</p>"],["EnableRuleRequest","<p>Container for the parameters to the <a>EnableRule</a> operation.</p>"],["ListRuleNamesByTargetRequest","<p>Container for the parameters to the <a>ListRuleNamesByTarget</a> operation.</p>"],["ListRuleNamesByTargetResponse","<p>The result of the <a>ListRuleNamesByTarget</a> operation.</p>"],["ListRulesRequest","<p>Container for the parameters to the <a>ListRules</a> operation.</p>"],["ListRulesResponse","<p>The result of the <a>ListRules</a> operation.</p>"],["ListTargetsByRuleRequest","<p>Container for the parameters to the <a>ListTargetsByRule</a> operation.</p>"],["ListTargetsByRuleResponse","<p>The result of the <a>ListTargetsByRule</a> operation.</p>"],["PutEventsRequest","<p>Container for the parameters to the <a>PutEvents</a> operation.</p>"],["PutEventsRequestEntry","<p>Contains information about the event to be used in the PutEvents action.</p>"],["PutEventsResponse","<p>The result of the <a>PutEvents</a> operation.</p>"],["PutEventsResultEntry","<p>A PutEventsResult contains a list of PutEventsResultEntry.</p>"],["PutRuleRequest","<p>Container for the parameters to the <a>PutRule</a> operation.</p>"],["PutRuleResponse","<p>The result of the <a>PutRule</a> operation.</p>"],["PutTargetsRequest","<p>Container for the parameters to the <a>PutTargets</a> operation.</p>"],["PutTargetsResponse","<p>The result of the <a>PutTargets</a> operation.</p>"],["PutTargetsResultEntry","<p>A PutTargetsResult contains a list of PutTargetsResultEntry.</p>"],["RemoveTargetsRequest","<p>Container for the parameters to the <a>RemoveTargets</a> operation.</p>"],["RemoveTargetsResponse","<p>The result of the <a>RemoveTargets</a> operation.</p>"],["RemoveTargetsResultEntry","<p>The ID of the target requested to be removed from the rule by Amazon CloudWatch Events.</p>"],["Rule","<p>Contains information about a rule in Amazon CloudWatch Events. A ListRulesResult contains a list of Rules.</p>"],["Target","<p>Targets are the resources that can be invoked when a rule is triggered. For example, AWS Lambda functions, Amazon Kinesis streams, and built-in targets.</p> <p><b>Input</b> and <b>InputPath</b> are mutually-exclusive and optional parameters of a target. When a rule is triggered due to a matched event, if for a target:</p> <ul> <li>Neither <b>Input</b> nor <b>InputPath</b> is specified, then the entire event is passed to the target in JSON form.</li> <li> <b>InputPath</b> is specified in the form of JSONPath (e.g. <b>$.detail</b>), then only the part of the event specified in the path is passed to the target (e.g. only the detail part of the event is passed). </li> <li> <b>Input</b> is specified in the form of a valid JSON, then the matched event is overridden with this constant.</li> </ul>"],["TestEventPatternRequest","<p>Container for the parameters to the <a>TestEventPattern</a> operation.</p>"],["TestEventPatternResponse","<p>The result of the <a>TestEventPattern</a> operation.</p>"]],"type":[["Boolean",""],["ErrorCode",""],["ErrorMessage",""],["EventId",""],["EventPattern",""],["EventResource",""],["EventResourceList",""],["EventTime",""],["Integer",""],["LimitMax100",""],["NextToken",""],["PutEventsRequestEntryList",""],["PutEventsResultEntryList",""],["PutTargetsResultEntryList",""],["RemoveTargetsResultEntryList",""],["RoleArn",""],["RuleArn",""],["RuleDescription",""],["RuleName",""],["RuleNameList",""],["RuleResponseList",""],["RuleState",""],["ScheduleExpression",""],["TargetArn",""],["TargetId",""],["TargetIdList",""],["TargetInput",""],["TargetInputPath",""],["TargetList",""]]});