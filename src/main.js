import { router } from "./routes/index.routes";
import { Header } from "./components/Header";
import "./fonts/css/all.min.css";
import "./css/main.css";

Header();
router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
