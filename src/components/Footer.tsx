import instaicon from "../assets/instaicon.svg";
import phoneicon from "/public/phoneicon.svg";
import googleplayicon from "../assets/googleplayicon.svg";
import { Bounce, toast } from "react-toastify";
import { useEffect, useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");

  const sendMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    toast.success("Mensagem enviada com sucesso!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setEmail("");
    setMessage("");
  };

useEffect(() => {
    const isEmailEmpty = email.trim() === "";
    const isMessageEmpty = message.trim() === "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setEmailError(!isEmailEmpty && !isEmailValid ? "Digite um email válido" : "")

    setIsButtonDisabled(
      isEmailEmpty || isMessageEmpty || !isEmailValid
    );
  }, [email, message]);

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
      <form onSubmit={sendMessage}>
        <h4>Entre em contato conosco!</h4>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError && <span className="error-message">{emailError}</span>}
        <textarea
          rows={4}
          placeholder="Digite sua mensagem"
          value={message}
          className="messageInput"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit" disabled={isButtonDisabled} className={isButtonDisabled ? "disabled-button" : "active-button"}>Enviar mensagem</button>
      </form>
    </footer>
  );
};

export default Footer;
