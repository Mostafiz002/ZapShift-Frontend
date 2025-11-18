import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import ReactLenis from "lenis/react";
import AuthProvider from "./provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </AuthProvider>
    </ReactLenis>
  </StrictMode>
);
