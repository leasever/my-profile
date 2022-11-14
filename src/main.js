import "./css/main.css";
import "./fonts/css/all.min.css";
import { Header } from "./components/Header";
import { router } from "./routes/index.routes";

Header();
router(window.location.hash);
window.addEventListener("hashchange", () => {  
  router(window.location.hash);  
});
