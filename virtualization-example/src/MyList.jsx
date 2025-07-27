import { FixedSizeList as List } from "react-window";

const MyList = () => {
  const items = Array.from({ length: 10000 }, (_, i) => `Item #${i + 1}`);

  return (
    <List
      height={400} // container height
      itemCount={items.length}
      itemSize={35} // height of each row
      width={"100%"}
    >
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </List>
  );
};

export default MyList;
