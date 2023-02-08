function throwCustomError(type, error_message) {
  const ERRORS = {
    badRequest: "Bad Request",
    unauthorized: "Unauthorized",
    forbidden: "Forbidden",
    notFound: "Not Found",
    conflict: "Conflict",
    unprocessableEntity: "Unprocessable Entity",
  };

  if (!ERRORS[type]) {
    throw new Error(`Invalid error type: ${type}`);
  }
  throw new Error({ type, error_message: error_message || ERRORS[type] });
}

export { throwCustomError };
