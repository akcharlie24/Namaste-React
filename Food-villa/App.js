import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - List Items
 *     - Home
 *     - About
 *     - Contact
 *     - Cart
 * BODY
 *   - Restraunt Card (Many Cards)
 *      - Image of Restraunt
 *      - Description (Name , Place of Restraunt)
 *      - Rating
 *      - Name of Cuisines
 * Footer
 *   - Copyrights
 *   - Links
 */

const logo = (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
    ></img>
  </a>
);

const Header = () => (
  <div className="header">
    {logo}
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const Body = () => <h1>Body</h1>;

const Footer = () => <h2>Footer</h2>;

const AppLayout = () => (
    <> {/* this is a React.Fragment */}
        <Header/>
        <Body/>
        <Footer/>
    </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);