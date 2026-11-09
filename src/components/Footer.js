import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · Feito com Next.js & React
        </p>
        <p className="footer-links">
          <a href={`mailto:${profile.emails[0]}`}>E-mail</a>
          <a href={`https://wa.me/${profile.phoneLink}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          {profile.github && (
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          )}
        </p>
      </div>
    </footer>
  );
}
