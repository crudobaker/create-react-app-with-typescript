import * as React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import MyDialog from "./MyDialog";
import { AppContextProvider, AppContext, type AppContextType } from "./context";

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <AppContextProvider>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Enter your name to say Hey!
          </Typography>
          <AppContext.Consumer>
            {(context: AppContextType) => (
              <Box>
                <TextField
                  label="Name"
                  value={context.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    context.updateName(event.target.value)
                  }
                />
                <TextField
                  label="Age"
                  value={context.age}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    context.updateAge(Number(event.target.value))
                  }
                />
              </Box>
            )}
          </AppContext.Consumer>

          <Button variant="outlined" onClick={() => setIsDialogOpen(true)}>
            Open Dialog
          </Button>
          <AppContext.Consumer>
            {(context: AppContextType) => (
              <Typography variant="h4" component="h4" gutterBottom>
                Your feature is {context.feature}
              </Typography>
            )}
          </AppContext.Consumer>
        </Box>

        <MyDialog show={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
      </Container>
    </AppContextProvider>
  );
}
