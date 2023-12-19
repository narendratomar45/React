// const heading = React.createElement(
//   "h1",
//   { id: "header" },
//   "Namaste from react!"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/*
*<div id='parent>
    <div id = 'child>
        <p>i am Para tag</p>
        <h1>I am h1 tag</h1>
    </div>
     <div id = 'child1>
        <p>i am Para tag</p>
        <h1>I am h1 tag</h1>
    </div>
</div>
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("p", {}, "i am Para tag"),
    React.createElement("h1", {}, "i am heading  tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("p", {}, "i am Para tag"),
    React.createElement("h1", {}, "i am heading  tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
