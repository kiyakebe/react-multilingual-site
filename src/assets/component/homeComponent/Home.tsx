import { useTranslation } from "react-i18next"

const Home = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <h4>{t("home.body")}</h4>
  )
}

export default Home