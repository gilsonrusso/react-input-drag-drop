import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

import * as Yup from "yup";

interface SelectionPanelProps {
  typeReceived: string;
  onClick: () => void;
}

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().required(),
  choise: Yup.string().required(),
});

const OPTIONS = [
  { value: "fullName", label: "Full Name" },
  { value: "firstName", label: "First Name" },
];

export function SelectionPanel({ typeReceived }: SelectionPanelProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      choise: typeReceived,
    },
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack spacing={2} direction="column">
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            className="text-white"
            id="name"
            label={
              formik.values.choise === "firtsName"
                ? "Nome Completo"
                : "Primeiro Nome"
            }
            type="text"
            name="name"
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
            autoComplete="off"
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="type-label">Escolha</InputLabel>
              <Select
                labelId="type-label"
                id="choise"
                value={formik.values.choise}
                label="Escolha"
                name="choise"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                fullWidth
                variant="outlined"
                error={formik.touched.choise && Boolean(formik.errors.choise)}
              >
                {OPTIONS.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <button className="w-full bg-purple-400" type="submit">
            Submit
          </button>
        </Box>
      </form>
    </Stack>
  );
}
