function errorHandler(err, _req, res, _next) {
  const ERRORS = {
    badRequest: {
      statusCode: 400,
      errorMessage: "Bad Request",
    },
    unauthorized: {
      statusCode: 401,
      errorMessage: "Unauthorized",
    },
    forbidden: {
      statusCode: 403,
      errorMessage: "Forbidden",
    },
    notFound: {
      statusCode: 404,
      errorMessage: "Not Found",
    },
    conflict: {
      statusCode: 409,
      errorMessage: "Conflict",
    },
    unprocessableEntity: {
      statusCode: 422,
      errorMessage: "Unprocessable Entity",
    },
  };
  const { type } = err;
  const error = ERRORS[type];

  if (error) {
    return res.status(error.statusCode).send({
      error: error.errorMessage,
      message: err.error_message,
    });
  }
  return res.status(500).send({
    error: "Internal Server Error",
    message: err.message,
  });
}

export { errorHandler };
