// use -- npm i i18next react-i18next == for instalation

import global_en from './translation/en/global.json'
import global_sn from './translation/sp/global.json'

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Home from './assets/component/homeComponent/Home';
import Header from './assets/component/homeComponent/Header';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    sp: {
      global: global_sn
    },
  }
})

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Header />
      <Home />
    </I18nextProvider>
  );
};

export default App;