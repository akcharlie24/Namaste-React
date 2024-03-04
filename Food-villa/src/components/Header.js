export const logo = (
  <a href="/">
    <img
      className="w-[7rem] m-1 rounded-xl "
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
      alt="logo"
    ></img>
  </a>
);

const Header = () => (
  <div className="flex justify-between items-center border rounded  bg-gradient-to-br bg-lime-100">
    {logo}
    <div className="mr-4">
      <ul className="flex list-none gap-4 text-xl text-black">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
