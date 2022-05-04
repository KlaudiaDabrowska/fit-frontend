export interface IExercise {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
}

export interface IResponseMessage {
  responseMessage: string;
}

export interface IExercisesResponse {
  exercises: IExercise[];
}

export interface IGetExercises {
  get(): Promise<IExercisesResponse>;
}

export interface IAddExercises {
  add(request: IExercise): Promise<IResponseMessage>;
}

export interface IExerciseWithRepeats extends IExercise {
  repeats: number;
}
