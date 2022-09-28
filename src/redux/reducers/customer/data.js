import userData from './data/userData'
import customerData from './data/customerData'
import leadData from './data/leadData'
import groupExploitedData from './data/groupExploitedData'
import postExploitedData from './data/postExploitedData'
import postScheduleData from './data/postScheduleData'
import personalFacebookData from './data/personalFacebookData'
import groupFacebookData from './data/groupFacebookData'
import fanpageFacebookData from './data/fanpageFacebookData'
import sasamFacebookData from './data/sasamFacebookData'

export const data = {
  // *** User đang đăng nhập
  ...userData,

  // *** Admin section
  // *** Customer - Khách hàng
  ...customerData,

  // *** Lead - Khách hàng tiềm năng
  ...leadData,

  // *** group exploited - Khai thác nhóm
  ...groupExploitedData,

  // *** post exploited - Khai thác post
  ...postExploitedData,

  //  *** post schedule - Lịch post
  ...postScheduleData,

  // *** Take care of Facebook
  // *** Personal
  ...personalFacebookData,

  // *** Group
  ...groupFacebookData,

  //*** Fanpage */
  ...fanpageFacebookData,

  //*** Sasam */
  ...sasamFacebookData,
}
