import { Card } from "react-bootstrap";
import ListItemLayout from "./ListItemLayout";

function ViewActiveList({ activeList, appErr }) {
  const list = appErr ? (
    <Card body bg="dark" className="fst-italic text-light">
      Nothing here. Try another combo or clear filter options.
    </Card>
  ) : (
    activeList.map((listItem) => (
      <ListItemLayout key={listItem.id} itm={listItem} />
    ))
  );

  return <>{list}</>;
}
export default ViewActiveList;
