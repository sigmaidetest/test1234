let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {

	cognito_idp.adminGetUser({
		UserPoolId: process.env.UserPoolId_cognitoTest123456, /* required */
		Username: event.username /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});



	callback(null, 'Successfully executed');
}