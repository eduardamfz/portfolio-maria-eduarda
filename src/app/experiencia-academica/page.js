import { education, courses } from "@/data/profile";

export const metadata = { title: "Experiência Acadêmica" };

export default function Academica() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Experiência Acadêmica</p>
        <h1>Formação e cursos</h1>
      </header>

      <section className="timeline">
        {education.map((e) => (
          <article key={e.title} className="timeline-item">
            <span className="timeline-dot" />
            <div className="card">
              <div className="card-top">
                <span className="period">{e.period}</span>
                <span className={`badge ${e.status === "Em andamento" ? "live" : ""}`}>{e.status}</span>
              </div>
              <h3>{e.title}</h3>
              <p className="place">{e.place}</p>
              <p className="muted">{e.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Cursos complementares</h2>
        <div className="grid cols-2">
          {courses.map((c) => (
            <article key={c.title} className="card">
              <span className="tag">Certificação</span>
              <h3>{c.title}</h3>
              <p className="muted">{c.place}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
