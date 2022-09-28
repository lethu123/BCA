// *** Checks if an object is empty (returns boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0

// *** Returns K format from a number
export const kFormatter = num =>
  num > 999 ? `${(num / 1000).toFixed(1)}k` : num

// *** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// *** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

// *** Format time 20-10-2022 from date
export function formatViDate(time) {
  let day = new Date(time).getDate()
  let month = new Date(time).getMonth() + 1
  let year = new Date(time).getFullYear()
  let fulltime = `${day < 10 ? '0' + day : day}-${
    month < 10 ? '0' + month : month
  }-${year}`
  return fulltime
}

// *** Format time 20-10-2022 from date
export function deFormatViDate(time) {
  let arrTime = time.split('-')
  return `${arrTime[2]}-${arrTime[1]}-${arrTime[0]}`
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (
  value,
  formatting = {month: 'short', day: 'numeric', year: 'numeric'},
) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// *** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = {month: 'short', day: 'numeric'}

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = {hour: 'numeric', minute: 'numeric'}
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

/**
 ** Return if user is logged in
 ** This is completely up to you and how you want to store the token in your frontend application
 *  ? e.g. If you are using cookies to store the application please update this function
 */
export const isUserLoggedIn = () => localStorage.getItem('userData')
export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/**
 ** This function is used for demo purpose route navigation
 ** In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 ** Please note role field is just for showing purpose it's not used by anything in frontend
 ** We are checking role just for ease
 * ? NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return '/access-control'
  return '/login'
}

// *** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#E6641F1a', // for option hover bg-color
    primary: '#F3743C', // for selected option bg-color
    neutral10: '#E6641F', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed', // for input hover border-color
  },
})

// *** Handle initial State Reducer
export const handleInitialStateReducer = data => ({
  ...data,
  metadata: Object.keys(data).reduce((accumulator, currentValue) => {
    if (data[currentValue] && Array.isArray(data[currentValue])) {
      return {
        ...accumulator,
        [currentValue]: {
          numPages: 1,
          count: 1,
          limit: 7,
          currentPage: 1,
          searchValue: '',
        },
      }
    } else {
      return accumulator
    }
  }, {}),
})

// ***   remove key if value of key = null || ""
export const cleanObject = obj => {
  for (let attr in obj) {
    if (!obj[attr] && obj[attr] !== 0) delete obj[attr]
  }
  return obj
}

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)

// ** substring
export const subStr = (string, maxlen) => {
  if (string) {
    if (string.length > maxlen) string = string.substring(0, maxlen - 3) + '...'
    return string
  }
}

// *** Handle query search to object
export const handleQuerySearchToObject = location => {
  var search = location.search.substring(1)
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}',
  )
}

export function queryErrorHandler(error) {
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  const errorString =
    error instanceof Error
      ? // remove the initial 'Error: ' that accompanies many errors
        error.toString().replace(/^Error:\s*/, '')
      : error.msg
      ? error.msg
      : 'error connecting to server'

  // prevent duplicate toasts
  return errorString
}

// *** Format Currency
export function formatThousandCurrency(number) {
  return Intl.NumberFormat('en-US').format(number)
}
// *** Devices ID
export function deviceId() {
  var navigator_info = window.navigator
  var screen_info = window.screen
  var uid = navigator_info.mimeTypes.length
  uid += navigator_info.userAgent.replace(/\D+/g, '')
  uid += navigator_info.plugins.length
  uid += screen_info.height || ''
  uid += screen_info.width || ''
  uid += screen_info.pixelDepth || ''
  return uid
}

export const filterDaTa = data => {
  const newData = [
    {label: 'Email', value: data.email},
    {label: 'SĐT', value: data.phone},
    {
      label: 'Giới tính',
      value: data.gender ? (data.gender === 'Male' ? 'Nam' : 'Nữ') : '',
    },
    {label: 'Học vấn', value: data._education},
    {label: 'Sống tại', value: data._places_lived?.current_city},
    {label: 'Làm việc tại', value: data._work},
  ]
  let result = []
  newData.forEach(item => {
    if (result.length < 4) {
      if (item.value) result.push(item)
    }
  })

  return result
}

export const findDiffElementTwoArr = (arr1, arr2, key) => {
  let data = []
  let arrLoop =
    arr1.length > arr2.length
      ? {
          ids: arr1.map(el => el[key]),
          list: arr1,
        }
      : {
          ids: arr2.map(el => el[key]),
          list: arr2,
        }
  let arrCheck =
    arr1.length < arr2.length
      ? {
          ids: arr1.map(el => el[key]),
          list: arr1,
        }
      : {
          ids: arr2.map(el => el[key]),
          list: arr2,
        }
  arrLoop.ids.forEach(id => {
    if (!arrCheck.ids.includes(id)) {
      let obj = arrLoop.list.find(l => l[key] === id)
      data.push(obj)
    }
  })
  return data
}

// *** Uppercase first letter
export const uppercaseFirstLetter = str =>
  str.charAt(0).toUpperCase() + str.slice(1)

// *** Update multiple array state
export const updateMultipleArrState = (arr, state, key) => {
  let lists = arr.map(ele => ele[key])
  return state.map(el =>
    lists.includes(el[key]) ? arr.find(el1 => el1[key] === el[key]) : el,
  )
}

export const checkPositiveNumber = value =>
  !Number.isInteger(+value) || +value < 0

export const detectURL = text => {
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  return text.match(urlRegex)
}

export const detectUrlYoutube = url => {
  let regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
  let match = url.match(regExp)
  if (match && match[2].length === 11) {
    return true
  } else {
    return false
  }
}
