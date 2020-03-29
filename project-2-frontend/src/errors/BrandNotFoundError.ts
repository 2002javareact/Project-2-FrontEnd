import {HttpError} from "./HttpError";

export class BrandNotFoundError extends HttpError{
    constructor(){
        super('Item not found', 400)
    }
}
