import Item, { IItem } from "@/components/items/item/Item";

export interface IList {
  items: Array<IItem>;
}

const List: React.FC<IList> = ({ items }) => {
  return (
    <table className="border-collapse table-auto w-full text-sm">
      <thead>
      <tr>
        <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-left">Name</th>
        <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-center">Current Price</th>
        <th className="border-b dark:border-slate-600 p-4 pt-0 pb-3 text-center">Duration</th>
        <th style={{ width: "1%" }} className="border-b dark:border-slate-600 p-4 pl-8 pt-0 pb-3 text-center">Bid</th>
      </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
      {items.map(item => <Item key={item.id} item={item} />)}
      </tbody>
    </table>
  );
};

export default List;