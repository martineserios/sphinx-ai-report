import GlobalStyle from "./styles/globalStyles";
import { RankingAnimal } from "./components/index";
import { star } from "./assets";
function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World</h1>
      <RankingAnimal />
    </>
  );
}

export default App;
