const heading1 = React.createElement(
    "h1",
    {
      id: "title", // used to pass props to ur element
    },
    "Heading 1"
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
    },
    [heading1, heading2]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);
  