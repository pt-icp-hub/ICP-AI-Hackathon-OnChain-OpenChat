import type { BadRequest } from "./badrequest";

export function argumentsInvalid(): BadRequest {
    return "ArgsInvalid";
}

export function accessTokenNotFound(): BadRequest {
    return "AccessTokenNotFound";
}

export function accessTokenInvalid(): BadRequest {
    return "AccessTokenInvalid";
}

export function accessTokenExpired(): BadRequest {
    return "AccessTokenExpired";
}

export function commandNotFound(): BadRequest {
    return "CommandNotFound";
}

export class BadRequestError extends Error {
    constructor(message: BadRequest) {
        super(message);
    }
}

export class InternalServerError extends Error {}
