// *** React Imports
import {Suspense, lazy} from 'react'
import ReactDOM from 'react-dom'

// *** Redux Imports
import {Provider} from 'react-redux'
import {store} from './redux/storeConfig/store'

// *** React Query
import {QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import {queryClient} from './react-query/queryClient'

// *** Intl, CASL & ThemeColors Context
import ability from './configs/acl/ability'
import {ToastContainer} from 'react-toastify'
import {AbilityContext} from './utility/context/Can'
import {ThemeContext} from './utility/context/ThemeColors'
import {IntlProviderWrapper} from './utility/context/Internationalization'

// *** ErrorBoundary
import {ErrorBoundary} from 'components/error-boundary/ErrorBoundary'

// *** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner'

// *** Ripple Button
import './@core/components/ripple-button'

// *** Fake Database
import './@fake-db'

// *** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// *** React Toastify
import '@core/scss/react/libs/toastify/toastify.scss'

// *** Core styles
import './@core/assets/fonts/feather/iconfont.css'

import './@core/scss/core.scss'

// import './assets/scss/bs4/style.scss'

import './index.scss'

// *** Service Worker
import * as serviceWorker from './serviceWorker'

// *** Lazy load app
const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={queryClient}>
          <AbilityContext.Provider value={ability}>
            <ThemeContext>
              <IntlProviderWrapper>
                <LazyApp />
              </IntlProviderWrapper>
            </ThemeContext>
          </AbilityContext.Provider>
          <ReactQueryDevtools />
        </QueryClientProvider>
        <ToastContainer newestOnTop />
      </Suspense>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
