import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const loadingMarkup = (
  <div>
    Loading...
  </div>
)

root.render(
  <Suspense fallback={loadingMarkup}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Suspense>
);