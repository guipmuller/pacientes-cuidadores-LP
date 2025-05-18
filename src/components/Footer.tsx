import instaicon from "../assets/instaicon.svg";
import phoneicon from "/public/phoneicon.svg";
import googleplayicon from "../assets/googleplayicon.svg";

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <span>
        <section className="socials">
          <span>
            <img src={instaicon} />
            <a href="">Instagram</a>
          </span>
          <span>
            <img src={googleplayicon} />
            <a href="">Google Play</a>
          </span>
          <span>
            <img src={phoneicon} />
            <a href="">(11) 22222-3333</a>
          </span>
        </section>
        <p>
          © 2025 Pacientes & Cuidadores. Todos os direitos reservados.
          <br />
          <a href="">Termos de Uso</a> • <a href="">Política de Privacidade</a>
        </p>
      </span>
      <form>
        <h4>Entre em contato conosco!</h4>
        <input type="email" placeholder="Digite seu email" />
        <textarea
          rows={4}
          placeholder="Digite sua mensagem"
          className="messageInput"
        />
        <button>Enviar mensagem</button>
      </form>
    </footer>
  );
};

export default Footer;
