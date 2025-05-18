import FunctionsCard from "./FunctionsCard";
import profileicon from "../assets/profileicon.svg";
import ratingicon from "../assets/ratingicon.svg";
import calendaricon from "../assets/calendaricon.svg";

const Functions = () => {
  return (
    <section className="functions" id="funcionalidades">
      <h2>Funcionalidades que facilitam a sua rotina</h2>
      <div className="functionsContainer">
        <FunctionsCard>
          <span className="imgcontainer">
            <img src={profileicon} />
          </span>
          <h3>Perfil personalizado</h3>
          <p>
            Crie seu perfil detalhado, seja como paciente ou cuidador,
            destacando necessidades, experiências e especializações.
          </p>
        </FunctionsCard>

        <FunctionsCard>
          <span className="imgcontainer">
            <img src={calendaricon} />
          </span>
          <h3>Agendamento intuitivo</h3>
          <p>
            Marque acompanhamentos de forma rápida acessando nosso catálogo de
            cuidadores disponíveis.
          </p>
        </FunctionsCard>

        <FunctionsCard>
          <span className="imgcontainer">
            <img src={ratingicon} />
          </span>
          <h3>Avaliação transparente</h3>
          <p>
            Compartilhe feedbacks sobre os atendimentos, ajudando outros
            usuários a escolherem os melhores profissionais.
          </p>
        </FunctionsCard>
      </div>
    </section>
  );
};

export default Functions;
