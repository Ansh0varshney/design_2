import { Landing } from "./pages/Landing";
import { Dashboard } from "./pages/Dashboard";
import "./App.css";

export default function App() {
  // Temporary boolean to simulate authentication state
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? <Dashboard /> : <Landing />}
    </>
  );
}