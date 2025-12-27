import PulseHeader from "./PulseHeader";
import PulseControls from "./PulseControls";
import Columns from "./Columns";
import PulseFooter from "./PulseFooter";

export default function PulseLayout() {
  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      {/* HEADER */}
      <div className="shrink-0">
        <PulseHeader />
      </div>

      {/* CONTROLS */}
      <div className="shrink-0">
        <PulseControls />
      </div>

      {/* COLUMNS — TAKES ALL REMAINING SPACE */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <Columns />
      </div>

      {/* FOOTER */}
      <div className="shrink-0">
        <PulseFooter />
      </div>
    </main>
  );
}
