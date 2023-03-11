function ListCellRenderer(props) {
  //console.log(props.getValue());
  var result = "";
  if (props.getValue()) {
    result = props.getValue().map((item) => <p>•{item}</p>);
  } else {
    result = "Nothing";
  }
  return result;
}

export default ListCellRenderer;
