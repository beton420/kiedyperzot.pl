import { CountdownTimer } from "@/components/timer"
import Music from "components/music"

export default function Page() {
  const targetDate = new Date("2027-07-11T23:59:59")
  return (
    <div>
      <CountdownTimer targetDate={targetDate} />
      <Music/>
    </div>
  );
}
