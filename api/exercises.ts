import axios from "axios";
import { IExercisesResponse, IGetExercises } from "../types/exercises";
import { mockExercises } from "../mocks/exercises";

export class GetExercises implements IGetExercises {
  async get(): Promise<IExercisesResponse> {
    try {
      const resp = await axios.get(`http://localhost:3000/exercise`);
      return resp.data as IExercisesResponse;
    } catch (e) {
      throw e;
    }
  }
}

export class MockGetExercises implements IGetExercises {
  async get(): Promise<IExercisesResponse> {
    return new Promise((resolve) => {
      resolve({ exercises: mockExercises });
    });
  }
}
