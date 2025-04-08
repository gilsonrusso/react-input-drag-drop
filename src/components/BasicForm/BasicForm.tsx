import { Box } from "@mui/material";
import { SelectionPanel } from "./SelectionPanel";

export function BasicForm() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <Box className="flex flex-col items-center justify-center">
      <p className="text-2xl text-gray-200 font-bold mb-4">Formulário Básico</p>

      <SelectionPanel typeReceived="firstName" onClick={handleClick} />
    </Box>
  );
}
