import heroImage from "/heroimage.jpg";
import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <Parallax
      bgImage={heroImage}
      strength={300}
      style={{ height: "300px" }}
      className='hero'
    >
      <div
        style={{
          position: "relative",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column',
        }}
      >
        {/* Overlay escuro */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        <h2>Saúde que acolhe, serviço que humaniza.</h2>
        <button>SAIBA MAIS</button>
      </div>
    </Parallax>
  );
};

export default Hero;
