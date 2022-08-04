import * as React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import MyDialog from "./MyDialog";
import { createState } from "./state";

export default function App() {
  const state = createState();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    state.updateName(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ my: 4, display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Enter your name to say Hey!
        </Typography>
        <TextField
          label="Name"
          value={state.name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            state.updateName(event.target.value)
          }
        />
        <TextField
          label="Age"
          value={state.age}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            state.updateAge(event.target.value)
          }
        />
        <Button variant="outlined" onClick={() => setIsDialogOpen(true)}>
          Open Dialog
        </Button>
      </Box>

      <MyDialog
        show={isDialogOpen}
        state={state}
        onClose={() => setIsDialogOpen(false)}
      />
    </Container>
  );
}
