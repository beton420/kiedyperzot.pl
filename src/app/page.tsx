import { Timer } from "./timer";
import "./style.css";

export default function Page() {
  return (
    <div className="main">
      <h1>KiedyPerzot</h1>
      <Timer />
      <footer>
        <p>&copy; Chodnia Co.</p>
      </footer>
    </div>
  );
}
