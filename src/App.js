import "./App.css";

function App() {
  return (
    <div className="qr-conteiner" style={style.qrconteiner}>
      <div className="qr-img">
        <img src={require("./assets/qr.png")} style={style.qrimg}></img>
      </div>
      <div className="qr-infos" style={style.qrinfos}>
        <h2 style={style.h2}>Improve your front-end skills by building projects</h2>
        <p style={style.p}>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </div>
  );
}
const style = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    Height: "100vh",
  },
  qrconteiner: {
    width: "320px",
    height: "497px",
    background: "#ffffff",
    boxShadow: "0px 25px 25px rgba(0, 0, 0, 0.0476518)",
    borderRadius: "20px",
    display: "flex",
    justifyCcontent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  qrimg: {
    width: "288px",
    height: "288px",
    borderRadius: "10px",
    marginTop: "16px",
  },
  qrinfos: {
    marginTop: "24px",
    height: "129px",
    width: "288px",
  },
  h2: {
    // paddingLeft: "16px",
    // paddingRight: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "28px",
    textAlign: "center",
    Color: "#1f314f",
    marginBottom: "16px",
  },
  p: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "19px",
    textAlign: "center",
    letterSpacing: "0.1875px",
    color: "#7d889e",
  },
};

export default App;
