// Continia website — top navigation header
const { Logo, Button } = window.ContiniaDesignSystem_354b58;

function Header({ onDemo }) {
  const [open, setOpen] = React.useState(false);
  const links = ["Solutions", "Use cases", "Pricing", "Why Continia?"];
  const hasMenu = { "Solutions": true, "Use cases": true };
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="#" aria-label="Continia home">
          <Logo height={30} />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <a key={l} className="site-nav__link" href="#">{l}{hasMenu[l] && <i className="fa-light fa-chevron-down" />}</a>
          ))}
        </nav>
        <div className="site-header__actions">
          <a className="site-nav__link site-nav__signin" href="#"><i className="fa-light fa-location-dot" /> Find a partner</a>
          <Button size="sm" onClick={onDemo}>Get a free trial</Button>
          <button className="site-header__burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <i className={"fa-light fa-" + (open ? "xmark" : "bars")} />
          </button>
        </div>
      </div>
      {open && (
        <div className="site-header__mobile">
          {links.map((l) => <a key={l} href="#" className="site-nav__link">{l}</a>)}
          <a href="#" className="site-nav__link">Find a partner</a>
        </div>
      )}
    </header>
  );
}
window.Header = Header;
