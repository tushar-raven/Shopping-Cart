import style from "../style.module.css";
import image from "../assets/homepage.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.menuBox}>
      <div className={style.leftBox}>
        <div className={style.heroText}>Online Store Of The Year</div>
        <div className={style.subHeroText}>
          We Don&apos;t Do Fashion, We Are Fashion
        </div>
        <Link className={style.homeButton} to="/products">
          Shop Now
        </Link>
      </div>
      <div className={style.rightBox}>
        <img className={style.homeImage} src={image} alt="Home Page Image" />
      </div>
    </div>
  );
};

export default Home;
