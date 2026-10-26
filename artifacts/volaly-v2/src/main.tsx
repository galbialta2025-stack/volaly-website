import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import { AuthProvider } from "./hooks/use-auth";
import "@fontsource-variable/plus-jakarta-sans/wght.css";
import "@fontsource-variable/plus-jakarta-sans/wght-italic.css";
import "./index.css";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
