import { CountdownTimer } from "./components/timer";
import "./style.css";

export default function Page() {
  const targetDate = "2027-07-04T23:59:59"
  return (
    <div className="main">
      <h1>KiedyPerzot</h1>
      <CountdownTimer targetDate={targetDate} />
      <footer>
        <p>&copy; Chodnia Co.</p>
      </footer>
    </div>
  );
}
