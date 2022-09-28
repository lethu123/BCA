// *** React Imports
import {useState, createContext} from 'react'

// *** Intl Provider Import
import {IntlProvider} from 'react-intl'

// *** Core Language Data
import messagesEn from '@core/assets/data/locales/en.json'
import messagesDe from '@core/assets/data/locales/de.json'
import messagesFr from '@core/assets/data/locales/fr.json'
import messagesPt from '@core/assets/data/locales/pt.json'

// *** User Language Data
import userMessagesEn from 'assets/data/locales/en.json'
import userMessagesDe from 'assets/data/locales/de.json'
import userMessagesFr from 'assets/data/locales/fr.json'
import userMessagesPt from 'assets/data/locales/pt.json'

// *** Menu msg obj
const menuMessages = {
  en: {...messagesEn, ...userMessagesEn},
  de: {...messagesDe, ...userMessagesDe},
  fr: {...messagesFr, ...userMessagesFr},
  pt: {...messagesPt, ...userMessagesPt},
}

// *** Create Context
const Context = createContext()

const IntlProviderWrapper = ({children}) => {
  // *** States
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState(menuMessages['en'])

  // *** Switches Language
  const switchLanguage = lang => {
    setLocale(lang)
    setMessages(menuMessages[lang])
  }

  return (
    <Context.Provider value={{locale, switchLanguage}}>
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export {IntlProviderWrapper, Context as IntlContext}
