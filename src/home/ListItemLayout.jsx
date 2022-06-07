import { useMatch, useNavigate } from "react-router-dom";
import { loadList } from "../utils/api";

function ListItemLayout({ itm = {} }) {
  const navigate = useNavigate();
  // const { path } = useMatch();

  return (
    <>
      <h2 className="border border-warning">{`ListItemLayout ${itm.key}`}</h2>
    </>
  );
}

export default ListItemLayout;
