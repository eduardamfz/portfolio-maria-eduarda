import { profile, skills, stack } from "@/data/profile";

export const metadata = { title: "Sobre" };

export default function Sobre() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Sobre</p>
        <h1>Quem sou eu</h1>
      </header>

      <section className="grid cols-2 about-grid">
        <div className="card">
          {profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? "lead-sm" : undefined}>{p}</p>
          ))}
          <ul className="contact-list">
            <li><span>📍</span> {profile.city}</li>
            {profile.emails.map((e) => (
              <li key={e}><span>✉️</span> <a href={`mailto:${e}`}>{e}</a></li>
            ))}
            <li><span>📱</span> <a href={`https://wa.me/${profile.phoneLink}`} target="_blank" rel="noopener noreferrer">{profile.phone}</a></li>
          </ul>
        </div>

        <div className="card">
          <h3>Nível nas ferramentas</h3>
          <ul className="bars">
            {skills.tools.map((t) => (
              <li key={t.name}>
                <div className="bar-label"><span>{t.name}</span><span>{t.level}%</span></div>
                <div className="bar"><i style={{ width: `${t.level}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Qualificações e habilidades</h2>
        <div className="chips">
          {skills.soft.map((s) => (
            <span key={s} className="chip soft">{s}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Tecnologias e módulos deste site</h2>
        <p className="muted section-sub">
          Tudo o que foi usado para desenvolver esta aplicação, do framework às APIs integradas.
        </p>
        <div className="grid cols-3">
          {stack.map((s) => (
            <article key={s.name} className="card stack-item">
              <span className="tag">{s.type}</span>
              <h3>{s.name}</h3>
              <p className="muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
