// *** Routes Imports

import HomePageRoutes from './HomePages'
import BlankPages from './BlankPages'
import NotificationPages from './NotificationPages'
import UserRoutes from './UserPage'
import ComponentRoutes from './ComponentPage'
import AdminPage from './AdminPage'
import AutomationRoutes from './AutomationRouter'
import CampaignRoutes from './CampainRouter'
import ExploitedCustomerLeadsRouter from './ExploitedCustomerLeadsRouter'
import CustomerRoutes from './CustomerRouter'
import TestRoutes from './TestPages'
import HschoolRoutes from './HschoolPages'
import HomeRouterV1 from './HomeRouter.v1'
import LandingPageRoutes from './LandingPageRouter';

// *** Document title
const TemplateTitle = '%s - SA SÂM VIỆT'

// ** Default Route
const DefaultRoute = '/home'

// *** Merge Routes
const Routes = [
  // ...vuexyRoutes,
  ...HomePageRoutes,
  ...UserRoutes,
  ...BlankPages,
  ...NotificationPages,
  ...ComponentRoutes,
  ...AdminPage,
  // ...AutomationRoutes,
  // ...CampaignRoutes,
  ...ExploitedCustomerLeadsRouter,
  ...CustomerRoutes,
  ...TestRoutes,
  ...HschoolRoutes,
  ...HomeRouterV1,
  ...LandingPageRoutes
]

export {DefaultRoute, TemplateTitle, Routes}
