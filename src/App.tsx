import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import ProTip from "./ProTip";
import MyDialog from "./MyDialog";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with TypeScript
        </Typography>
        <Button variant="outlined" onClick={() => setIsDialogOpen(true)}>
          Open Dialog
        </Button>
        <ProTip />
        <Copyright />
      </Box>
      {isDialogOpen && <MyDialog onClose={() => setIsDialogOpen(false)} />}
    </Container>
  );
}
