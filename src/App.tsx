import { useEffect } from "react";
import CryptoSearchForm from "./components/CryptoSearchForm";
import { useCryptoStore } from "./store";
import CryptoDisplayPrice from "./components/CryptoDisplayPrice";

function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCryptos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CryptoSearchForm />
          <CryptoDisplayPrice />
        </div>
      </div>
    </>
  );
}

export default App;
