import { Stack } from "@mui/material";
import "./App.css";
import { BasicForm } from "./components/BasicForm/BasicForm";
import { DragDrop } from "./components/DragDrop";

function App() {
  return (
    <Stack
      className="justify-center items-center"
      spacing={2}
      sx={{ width: "100%" }}
      direction={"row"}
    >
      <BasicForm />
      <DragDrop />
    </Stack>
  );
}

export default App;
