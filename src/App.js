// *** Router Import
import Router from './router/Router'
import withClearCache from './ClearCache'
import {useEffect, useRef} from 'react'
//*** query
import {useDispatch} from 'react-redux'
import {
  addNotification,
  getListNotificationSystem,
  getListNotificationUnread,
  getListUserSystem,
} from 'redux/actions/notification/notificationDataAction'
let ClearCacheComponent = withClearCache(Router)

function App() {
  const localUser = localStorage.getItem('userData')
  let user = null
  if (localUser) {
    user = JSON.parse(localStorage.getItem('userData'))
  }
  const _id = user && user.uid

  const dispatch = useDispatch()

  dispatch(getListUserSystem()).then(() => {
    dispatch(getListNotificationUnread(_id))
    dispatch(getListNotificationSystem(_id))
  })

  const socket = useRef(null)
  const socket_notification = useRef(null)

  useEffect(() => {
    if (_id) {
      socket.current = new WebSocket(
        `wss://chat.api.hspace.biz/ws/chat/group/${_id}`,
      )
      console.log('current socket', socket)

      socket.current.onopen = onOpen
      socket.current.onclose = onClose
      socket.current.onmessage = onMessage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id])

  useEffect(() => {
    if (_id) {
      socket_notification.current = new WebSocket(
        `wss://notification.api.hspace.biz/ws/notification/sys/${_id}`,
      )

      socket_notification.current.onopen = onOpenNotification
      socket_notification.current.onclose = onClose
      socket_notification.current.onmessage = onMessageNotification
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id])

  // NOTIFICATION
  function onOpenNotification(e) {
    console.log('socket connect sys', socket_notification.current.readyState)
    socket_notification.current.send(
      JSON.stringify({
        type: 'connect',
        id: _id,
      }),
    )
  }

  async function onMessageNotification(e) {
    const data = JSON.parse(e.data)
    if (!data['json_data']) {
      dispatch(addNotification(data))
    }
  }
  // END NOTIFICATION

  function onOpen(e) {
    socket.current.send(
      JSON.stringify({
        type: 'connect',
        id: _id,
      }),
    )
  }

  function onClose(e) {
    console.log('socket disconnect', e)
  }

  async function onMessage(e) {
    const data = JSON.parse(e.data)
    console.log(data)
  }

  return <ClearCacheComponent />
}

export default App
