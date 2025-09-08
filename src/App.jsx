import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Landingpage from "./components/Landingpage";
import EventList from "./components/EventList";
import EventForm from "./components/Eventform";
import Healthtracker from "./components/Healthtracker";
import Guestlist from "./components/Guestlist";
import EventDetail from "./components/EventDetail";
import Login from "./components/Login";
import PersonalGrowth from "./components/PersonalGrowth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Landingpage onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/events"
          element={
            isAuthenticated ? (
              <EventList onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/events/:id"
          element={
            isAuthenticated ? (
              <EventDetail onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/create"
          element={
            isAuthenticated ? (
              <EventForm onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/health"
          element={
            isAuthenticated ? (
              <Healthtracker onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/personal-growth"
          element={
            isAuthenticated ? <PersonalGrowth /> : <Navigate to="/login" />
          }
        />

        <Route
          path="/guests"
          element={
            isAuthenticated ? (
              <Guestlist onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
