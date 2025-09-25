import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './assets/styles/footer.css';
import { BrowserRouter } from 'react-router-dom';

import { IntlProvider } from 'react-intl'
import { Provider, useSelector } from 'react-redux'
import store from './store/index.js'
import { localeSelector } from './store/selectors/appSelectors.js'

import FRANCAIS from './lang/fr.json'
import ENGLISH from './lang/en.json' 

const IntlApp = () => {

  const locale = useSelector(localeSelector)
  localStorage.setItem('locale', locale);
    var messages
    switch (locale) {
              case 'fr':
                        messages = FRANCAIS
                        break
              default:
                        messages = ENGLISH
                        break
    }
    return (
              <IntlProvider messages={messages} locale={locale} defaultLocale="fr">
                        <App />
              </IntlProvider>
    )
} 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>
        <IntlApp/>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
