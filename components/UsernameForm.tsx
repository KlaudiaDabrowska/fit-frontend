import { useFormik } from "formik";
import * as Yup from "yup";
import { AddNewUser } from "../api/addNewUser";
import { IAddNewUserResponse } from "../types/addNewUser";
import { Button, FormControl, TextField } from "@mui/material";
import Link from "next/link";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export const UsernameForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: (values) => {
      new AddNewUser()
        .add({ username: values.username })
        .then((res: IAddNewUserResponse) => {
          console.log(res);
        });
      localStorage.setItem("username", values.username);
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(100, "Must be less than 100 char")
        .required("Required"),
    }),
  });

  return (
    <FormControl
      component="form"
      autoComplete="off"
      sx={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        fullWidth
        size="small"
        sx={{ marginBottom: "1rem", marginLeft: "30px" }}
        id="username"
        name="username"
        type="text"
        label="Your Username"
        variant="standard"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <Link href="/main" passHref>
        <Button
          variant="outlined"
          type="submit"
          sx={{
            width: "20%",
            height: "35px",
            marginLeft: "20px",
          }}
        >
          Send!
          <PlayArrowIcon />
        </Button>
      </Link>
    </FormControl>
  );
};
