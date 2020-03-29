import { combineReducers } from "redux";
import { Brand } from "../Models/Brand";
import { Inventory } from "../Models/Inventory";

//rstatus
export interface IFindItemsByBrandState
{
    findItemsbyBrand: Inventory[]
    currentBrand: Brand //currentReim

    errorMessage: string
    checked:boolean
}



export interface  IState {

   fIB: IFindItemsByBrandState

}

export const state = combineReducers<IState>({
    fIB: //put function from reducers
})

