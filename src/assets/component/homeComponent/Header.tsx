import { useTranslation } from "react-i18next"



const Header = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <h1>{t("header.message")}</h1>
  )
}

export default Header