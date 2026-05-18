import "./style.scss";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content-wrapper">
        <div className="newsletter-content">
          <h2>Inscreva-se na nossa newsletter</h2>

          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className="newsletter-form">
          <div className="form-fields">
            <input
              type="text"
              placeholder="Digite seu nome"
            />

            <input
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button type="submit">
              Inscrever
            </button>
          </div>

          <label>
            <input type="checkbox" />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;