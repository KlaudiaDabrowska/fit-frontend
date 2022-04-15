import axios from "axios";
import {
  IAddNewWorkoutRequest,
  IAddNewWorkoutResponse,
  IGetWorkoutsRequest,
  IGetWorkoutsResponse,
  IWorkout,
  IWorkoutApi,
} from "../types/addNewWorkout";

// export class AddNewWorkout implements IWorkoutApi {
//   async add(request: IAddNewWorkoutRequest): Promise<IAddNewWorkoutResponse> {
//     try {
//       const resp = await axios.post(`http://localhost:3000/workout`, request);
//       return resp.data as IAddNewWorkoutResponse;
//     } catch (e) {
//       throw e;
//     }
//   }
// }

const workouts: Map<string, IWorkout[]> = new Map();

export class MockWorkoutApi implements IWorkoutApi {
  async add(request: IAddNewWorkoutRequest): Promise<IAddNewWorkoutResponse> {
    const currentWorkouts = workouts.get(request.username) ?? [];
    const workout = { exercises: request.exercises, name: request.name };
    currentWorkouts.push(workout);
    workouts.set(request.username, currentWorkouts);
    return new Promise((resolve) => {
      resolve({ responseMessage: "ok" });
    });
  }
  async get(request: IGetWorkoutsRequest): Promise<IGetWorkoutsResponse> {
    const userWorkouts = workouts.get(request.username) ?? [];
    return new Promise((resolve) => {
      resolve({ workouts: userWorkouts });
    });
  }
}
