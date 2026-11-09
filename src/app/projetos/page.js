import Repos from "@/components/Repos";

export const metadata = { title: "Projetos Desenvolvidos" };

export default function Projetos() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Projetos Desenvolvidos</p>
        <h1>Meus projetos</h1>
        <p className="muted">Lista atualizada em tempo real a partir da API do GitHub.</p>
      </header>
      <Repos />
    </>
  );
}
