import { IExerciseWithRepeats } from "./exercises";

export interface IAddNewWorkoutRequest {
  exercises: IExerciseWithRepeats[];
  name: string;
  username: string;
}

export interface IAddNewWorkoutResponse {
  responseMessage: string;
}

export interface IGetWorkoutsRequest {
  username: string;
}

export interface IGetWorkoutsResponse {
  workouts: IWorkout[];
}

export interface IWorkout {
  exercises: IExerciseWithRepeats[];
  name: string;
}

export interface IWorkoutApi {
  add(request: IAddNewWorkoutRequest): Promise<IAddNewWorkoutResponse>;
  get(username: IGetWorkoutsRequest): Promise<IGetWorkoutsResponse>;
}
