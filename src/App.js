import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <button className="mr-6 p-3" onClick={() => i18n.changeLanguage("uz")}>uz</button>
      <button className="mr-6 p-3" onClick={() => i18n.changeLanguage("ru")}>ru</button>
      <h1>{t("hello")}</h1>
    </div>
  );
}

export default App;
