import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "Namaste React ");

const HeadingComponent2 = () => {
  return <h1>Example of functional component with return</h1>;
};

const HeadingComponent = () => (
  <div>
    {/*  define a component inside another component  
    this is also called component composition*/}

    {/* Any java script code written inise this curle braces*/}
    <Title />
    <h1>Example of functional component</h1>
  </div>
);

const JSXheading = <h1>Namaste react in JSX </h1>;

const Title = () => <h1>Namaste react </h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
