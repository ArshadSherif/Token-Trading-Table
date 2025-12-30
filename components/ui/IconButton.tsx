export default function IconButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="relative w-[24px] h-[24px] flex items-center justify-center rounded hover:bg-white/10">
      {children}
      <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] bg-red-500 rounded-full" />
    </button>
  );
}
