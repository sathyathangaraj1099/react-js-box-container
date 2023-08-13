const Box = (props) => {
  return;
  <li className={`${props.className}`}>
    <p>{props.message}</p>
  </li>;
};

const element = (
  <div>
    <h1>Boxes</h1>
    <ul>
      <Box className="box1" message="Small" />
      <Box className="box2" message="Medium" />
      <Box className="box3" message="Large" />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
