export const HttpStatus = {
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
}

export class HttpException extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode;
    }
}