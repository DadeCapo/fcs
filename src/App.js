import { Box, Button } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { SignUp, Profile, Login, MapView, EventPage } from "./client/pages";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mapView" element={<MapView />} />
        <Route path="/eventPage" element={<EventPage />} />
      </Routes>
    </Box>
  );
}

export default App;
