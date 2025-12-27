export default function PulseHeader() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Pulse</h1>
      {/* navigation icons (skeleton) */}
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-white/10 rounded"></div>
        <div className="w-6 h-6 bg-white/10 rounded"></div>
      </div>
    </header>
  );
}
