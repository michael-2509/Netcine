import tmdbLogo from "../assets/tmdb-logo.svg";

export default function Footer() {
  return (
    <footer className="text-xs text-app-greyish-blue w-full text-center">
      <p className="text-white">Powered by</p>
      <a
        href="https://www.themoviedb.org/about/logos-attribution"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="m-auto w-[50px]"
          src={tmdbLogo}
          width={150}
          height={20}
          alt="powered by TMDB"
        />
      </a>
    </footer>
  );
}
