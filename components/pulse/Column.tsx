import ColumnHeader from "./ColumnHeader";
import ColumnHeaderSkeleton from "./ColumnHeaderSkeleton";

export default function Column({
  title,
  isLoading,
  children,
}: {
  title: string;
  isLoading: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-full bg-[#111217] rounded-sm border border-white/10">
      {isLoading ? <ColumnHeaderSkeleton /> : <ColumnHeader title={title} />}

      <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
    </section>
  );
}
