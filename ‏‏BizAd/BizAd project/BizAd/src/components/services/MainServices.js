import Title from "../general/Title";
import Services from "./Services";

function MainServices() {
  return (
    <>
      <Title mainTxt="Services">
        <p className="fs-2">
          Choose services that you would like to <br/> get from BizAd
        </p>
      </Title>
      <Services />
    </>
  );
}

export default MainServices;
