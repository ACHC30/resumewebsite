import { Link } from "react-router-dom";
function LinkCellRenderer(props) {
  //console.log(props.getValue());
  var item = props.getValue();
  var address = item[0];
  var name = item[1];
  var result;
  if (address !== undefined) {
    result = (
      <p>
        <Link to={address}>{name}</Link>
      </p>
    );
  } else {
    result = "Nothing";
  }
  return result;
}

export default LinkCellRenderer;
