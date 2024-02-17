import React from "react";
import ReactDOM from "react-dom/client"; // in the latest version of react they have done it to come from /client

/*
 * const heading1 = React.createElement(
 *   "h1",
 *   {
 *     id: "title", // used to pass props to ur element
 *     key: "h1", // read about RECONCILATION IN REACT, that is why keys are important in react
 *   },
 *   "Heading 1 from Parcel "
 * );
 * const heading2 = React.createElement(
 *   "h1",
 *   {
 *     id: "title", // used to pass props to ur element
 *     key: "h2",
 *   },
 *   "Heading 2"
 * )
 *  JSX ??
 * const heading3 = (
 *   <h1 title="heading" key="heading3">
 *     This is my heading
 *   </h1>
 * );
 * const container = React.createElement(
 *   "div",
 *   {
 *     id: "container",
 *      hello:"world"  anything can be added to the props
 *   },
 *   [heading1, heading2]
 * );
 */

//below is jsx format (which is inturn a react element itself as jsx is converted to .createElement by Babel)
const heading = (
  <h1 id="title" key="heading">
    Heading of JSX (React Element)
  </h1>
);

const Title = () => (
  //in the end this is just a normal JS function nothing much
  <h3>This is just another Functional Component</h3>
);

let name = "AKSHAT BHARDWAJ";
let number = 10;

// below is a functional component //
const HeaderComponent = () => (
  <div>
    {heading}
    {/* BELOW are all three ways you can write a functional component like but we generally dont use the last one like <Title></Title> <-- like this */}
    <Title />
    {Title()}
    <Title></Title>
    {name}
    {" hello "}
    {number + 5}
    {
      console.log(10) //babel might be removing console.log else it would be shown too..
      /*
       * we can literally write "ANY" JAVASCRIPT CODE inside these curly braces and it will be fine
       */
    }
    <h1>Namaste React Functional Component</h1>
    <h2>Heading 2</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);
root.render(<HeaderComponent />); //this is the syntax to render functional components.....
