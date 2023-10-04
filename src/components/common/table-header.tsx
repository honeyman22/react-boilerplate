const TableHeader = ({ headerdata }: { headerdata: string[] }) => {
  return (
    <tr className="h-14 bg-primary text-lg text-left font-bold text-white bg-opacity-50">
      {headerdata?.map((item) => {
        const className = `pl-5 ${
          item?.toLowerCase() === "action" ? "w-[250px] text-center" : ""
        }`;
        return (
          <th className={className} key={item}>
            {item}
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
