import "./Terminal.scss"

function Terminal() {
  return (
    <div className="terminal__wrapper">
      <div className="terminal__bar">
        <span className="dot red"></span>
        <span className="dot orange"></span>
        <span className="dot green"></span>
      </div>
      <div className="terminal">
        <p>Magda.currentLocation</p>
        <p>"Manchester, UK"</p>
        <p>Magda.contactInfo</p>
        <p>["magda@...."]</p>
        <p>Magda.interests</p>
        <p>["running", "climbing", "art", "mud"]</p>
        <p>Magda.interests</p>
        <p>["running", "climbing", "art", "mud"]</p>
        <p>Magda.interests</p>
        <p>["running", "climbing", "art", "mud"]</p>
        <p>Magda.interests</p>
        <p>["running", "climbing", "art", "mud"]</p>
      </div>
    </div>
  );
}

export default Terminal;
