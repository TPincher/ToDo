import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div>LandingPage</div>
      <Link to="/tasks">
        <div>Tasks</div>
      </Link>
    </>
  );
};

export default LandingPage;
