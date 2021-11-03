import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-banner">
        <img
          src="https://www.estrella.com/media/9653788/k-12-back-to-school.png?format=jpeg"
          alt="Back to school"
        ></img>
        <div className="Link-site">
          <Link to="catalog">
            <h3>SUPPLIES</h3>
            </Link>
            <Link to="about">
              <h3> ABOUT US</h3>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
