import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
