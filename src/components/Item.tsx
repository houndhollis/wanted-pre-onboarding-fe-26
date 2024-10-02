import { MockDataType } from "../type";

export const Item = (props: MockDataType) => {
  return (
    <div className="px-3 py-4 bg-gray-100 rounded">
      <h2 className="font-semibold">{props.productName}</h2>
      <p>{props.boughtDate}</p>
      <p>{Number(props.price).toLocaleString()}원</p>
    </div>
  );
};
