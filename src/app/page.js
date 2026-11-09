import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Weather from "@/components/Weather";
import { profile, skills } from "@/data/profile";

const shortcuts = [
  { href: "/sobre", icon: "👩‍💻", title: "Sobre", text: "Quem sou eu e a stack deste site." },
  { href: "/experiencia-academica", icon: "🎓", title: "Acadêmica", text: "UNICAP e formação técnica." },
  { href: "/experiencia-profissional", icon: "💼", title: "Profissional", text: "Minha trajetória como jovem aprendiz." },
  { href: "/projetos", icon: "🚀", title: "Projetos", text: "Repositórios direto do GitHub." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Olá, eu sou</p>
          <h1>
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="hero-role">
            <Typewriter words={profile.roles} />
          </p>
          <p className="lead">
            Busco minha primeira oportunidade em tecnologia para aplicar o que aprendo, crescer na prática e
            construir uma carreira sólida em TI. Organização, responsabilidade e vontade de aprender são o meu ponto de partida.
          </p>
          <div className="hero-cta">
            <Link href="/projetos" className="btn primary">Ver projetos</Link>
            <a href={`mailto:${profile.emails[0]}`} className="btn ghost">Fale comigo</a>
            <a href={`https://wa.me/${profile.phoneLink}`} target="_blank" rel="noopener noreferrer" className="btn ghost">WhatsApp</a>
          </div>
        </div>

        <div className="hero-side">
          <div className="avatar" aria-hidden="true">
            <span>ME</span>
          </div>
          <Weather />
        </div>
      </section>

      <section className="stats">
        <div className="card stat"><strong>{profile.age}</strong><span>anos</span></div>
        <div className="card stat"><strong>3º/5</strong><span>período na UNICAP</span></div>
        <div className="card stat"><strong>2 anos</strong><span>de experiência profissional</span></div>
        <div className="card stat"><strong>Dez/2027</strong><span>previsão de formatura</span></div>
      </section>

      <section className="section">
        <h2 className="section-title">Explore o site</h2>
        <div className="grid cols-4">
          {shortcuts.map((s) => (
            <Link key={s.href} href={s.href} className="card shortcut">
              <span className="shortcut-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Ferramentas e linguagens</h2>
        <div className="chips">
          {skills.tools.map((t) => (
            <span key={t.name} className="chip">{t.name}</span>
          ))}
        </div>
      </section>
    </>
  );
}
