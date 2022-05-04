import { Box, Typography, Modal, IconButton, Container } from "@mui/material";
import { ExercisesList } from "./ExercisesList";
import { IExerciseWithRepeats, IExercise } from "../types/exercises";
import { ChoosenExercisesList } from "./ChoosenExercisesList";
import { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ModalContext } from "../pages/main";

interface ModalWithExercisesProps {
  closeModal: () => void;
  refreshWorkouts: () => Promise<void>;
}

export const ModalWithExercises = ({
  closeModal,
  refreshWorkouts,
}: ModalWithExercisesProps) => {
  const [choosenExercises, setChoosenExercises] = useState<
    IExerciseWithRepeats[]
  >([]);

  const modal = useContext(ModalContext);

  return (
    <>
      <Modal
        open={modal}
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
            <ExercisesList setChoosenExercises={setChoosenExercises} />
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
