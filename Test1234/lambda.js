let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
	cognito_idp.adminCreateUser({
		UserPoolId: "us-east-1_mlPs9w6gg",

		/* required */
		Username: "",

		/* required */
		DesiredDeliveryMediums: ["SMS"],
		//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "RESEND",
		TemporaryPassword: "xsscxcscfc",
		UserAttributes: [{
			sub: 'sdsdsd'
		}, {
			given_name: 'sdsdsd'
		}, {
			family_name: 'sdsdsd'
		}, {
			email: 'sdsd'
		}, {
			name: 'xcxxcxccvxcv'
		}, {
			middle_name: 'zxzxxccxc'
		}, {
			nickname: 'xcxcxcxc'
		}],
		ValidationData: [{
			Acton: 'csccxxccx'
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