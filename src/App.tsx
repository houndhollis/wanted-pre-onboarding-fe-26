import { ClipLoader } from "react-spinners";

import { useEffect, useRef } from "react";
import { useGetMockData } from "./hooks/useGetMockData";
import { Item } from "./components/Item";
import { ItemsSkeleton } from "./components/ItemsSkeleton";

function App() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const { datas, isLoading, totalPrice, fetchData, isEnd, firstLoadingFlag } =
    useGetMockData();

  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isEnd && !isLoading) {
        fetchData();
      }
    });
    if (divRef.current) {
      observe.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observe.unobserve(divRef.current);
      }
    };
  }, [isEnd]);

  return (
    <main className="w-full h-full min-h-screen bg-violet-100 flex justify-center">
      <div className="bg-white w-[480px]">
        <div className="sticky top-0 bg-white p-4 z-50 shadow-md">
          <h1 className="font-bold text-xl">
            Total Price: {Number(totalPrice).toLocaleString()}원
          </h1>
        </div>
        {isLoading && firstLoadingFlag && <ItemsSkeleton />}
        {datas && (
          <div className="mt-2 px-2 flex flex-col gap-2">
            {datas.map((item) => (
              <Item key={item.productId} {...item} />
            ))}
            <div ref={divRef} />
          </div>
        )}
        {isLoading && !firstLoadingFlag && (
          <div className="w-full flex justify-center my-3">
            <ClipLoader />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
