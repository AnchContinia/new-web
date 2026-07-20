// Continia website — footer + demo dialog
const { Logo, Input, Button, Checkbox } = window.ContiniaDesignSystem_354b58;

function Footer() {
  const cols = {
    Solutions: ["Document Capture", "Document Output", "Expense Management", "Payment Management", "Continia Finance", "Continia Banking", "Collection Management", "OPplus"],
    "Continia Software": ["Contact", "Meet the team", "About us", "Career", "Working at Continia", "Find a partner"],
    Resources: ["Use cases", "News", "Blog", "Webinars", "Support", "Learn", "Docs", "Partnerzone"],
  };
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Logo color="white" height={30} />
          <p>Scalable add-on solutions for Microsoft Dynamics 365 Business Central<br />— 100% built inside.</p>
          <div className="site-footer__social">
            {["linkedin-in","youtube"].map((s) => <a key={s} href="#" aria-label={s}><i className={"fa-brands fa-" + s} /></a>)}
          </div>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h} className="site-footer__col">
            <h4>{h}</h4>
            {items.map((it) => <a key={it} href="#">{it}</a>)}
          </div>
        ))}
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Continia Software A/S. It's about time.</span>
        <div className="site-footer__legal"><a href="#">Cookie &amp; privacy policy</a><a href="#">Trust Center</a><a href="#">License terms</a></div>
      </div>
    </footer>
  );
}

function DemoDialog({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close"><i className="fa-light fa-xmark" /></button>
        {!sent ? (
          <>
            <span className="eyebrow">Get a free trial</span>
            <h3 className="modal__title">Start automating in Business Central</h3>
            <p className="modal__sub">Tell us a little about your team and we'll point you to a free trial on Microsoft AppSource.</p>
            <div className="modal__form">
              <Input label="Work email" type="email" required placeholder="you@company.com" icon={<i className="fa-light fa-envelope" />} />
              <Input label="Company" placeholder="Acme A/S" />
              <Checkbox label="I'd like product updates from Continia" defaultChecked />
              <Button block size="lg" onClick={() => setSent(true)}>Get my free trial</Button>
            </div>
          </>
        ) : (
          <div className="modal__done">
            <div className="modal__check"><i className="fa-light fa-check" /></div>
            <h3 className="modal__title">It's about time — thanks!</h3>
            <p className="modal__sub">Check your inbox for your free-trial link. You can count on us.</p>
            <Button variant="secondary" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Footer, DemoDialog });
