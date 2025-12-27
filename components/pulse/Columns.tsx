import Column from "./Column";
import TokenCardSkeleton from "./TokenCardSkeleton";
import TokenCard from "./TokenCard";

export default function Columns() {
  const isLoading = false; // later derived from data

  return (
    <div className="grid grid-cols-3 gap-[1px] px-[24px] py-[16px] w-full">
      <Column title="New Pairs" isLoading={isLoading}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TokenCardSkeleton key={i} />
            ))
          : Array.from({ length: 6 }).map((_, i) => <TokenCard key={i} />)}
      </Column>

      <Column title="Final Stretch" isLoading={isLoading}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TokenCardSkeleton key={i} />
            ))
          : Array.from({ length: 6 }).map((_, i) => <TokenCard key={i} />)}
      </Column>

      <Column title="Migrated" isLoading={isLoading}>
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <TokenCardSkeleton key={i} />
            ))
          : Array.from({ length: 6 }).map((_, i) => <TokenCard key={i} />)}
      </Column>
    </div>
  );
}
