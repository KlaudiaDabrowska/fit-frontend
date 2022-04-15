import {
  IAddNewUser,
  IAddNewUserRequest,
  IAddNewUserResponse,
} from "../types/addNewUser";
import axios from "axios";

export class AddNewUser implements IAddNewUser {
  async add(request: IAddNewUserRequest): Promise<IAddNewUserResponse> {
    try {
      const resp = await axios.put(`http://localhost:3000/user`, request);
      return resp.data as IAddNewUserResponse;
    } catch (e) {
      throw e;
    }
  }
}
