import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "Maria Eduarda Fernandes · Portfólio",
    template: "%s · Maria Eduarda Fernandes",
  },
  description:
    "Portfólio e currículo de Maria Eduarda Fernandes, estudante de Sistemas para Internet e técnica em Desenvolvimento de Sistemas.",
};

// Aplica o tema salvo antes da hidratação para evitar "piscada".
const themeScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  if(!t){ t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; }
  document.documentElement.setAttribute('data-theme', t);
}catch(e){}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="bg-orbs" aria-hidden="true">
          <span className="orb orb-1" />
          <span className="orb orb-2" />
          <span className="orb orb-3" />
        </div>
        <Navbar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
