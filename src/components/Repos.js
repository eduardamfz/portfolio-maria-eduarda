"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

// Integração com a GitHub REST API: https://docs.github.com/rest
const colors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#7c5cff",
  Python: "#3572a5",
  "C#": "#178600",
  PHP: "#4f5d95",
};

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "hoje";
  if (days < 30) return `há ${days} dia${days > 1 ? "s" : ""}`;
  const months = Math.floor(days / 30);
  if (months < 12) return `há ${months} ${months > 1 ? "meses" : "mês"}`;
  const years = Math.floor(months / 12);
  return `há ${years} ano${years > 1 ? "s" : ""}`;
}

export default function Repos() {
  const user = profile.github;
  const [repos, setRepos] = useState([]);
  const [account, setAccount] = useState(null);
  const [state, setState] = useState(user ? "loading" : "nouser");

  useEffect(() => {
    if (!user) return;
    let alive = true;
    Promise.all([
      fetch(`https://api.github.com/users/${user}`).then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=50`).then((r) =>
        r.ok ? r.json() : Promise.reject()
      ),
    ])
      .then(([acc, list]) => {
        if (!alive) return;
        setAccount(acc);
        setRepos(list.filter((r) => !r.fork));
        setState("ok");
      })
      .catch(() => alive && setState("error"));
    return () => {
      alive = false;
    };
  }, [user]);

  if (state === "nouser") {
    return (
      <div className="card empty">
        <h3>Configure seu usuário do GitHub</h3>
        <p className="muted">
          Defina <code>github</code> em <code>src/data/profile.js</code> (ou a variável de ambiente{" "}
          <code>NEXT_PUBLIC_GITHUB_USER</code> na Vercel) e seus repositórios aparecerão aqui
          automaticamente via GitHub API.
        </p>
      </div>
    );
  }

  if (state === "loading") {
    return (
      <div className="grid cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card">
            <div className="skeleton" style={{ height: 22, width: "70%", marginBottom: 14 }} />
            <div className="skeleton" style={{ height: 14, marginBottom: 8 }} />
            <div className="skeleton" style={{ height: 14, width: "80%" }} />
          </div>
        ))}
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="card empty">
        <h3>Não foi possível carregar os repositórios</h3>
        <p className="muted">
          A API do GitHub pode ter atingido o limite de requisições. Tente novamente em alguns minutos ou
          acesse diretamente{" "}
          <a href={`https://github.com/${user}`} target="_blank" rel="noopener noreferrer">
            github.com/{user}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <>
      {account && (
        <div className="card gh-profile">
          <img src={account.avatar_url} alt={`Avatar de ${account.login}`} width="72" height="72" />
          <div>
            <h3>{account.name || account.login}</h3>
            <p className="muted">
              @{account.login} · {account.public_repos} repositórios públicos · {account.followers} seguidores
            </p>
          </div>
          <a className="btn ghost" href={account.html_url} target="_blank" rel="noopener noreferrer">
            Ver perfil
          </a>
        </div>
      )}

      {repos.length === 0 ? (
        <div className="card empty">
          <p className="muted">Nenhum repositório público ainda. Em breve, novos projetos por aqui!</p>
        </div>
      ) : (
        <div className="grid cols-3">
          {repos.map((r) => (
            <a
              key={r.id}
              className="card repo"
              href={r.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="repo-head">
                <h3>{r.name}</h3>
                <span aria-hidden="true">↗</span>
              </div>
              <p className="muted repo-desc">{r.description || "Sem descrição."}</p>
              <div className="repo-meta">
                {r.language && (
                  <span>
                    <i className="dot" style={{ background: colors[r.language] || "var(--accent)" }} />
                    {r.language}
                  </span>
                )}
                <span>★ {r.stargazers_count}</span>
                <span>Atualizado {timeAgo(r.pushed_at)}</span>
              </div>
              {r.homepage && <span className="tag">demo online</span>}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
