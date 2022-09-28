import {createContext, useContext, useMemo} from 'react'

import combineComponents from '@services/@context/combineComponents'

import {Provider as LocationGroupProvider} from './location-group'

const INITIALSTATE = {}

const GroupContext = createContext({
  ...INITIALSTATE,
})

export const GroupProvider = ({children}) => {
  const store = useMemo(() => {
    return {initstate: 'hello word'}
  }, [])

  const providers = [LocationGroupProvider]
  const GroupCombineProvider = combineComponents(...providers)

  return (
    <GroupContext.Provider value={store}>
      <GroupCombineProvider>{children}</GroupCombineProvider>
    </GroupContext.Provider>
  )
}

export const useGroupCtx = () => {
  const context = useContext(GroupContext)
  return context
}
