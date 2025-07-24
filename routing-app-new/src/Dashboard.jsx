import { Link } from "react-router-dom";

 const Dashboard = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/services">Services</Link>
      <br />
      <Link to="/product">Product</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/about/profile">Profile</Link>
    </div>
  );
};
export default Dashboard