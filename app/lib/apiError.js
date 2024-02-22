export class ApiError extends Error {
  code;
  context;
  httpStatusCode;

  constructor (input) {
    super(input.message)
    this.code = input.code
    this.context = input.context
    this.httpStatusCode = input.httpStatusCode ?? 400
  }
}
