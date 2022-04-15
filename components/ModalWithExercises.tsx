import { Box, Typography, Modal, IconButton, Container } from "@mui/material";
import { ExercisesList } from "./ExercisesList";
import { IExerciseWithRepeats } from "../types/exercises";
import { ChoosenExercisesList } from "./ChoosenExercisesList";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IExercise } from "../../backend/src/exercises/interfaces/exercise.interface";

interface ModalWithExercisesProps {
  openModal: boolean;
  closeModal: () => void;
  exercises: IExercise[];
  refreshWorkouts: () => Promise<void>;
}

export const ModalWithExercises = ({
  openModal,
  closeModal,
  exercises,
  refreshWorkouts,
}: ModalWithExercisesProps) => {
  const [choosenExercises, setChoosenExercises] = useState<
    IExerciseWithRepeats[]
  >([]);

  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          fixed
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            height: 500,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <IconButton
            onClick={() => {
              closeModal();
              setChoosenExercises([]);
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-description"
            sx={{
              textAlign: "center",
              mb: 5,
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Choose your exercises
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ExercisesList
              setChoosenExercises={setChoosenExercises}
              exercises={exercises}
            />
            <ChoosenExercisesList
              choosenExercises={choosenExercises}
              refreshWorkouts={refreshWorkouts}
              closeModal={closeModal}
              setChoosenExercises={setChoosenExercises}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Box>
        </Container>
      </Modal>
    </>
  );
};
