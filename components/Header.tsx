import { Typography } from "@mui/material";

export const Header = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      align="center"
      fontWeight={600}
      color="#00000078"
      sx={{
        fontSize: {
          xs: "30px",
          sm: "40px",
          md: "40px",
          lg: "40px",
          xl: "40px",
        },
      }}
    >
      FITNESS APP
    </Typography>
  );
};
