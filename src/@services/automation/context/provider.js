import {createContext, useContext, useMemo} from 'react'

import combineComponents from '@services/@context/combineComponents'

import {Provider as SettingCommentProvider} from './setting-comment'
import {Provider as SettingEmailProvider} from './setting-email'

const INITIALSTATE = {}

const AutomationContext = createContext({
  ...INITIALSTATE,
})

export const AutomationProvider = ({children}) => {
  const store = useMemo(() => {
    return {initstate: 'hello word'}
  }, [])

  const providers = [SettingCommentProvider, SettingEmailProvider]
  const AutomationCombineProvider = combineComponents(...providers)

  return (
    <AutomationContext.Provider value={store}>
      <AutomationCombineProvider>{children}</AutomationCombineProvider>
    </AutomationContext.Provider>
  )
}

export const useAutomationCtx = () => {
  const context = useContext(AutomationContext)
  return context
}
