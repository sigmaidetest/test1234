let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: "us-east-1_mlPs9w6gg",

		/* required */
		Username: "jkxsdjhsdssdsd",

		/* required */
		DesiredDeliveryMediums: ["SMS"],
		//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "SUPPRESS",
		TemporaryPassword: "kjjsdsfddfA123#",
		UserAttributes: [{
			Name: 'given_name',
			Value: 'dffsdf'
		}, {
			Name: 'family_name',
			Value: 'dfsdfsdf'
		}, {
			Name: 'email',
			Value: 'amilak@adroitlogic.com'
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