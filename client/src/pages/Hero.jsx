import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <h1>Hero Page</h1>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Hero;
