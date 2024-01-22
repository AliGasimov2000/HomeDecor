import React from "react";
import styles from "./About.module.css";
import AboutImg from "../../../src/assets/image/About.png";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* <Link to="/">Home</Link>
          <b>|</b>
          <Link to="/about">About</Link> */}
          <h3>ABOUT US</h3>
          <div className={styles.about__page}>
            <div className={styles.imgbox}>
              <img src={AboutImg} alt="" />
            </div>
            <div className={styles.text__about}>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
                <br />
                <br />
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint
                et molestiae non recusandae. Itaque earum rerum hic tenetur a
                sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                consequatur aut perferendis doloribus asperiores repellat.
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
