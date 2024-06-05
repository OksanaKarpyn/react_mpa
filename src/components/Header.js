function Header() {
  const currentPath = window.location.pathname;
  return (
    <>
      <nav className="header-nav">
        <ul className="header-list">
          <li>
            <a href="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={currentPath === "/about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/category"
              className={currentPath === "/category" ? "active" : ""}
            >
              Category
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
