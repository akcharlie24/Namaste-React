import React from "react";
import ReactDOM from "react-dom/client";  // in the latest version of react they have done it to come from /client

const heading1 = React.createElement(
    "h1",
    {
      id: "title", // used to pass props to ur element
    },
    "Heading 1 from Parcel "
  );

  const heading2 = React.createElement(
    "h1",
    {
      id: "title", // used to pass props to ur element
    },
    "Heading 2"
  );

  const container = React.createElement(
    "div",
    {
      id: "container",
      // hello:"world"  //anything can be added to the props 
    },
    [heading1, heading2]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  