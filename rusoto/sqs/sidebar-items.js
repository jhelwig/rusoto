initSidebarItems({"enum":[["AddPermissionError","Errors returned by AddPermission"],["ChangeMessageVisibilityBatchError","Errors returned by ChangeMessageVisibilityBatch"],["ChangeMessageVisibilityError","Errors returned by ChangeMessageVisibility"],["CreateQueueError","Errors returned by CreateQueue"],["DeleteMessageBatchError","Errors returned by DeleteMessageBatch"],["DeleteMessageError","Errors returned by DeleteMessage"],["DeleteQueueError","Errors returned by DeleteQueue"],["GetQueueAttributesError","Errors returned by GetQueueAttributes"],["GetQueueUrlError","Errors returned by GetQueueUrl"],["ListDeadLetterSourceQueuesError","Errors returned by ListDeadLetterSourceQueues"],["ListQueuesError","Errors returned by ListQueues"],["PurgeQueueError","Errors returned by PurgeQueue"],["ReceiveMessageError","Errors returned by ReceiveMessage"],["RemovePermissionError","Errors returned by RemovePermission"],["SendMessageBatchError","Errors returned by SendMessageBatch"],["SendMessageError","Errors returned by SendMessage"],["SetQueueAttributesError","Errors returned by SetQueueAttributes"]],"struct":[["AddPermissionRequest","<p/>"],["BatchResultErrorEntry","<p>This is used in the responses of batch API to give a detailed description of the result of an action on each entry in the request.</p>"],["ChangeMessageVisibilityBatchRequest","<p/>"],["ChangeMessageVisibilityBatchRequestEntry","<p>Encloses a receipt handle and an entry id for each message in <a>ChangeMessageVisibilityBatch</a>. </p> <important> <p>All of the following parameters are list parameters that must be prefixed with <code>ChangeMessageVisibilityBatchRequestEntry.n</code>, where <code>n</code> is an integer value starting with 1. For example, a parameter list for this action might look like this:</p> </important> <p><code><![CDATA[ChangeMessageVisibilityBatchRequestEntry.1.Id=change_visibility_msg_2]]></code></p> <p><code><![CDATA[ChangeMessageVisibilityBatchRequestEntry.1.ReceiptHandle=<replaceable>Your_Receipt_Handle</replaceable>]]></code></p> <p><code><![CDATA[ChangeMessageVisibilityBatchRequestEntry.1.VisibilityTimeout=45]]></code></p>"],["ChangeMessageVisibilityBatchResult","<p> For each message in the batch, the response contains a <a>ChangeMessageVisibilityBatchResultEntry</a> tag if the message succeeds or a <a>BatchResultErrorEntry</a> tag if the message fails. </p>"],["ChangeMessageVisibilityBatchResultEntry","<p>Encloses the id of an entry in <a>ChangeMessageVisibilityBatch</a>.</p>"],["ChangeMessageVisibilityRequest",""],["CreateQueueRequest","<p/>"],["CreateQueueResult","<p>Returns the QueueUrl element of the created queue.</p>"],["DeleteMessageBatchRequest","<p/>"],["DeleteMessageBatchRequestEntry","<p>Encloses a receipt handle and an identifier for it.</p>"],["DeleteMessageBatchResult","<p> For each message in the batch, the response contains a <a>DeleteMessageBatchResultEntry</a> tag if the message is deleted or a <a>BatchResultErrorEntry</a> tag if the message cannot be deleted. </p>"],["DeleteMessageBatchResultEntry","<p>Encloses the id an entry in <a>DeleteMessageBatch</a>.</p>"],["DeleteMessageRequest","<p/>"],["DeleteQueueRequest","<p/>"],["GetQueueAttributesRequest","<p/>"],["GetQueueAttributesResult","<p>A list of returned queue attributes.</p>"],["GetQueueUrlRequest","<p/>"],["GetQueueUrlResult","<p>For more information, see <a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/UnderstandingResponses.html\">Responses</a> in the <i>Amazon SQS Developer Guide</i>.</p>"],["ListDeadLetterSourceQueuesRequest","<p/>"],["ListDeadLetterSourceQueuesResult","<p>A list of your dead letter source queues.</p>"],["ListQueuesRequest","<p/>"],["ListQueuesResult","<p>A list of your queues.</p>"],["Message","<p>An Amazon SQS message.</p>"],["MessageAttributeValue","<p>The user-specified message attribute value. For string data types, the value attribute has the same restrictions on the content as the message body. For more information, see <a href=\"http://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html\">SendMessage</a>.</p> <p>Name, type, and value must not be empty or null. In addition, the message body should not be empty or null. All parts of the message attribute, including name, type, and value, are included in the message size restriction, which is currently 256 KB (262,144 bytes).</p>"],["PurgeQueueRequest","<p/>"],["ReceiveMessageRequest","<p/>"],["ReceiveMessageResult","<p>A list of received messages.</p>"],["RemovePermissionRequest","<p/>"],["SendMessageBatchRequest","<p/>"],["SendMessageBatchRequestEntry","<p>Contains the details of a single Amazon SQS message along with a <code>Id</code>. </p>"],["SendMessageBatchResult","<p>For each message in the batch, the response contains a <a>SendMessageBatchResultEntry</a> tag if the message succeeds or a <a>BatchResultErrorEntry</a> tag if the message fails.</p>"],["SendMessageBatchResultEntry","<p>Encloses a message ID for successfully enqueued message of a <a>SendMessageBatch</a>.</p>"],["SendMessageRequest","<p/>"],["SendMessageResult","<p>The MD5OfMessageBody and MessageId elements.</p>"],["SetQueueAttributesRequest","<p/>"],["SqsClient","A client for the Amazon SQS API."]],"type":[["AWSAccountIdList",""],["ActionNameList",""],["AttributeMap",""],["AttributeNameList",""],["BatchResultErrorEntryList",""],["Binary",""],["BinaryList",""],["Boolean",""],["ChangeMessageVisibilityBatchRequestEntryList",""],["ChangeMessageVisibilityBatchResultEntryList",""],["DeleteMessageBatchRequestEntryList",""],["DeleteMessageBatchResultEntryList",""],["Integer",""],["MessageAttributeMap",""],["MessageAttributeName",""],["MessageAttributeNameList",""],["MessageList",""],["QueueAttributeName",""],["QueueUrlList",""],["SendMessageBatchRequestEntryList",""],["SendMessageBatchResultEntryList",""],["StringList",""]]});