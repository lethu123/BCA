// *** Redux Imports
import {combineReducers} from 'redux'

// *** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@services/chat/store/reducer'
import todo from 'views/apps/todo/store/reducer'
import users from 'views/apps/user/store/reducer'
import email from 'views/apps/email/store/reducer'
import invoice from 'views/apps/invoice/store/reducer'
import calendar from 'views/apps/calendar/store/reducer'
import ecommerce from 'views/apps/ecommerce/store/reducer'
import dataTables from 'views/tables/data-tables/store/reducer'

import async from './async/asyncReducer'
import homeReducer from './home/homePageReducer'
import staticDataReducer from './static/staticDataReducer'
import userReducer from './user/userReducer'
import marketplaceReducer from './marketplace/marketplaceReducer'
import voucherReducer from './voucher/voucherReducer'
import invoiceReducer from './invoice/invoiceReducer'
import notificationReducer from './notification/notificationReducer'
import newsfeedReducer from './newsfeed/newsfeedReducer'
import sugestionReducer from './suggestion/suggestionReducer'
// import chatReducer from './chat/chatReducer'
import customerReducer from './customer/customerReducer'

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables,

  // Sasam Viet
  async,
  homeReducer,
  userReducer,
  marketplaceReducer,
  voucherReducer,
  invoiceReducer,
  notificationReducer,
  newsfeedReducer,
  sugestionReducer,
  // chatReducer,
  customerReducer,
  staticDataReducer,
})

export default rootReducer
