import "./css/main.css";
import { Header } from "./components/Header";
import { router } from "./routes/index.routes";

router(window.location.hash);
Header();
window.addEventListener("hashchange", () => {  
  router(window.location.hash);  
});
