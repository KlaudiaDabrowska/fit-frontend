export interface IAddNewUserRequest {
  username: string;
}

export interface IAddNewUserResponse {
  responseMessage: string;
}

export interface IAddNewUser {
  add(request: IAddNewUserRequest): Promise<IAddNewUserResponse>;
}
