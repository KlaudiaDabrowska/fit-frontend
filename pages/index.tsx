import type { NextPage } from "next";
import { Box, ThemeProvider } from "@mui/material";
import { Header } from "../components/Header";
import { UsernameForm } from "../components/UsernameForm";
import { ContainerComp } from "../components/ContainerComp";
import { theme } from "../theme/defaultTheme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerComp>
        <Header />
        <Box
          sx={{
            padding: "16px",
            width: "100%",
            maxWidth: "550px",
            display: "flex",
            flexDirection: "row",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgb(245,244,242)",
          }}
        >
          <UsernameForm />
        </Box>
      </ContainerComp>
    </ThemeProvider>
  );
};

export default Home;
