export class FetchError extends Error {
  constructor(message, status) {
    super(JSON.stringify(message));
    this.message = message;
    this.status = status;
  }
}
