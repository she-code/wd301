import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./context/theme";

import router from "./routes";

function App() {
  const currentTheme = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-full w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      {currentTheme.theme}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
