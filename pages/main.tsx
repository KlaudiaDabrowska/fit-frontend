import * as React from "react";
import { Box, Button } from "@mui/material";
import { useState, createContext } from "react";
import { MockGetExercises } from "../api/exercises";
import { Header } from "../components/Header";
import AddIcon from "@mui/icons-material/Add";
import { ContainerComp } from "../components/ContainerComp";
import { WorkoutsList } from "../components/WorkoutsList";
import { ModalWithExercises } from "../components/ModalWithExercises";
import { MockWorkoutApi } from "../api/addNewWorkout";
import { IWorkout } from "../types/addNewWorkout";
import { IExercise } from "../types/exercises";

export const ModalContext = createContext(false);
export const ExercisesContext = createContext<IExercise[]>([]);

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [exercises, setExercises] = useState<IExercise[]>([]);
  const [workoutsList, setWorkoutsList] = useState<IWorkout[]>([]);

  const handleOpenModal = async () => {
    setOpenModal(true);
    const exercisesList = await new MockGetExercises().get();

    setExercises(exercisesList.exercises);

    // const exercises = await new GetExercises().get();
    // console.log(exercises);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const refreshWorkouts = async () => {
    const response = await new MockWorkoutApi().get({
      username: localStorage.getItem("username") ?? "",
    });
    setWorkoutsList(response.workouts);
  };

  return (
    <ContainerComp>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "30px",
          marginRight: "10px",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleOpenModal}
          sx={{
            fontSize: "12px",
          }}
          startIcon={<AddIcon />}
        >
          Create new workout
        </Button>
      </Box>
      <ModalContext.Provider value={openModal}>
        <ExercisesContext.Provider value={exercises}>
          <ModalWithExercises
            closeModal={handleCloseModal}
            refreshWorkouts={refreshWorkouts}
          />
        </ExercisesContext.Provider>
      </ModalContext.Provider>
      <WorkoutsList workoutsList={workoutsList} />
    </ContainerComp>
  );
};

export default Main;
