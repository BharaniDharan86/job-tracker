import { AppLayout } from "./ui/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <AppLayout />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
