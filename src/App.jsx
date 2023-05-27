import {
  Estadistica,
  Home,
  ResistenciaOcular,
  VisionPeriferica,
} from "./pages";
import GlobalStyle from "./styles/globalStyles";
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <VisionPeriferica />
      <ResistenciaOcular />
      <Estadistica />
    </>
  );
}

export default App;
