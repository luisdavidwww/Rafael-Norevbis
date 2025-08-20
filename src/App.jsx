import { useRef, useState } from "react";
import AppRoute from "./routes/AppRoute";              
import "./app.css";
import "./fonts/fonts.css";

function App() {
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(true); // Mostrar modal al inicio

  const handleStart = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => console.log("Click manual requerido"));
    }
    setShowModal(false); // Oculta la ventana
  };

  return (
    <>
      {/* 🎶 Música de fondo */}
      <audio ref={audioRef} loop>
        <source src="/music/La Gloria de Dios (Piano Instrumental) - Ánesi Sounds.mp3" type="audio/mpeg" />
      </audio>

      {/* Modal de bienvenida */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: 'Butler_Medium',
            letterSpacing:'1.5px',
            zIndex: 9999,
            color: "#fff",
            flexDirection: "column",
            textAlign: "center",
            padding: "0px"
          }}
        >
          <h1 style={{ marginBottom: "20px", fontSize: "2.52rem", fontFamily: 'Romantic_Lovely', }}>¡Bienvenido!</h1>
          <button
            onClick={handleStart}
            style={{
              padding: "12px 25px",
              fontSize: "1.1rem",
              border:"2px solid #A8904E ",
              backgroundColor: "#BEA760",
              fontFamily: 'Butler_Medium',
              color: "#fff",
              borderRadius: "50px",
              cursor: "pointer"
            }}
          >
            VER INVITACIÓN
          </button>
        </div>
      )}

      <AppRoute />
    </>
  );
}

export default App;
