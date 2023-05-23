import { Link } from "react-router-dom";
function LinkCellRenderer(props) {
  //console.log(props.getValue());
  var item = props.getValue();
  var address = item[0];
  var name = item[1];
  var result;
  if (address !== undefined) {
    result = (
      <Link to={address}>
        <div className="linkCellBox">
          <p>{name}</p>
        </div>
      </Link>
    );
  } else {
    result = "Nothing";
  }
  return result;
}

export default LinkCellRenderer;
