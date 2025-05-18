import "../../styles/main.scss";
import logo from "/logo.png";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Functions from "../../components/Functions";
import Plans from "../../components/Plans";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <header className="header">
        <span>
          <img src={logo} />
        </span>
        <h1>Pacientes & Cuidadores</h1>
      </header>
      <Navbar />
      <Hero />
      <div className="introduction" id="sobre">
        <p>
          No Pacientes & Cuidadores, acreditamos que todo cuidado deve ser
          humano, acessível e seguro. Nosso aplicativo foi criado para
          simplificar a conexão entre quem precisa de atendimento domiciliar —
          como idosos, pessoas em recuperação ou com necessidades especiais — e
          profissionais qualificados, com transparência e praticidade.
        </p>
      </div>
      <Functions />
      <div className="anotherhero">
        <h3>Teste o Plano Premium por 30 dias grátis!</h3>
        <button>COMECE SEU TESTE GRATUITO</button>
      </div>
      <Plans />
      <Footer />
    </>
  );
};

export default Home;
