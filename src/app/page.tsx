import { CountdownTimer } from "@/components/timer"

export default function Page() {
  const targetDate = new Date("2027-07-11T23:59:59")
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
