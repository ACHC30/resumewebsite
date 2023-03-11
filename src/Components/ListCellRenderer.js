function ListCellRenderer(props) {
  const list = props.list;
  const result = list.map((item) => <h1>Hi, {item}</h1>);
  return result;
}

export default ListCellRenderer;
