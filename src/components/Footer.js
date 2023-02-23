import tmdbLogo from "../assets/Tmdb-long.svg";

export default function Footer() {
  return (
    <footer className="text-xs text-app-greyish-blue w-full text-center">
      <p>Powered by</p>
      <a
        href="https://www.themoviedb.org/about/logos-attribution"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={tmdbLogo}
          width={150}
          height={20}
          alt="powered by TMDB"
          unoptimized
        />
      </a>
    </footer>
  );
}
