import { experience, skills } from "@/data/profile";

export const metadata = { title: "Experiência Profissional" };

export default function Profissional() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Experiência Profissional</p>
        <h1>Minha trajetória</h1>
      </header>

      <section className="timeline">
        {experience.map((x) => (
          <article key={x.role + x.company} className="timeline-item">
            <span className="timeline-dot" />
            <div className="card">
              <div className="card-top">
                <span className="period">{x.period}</span>
                <span className="badge">Concluído</span>
              </div>
              <h3>{x.role}</h3>
              <p className="place">{x.company}</p>
              <ul className="check-list">
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">O que levo dessa experiência</h2>
        <div className="grid cols-3">
          <div className="card"><span className="shortcut-icon">🗂️</span><h3>Organização</h3><p className="muted">Arquivamento de documentos e organização de informações com prazos.</p></div>
          <div className="card"><span className="shortcut-icon">🤝</span><h3>Comunicação</h3><p className="muted">Atendimento a clientes e fornecedores e direcionamento correto de demandas.</p></div>
          <div className="card"><span className="shortcut-icon">⏱️</span><h3>Responsabilidade</h3><p className="muted">Rotina profissional, compromisso com tarefas e trabalho em equipe.</p></div>
        </div>
      </section>
    </>
  );
}
