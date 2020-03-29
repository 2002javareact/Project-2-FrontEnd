import {Inventory}  from "../Models/Inventory";
import { projectClient } from "./project-client";
import {BrandNotFoundError} from "../errors/BrandNotFoundError";
import {InternalServerError} from "../errors/InternalServerError";
import { Brand } from "../Models/Brand";

 export async function findItemByBrandId(brand:Brand): Promise<Inventory> {
    let credentials = brand ///chek back here
    try {
         let findResponse = await projectClient.get(`/${brand}`) //check back here still didnt do the App.tsx
        if(findResponse.status === 200){
            return findResponse.data
        }else {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}