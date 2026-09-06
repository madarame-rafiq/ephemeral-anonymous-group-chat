import { navbarStyles } from "../styles/tailwindStyles";

const Navbar = () => {
  return (
    <nav className={navbarStyles.nav}>
      <div>
        <span className={navbarStyles.brand}>Ephemeral Chat</span>
      </div>
      <div>
        <span className={navbarStyles.repoText}>
          Checkout the repo{" "}
          <a
            href="https://github.com/madarame-rafiq/ephemeral-anonymous-group-chat"
            target="_blank"
            rel="noopener noreferrer"
            className={navbarStyles.repoLink}
          >
            GitHub
          </a>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;