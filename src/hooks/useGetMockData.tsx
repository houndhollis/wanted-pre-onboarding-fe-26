import { useRef, useState } from "react";
import { MockDataResult, MockDataType } from "../type";
import { getMockData } from "../api";

export const useGetMockData = () => {
  const [isEnd, setIsEnd] = useState(false);
  const [datas, setDatas] = useState<MockDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [firstLoadingFlag, setFirstLoadingFlag] = useState(true);

  const pageRef = useRef(0);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = (await getMockData(pageRef.current)) as MockDataResult;
      if (!response.isEnd) pageRef.current += 1;

      setDatas((prev) => [...prev, ...response.datas]);
      setIsEnd(response.isEnd);
      const totalPrice = response.datas.reduce(
        (acc, item) => item.price + acc,
        0
      );
      setTotalPrice((prev) => (prev += totalPrice));
    } catch (error) {
      setDatas([]);
    } finally {
      setFirstLoadingFlag(false);
      setIsLoading(false);
    }
  };

  return { datas, isLoading, isEnd, totalPrice, fetchData, firstLoadingFlag };
};
