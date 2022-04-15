import {
  List,
  Paper,
  ListItem,
  ListItemText,
  Button,
  Collapse,
  TextField,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { IExercise } from "../../backend/src/exercises/interfaces/exercise.interface";
import { IExerciseWithRepeats } from "../types/exercises";

interface ExercisesListProp {
  setChoosenExercises: Dispatch<SetStateAction<IExerciseWithRepeats[]>>;
  exercises: IExercise[];
}

export const ExercisesList = ({
  setChoosenExercises,
  exercises,
}: ExercisesListProp) => {
  const [openNestedInput, setOpenNestedInput] = useState(false);
  const [itemId, setItemId] = useState("");
  const [repeats, setRepeats] = useState("");

  const handleAddClick = () => {
    setOpenNestedInput(!openNestedInput);
  };

  const handleAddExerciseClick = (exercise: IExercise) => {
    const exerciseWithRepeats: IExerciseWithRepeats = {
      ...exercise,
      repeats: Number(repeats),
    };
    setChoosenExercises((prevState: IExerciseWithRepeats[]) => {
      return [...prevState, exerciseWithRepeats];
    });
    setRepeats("");
    setOpenNestedInput(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeats(e.target.value);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        margin: "0 auto",
      }}
    >
      {exercises.map((exercise) => (
        <>
          <Paper
            sx={{
              width: "80%",
              backgroundColor: "#e9ebf847",
              marginBottom: "10px",
            }}
          >
            <ListItem key={exercise.id} sx={{ marginBottom: "3px" }}>
              <ListItemText primary={`${exercise.name}`} />
              <Button
                onClick={() => {
                  setItemId(exercise.id);
                  handleAddClick();
                }}
              >
                +
              </Button>
            </ListItem>
          </Paper>
          {exercise.id === itemId ? (
            <Collapse in={openNestedInput} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Repeats"
                  size="small"
                  sx={{ marginBottom: "1rem" }}
                  id="repeats"
                  name="repeats"
                  type="number"
                  value={repeats}
                  autoComplete="off"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
                <Button
                  onClick={() => {
                    handleAddExerciseClick(exercise);
                  }}
                  sx={{ height: "40px" }}
                >
                  Add
                </Button>
              </List>
            </Collapse>
          ) : null}
        </>
      ))}
    </List>
  );
};
