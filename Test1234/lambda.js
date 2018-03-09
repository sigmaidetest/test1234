let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: "us-east-1_KtFzugXbq",

		/* required */
		Username: "jkxsdjhsd",

		/* required */
		DesiredDeliveryMediums: ["SMS"],
		//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "RESEND",
		TemporaryPassword: "kjjsdsfddf",
		UserAttributes: [{
			Name: 'sub',
			Value: 'sjhkjhsdjhsd'
		}, {
			Name: 'given_name',
			Value: 'dffsdf'
		}, {
			Name: 'family_name',
			Value: 'dfsdfsdf'
		}, {
			Name: 'email',
			Value: 'sdfsdfsdf'
		}],
		ValidationData: [{
			Name: 'xsssdd',
			Value: 'sdsd'
		}]
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}