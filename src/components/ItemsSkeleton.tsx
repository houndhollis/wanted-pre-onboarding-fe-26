export const ItemsSkeleton = () => {
  return (
    <div className="m-2 flex flex-col gap-2 animate-pulse">
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </div>
  );
};

function ItemSkeleton() {
  return (
    <div className="px-3 py-4 rounded bg-gray-100 h-[104px] flex flex-col gap-2">
      <div className="w-1/4 h-4 bg-slate-200" />
      <div className="w-full h-4 bg-slate-200" />
      <div className="mt-3 w-1/6 h-2 bg-slate-200" />
    </div>
  );
}
