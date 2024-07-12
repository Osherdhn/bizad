import Title from "../general/Title";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <Title mainTxt="About This App">
        <p className="fs-2">
          What makes BizAd the #1 app for <br /> advertising businesses
        </p>
      </Title> 
      <div className="container text-center mt-5">
        <p className="text-muted">
          Everyday many business owners choose to use our app to <br/> advertis their
          business and to gain more tration to their <br/> website and online store
        </p>
        <Link to="/" className="nav-link active">
          <button className="btn btn-primary">start today</button>
        </Link>
      </div>
    </>
  );
}

export default About;
