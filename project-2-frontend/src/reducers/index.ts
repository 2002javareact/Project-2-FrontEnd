import { combineReducers } from "redux";
import { Inventory } from "../models/Inventory";
import { searchInventoryByTypeReducer} from "./search-inventory-by-type-reducer";

//make interfaces for each "piece" of state
export interface ISearchInventoryByTypeState{
    inventoryByType:Inventory[],
    typeId: 0,
    errorMessage:string
}


//define all of the pieces of state
export interface IState{
    searchInventoryByType:ISearchInventoryByTypeState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
    searchInventoryByType: searchInventoryByTypeReducer,
})