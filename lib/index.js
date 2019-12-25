const error = (status, message, data = {}) => ({
	status,
	isHttpError : true,
	payload     : { message, ...data }
});

module.exports = {

	// 4xx
	badRequest   : (message, data) => error(400, message, data),
	unauthorized : (message, data) => error(401, message, data),
	forbidden    : (message, data) => error(403, message, data),
	notFound     : (message, data) => error(404, message, data),
	badData      : (message, data) => error(422, message, data),

	// 5xx
	internalServerError : (message, data) => error(500, message, data),
	badGateway          : (message, data) => error(502, message, data)

}