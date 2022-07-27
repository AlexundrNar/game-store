import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import OrderPage from "./pages/OrderPage";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
