//  src/Square.js

//  Square is a Function Component.
export default (props) =>
  <button className="square" onClick={() => props.onClick()}>
    {props.value}
  </button>
