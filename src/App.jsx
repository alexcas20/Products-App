import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AppRouting } from "./routes/AppRouting";
import { Provider } from "./context/Provider";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <NavBar />
          <AppRouting />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
