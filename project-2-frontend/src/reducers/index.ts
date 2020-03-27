import { combineReducers } from "redux";
import { Users } from "../models/Users";
import { loginReducer } from "./login-reducer";
import { createUserReducer } from "./create-user-reducer";

//make interfaces for each "piece" of state
//User Login
export interface ILoginState {
  loggedUser: Users;
  errorMessage: string;
}

//CREATE USER
export interface ICreateUserState {
  createUser: Users;
  errorMessage: string;
}

//define all of the pieces of state
export interface IState {
  login: ILoginState;
  userCreation: ICreateUserState;
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
  login: loginReducer,
  userCreation: createUserReducer
});
