import {
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { IWorkout } from "../types/addNewWorkout";
import { ModalWithWorkout } from "./ModalWithWorkout";
import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";

interface WorkoutsListProp {
  workoutsList: IWorkout[];
}

export const WorkoutsList = ({ workoutsList }: WorkoutsListProp) => {
  const [open, setOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<IWorkout>();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Paper
      square
      sx={{
        marginBottom: "20px",
        width: "100%",
        height: "40%",
        maxWidth: "350px",
        display: "block",
        margin: "0 auto",
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        overflowY: "auto",
      }}
    >
      {workoutsList.map((workout) => (
        <>
          <Button
            onClick={() => {
              handleOpen();
              setSelectedWorkout(workout);
            }}
            value={workout.name}
            sx={{ justifyContent: "space-between", width: "100%" }}
          >
            <Box>
              <PlayCircleFilledIcon />
              <StopCircleIcon />
            </Box>
            <Typography fontWeight={"bold"}>{workout.name}</Typography>
          </Button>
          <Divider />
        </>
      ))}
      {selectedWorkout && (
        <ModalWithWorkout
          open={open}
          handleClose={handleClose}
          workout={selectedWorkout}
        />
      )}
      <AppBar
        position="fixed"
        color="primary"
        sx={{ top: "auto", bottom: 0, marginTop: "30px" }}
      >
        <Toolbar>
          <IconButton color="inherit" sx={{ marginLeft: "5px" }}>
            <StarsIcon />
            <Typography> Rankings </Typography>
          </IconButton>
          <IconButton color="inherit" sx={{ marginLeft: "55px" }}>
            <FitnessCenterIcon />
            <Typography> Your Workouts </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};
