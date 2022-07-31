import './ContactBar.css';

const ContactBar = () => {
  return (
    <div id="contactBarDiv">
      <div id="contactLinksWrapper">
        <span className="material-symbols-outlined">headset_mic</span>
        <div className="contactLink">
          <a href="localhost:3000">+1 (505) 492-0979</a>
        </div>
        <span className="material-symbols-outlined">mail</span>
        <div className="contactLink">
          <a href="localhost:3000">sales: info@indicalab.com</a>
        </div>
        <span className="material-symbols-outlined">mail</span>
        <div className="contactLink">
          <a href="localhost:3000">support: support@indicalab.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
