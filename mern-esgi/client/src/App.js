import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "./components/ButtonGroup";
import Page from "./components/Page";
import Page1 from "./components/Page";
import Page2 from "./components/Page";
import { useState } from "react";
import Button from "./components/lib/Button";

function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup theme={theme} />
        <Button title="Change Page" onClick={() => setPage((page + 1) % 3)} />
        {page === 0 && <Page theme={theme} setTheme={setTheme} />}
        {page === 1 && <Page1 theme={theme} setTheme={setTheme} />}
        {page === 2 && <Page2 theme={theme} setTheme={setTheme} />}
      </header>
    </div>
  );
}

export default App;
