import PulseHeader from "./PulseHeader";
import PulseControls from "./PulseControls";
import Columns from "./Columns";

export default function PulseLayout() {
  return (
    <main className="mx-auto w-full overflow-hidden">
      <PulseHeader />
      <PulseControls />
      <Columns />
    </main>
  );
}
