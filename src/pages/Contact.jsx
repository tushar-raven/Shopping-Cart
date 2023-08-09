import x from "../assets/X.png";
import github from "../assets/github.png";
import linkedin from "../assets/LinkedIn.png";
import insta from "../assets/instagram.png";
import yt from "../assets/youtube.png";
import style from "../style.module.css";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.socials}>
        <a href="https://twitter.com/tushar_raven">
          <img src={x} alt="X" />
        </a>
        <a href="https://www.linkedin.com/in/tushar-tayal0601">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@cibh">
          <img src={yt} alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/tushar_raven/">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://github.com/tusharravenclaw">
          <img src={github} alt="GitHub" />
        </a>
      </div>
      <div className={style.address}>
        FakeStore, Sector-12, Ram Chowk, Dehu Road, Pune
      </div>
    </div>
  );
};

export default Contact;
