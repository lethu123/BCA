import React, {Fragment, useState, useEffect} from 'react'
// *** Store & Actions
import {useSelector, useDispatch} from 'react-redux'
import {
  fetchEvents,
  selectEvent,
  updateEvent,
  updateFilter,
  updateAllFilters,
  addEvent,
  removeEvent,
} from './actions'
// *** Custom Hooks
import {useRTL} from 'utility/hooks/useRTL'
// *** Third Party Components
import classnames from 'classnames'
import {Row, Col, Button} from 'reactstrap'
// *** Calendar App Component Imports
import Calendar from './Calendar'
import SidebarLeft from './SidebarLeft'
import AddEventSidebar from './AddEventSidebar'
// *** Styles
import '@core/scss/react/apps/app-calendar.scss'
import {Plus} from 'react-feather'
// *** CalendarColors
const calendarsColor = {
  Business: 'primary',
  Holiday: 'success',
  Personal: 'danger',
  Family: 'warning',
  ETC: 'info',
}

const CalendarWork = () => {
  // *** Variables
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // *** states
  const [addSidebarOpen, setAddSidebarOpen] = useState(false),
    [leftSidebarOpen, setLeftSidebarOpen] = useState(false),
    [calendarApi, setCalendarApi] = useState(null)

  // *** Hooks
  const [isRtl, setIsRtl] = useRTL()

  // *** AddEventSidebar Toggle Function
  const handleAddEventSidebar = () => setAddSidebarOpen(!addSidebarOpen)

  // *** LeftSidebar Toggle Function
  const toggleSidebar = val => setLeftSidebarOpen(val)

  // *** Blank Event Object
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: '',
    },
  }

  // *** refetchEvents
  const refetchEvents = () => {
    if (calendarApi !== null) {
      calendarApi.refetchEvents()
    }
  }

  // *** Fetch Events On Mount
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [])

  return (
    <Fragment>
      <div className="app-calendar overflow-hidden border mt-1">
        <div className="text-right my-2">
          <Button.Ripple
            color="primary"
            onClick={() => {
              toggleSidebar(false)
              handleAddEventSidebar()
            }}
          >
            <Plus size={14} />
            <span className="align-middle ">Tạo công việc</span>
          </Button.Ripple>
        </div>
        <p
          style={{
            backgroundColor: '#E6641F',
            color: 'white',
            fontWeight: 'bolder',
            textAlign: 'center',
            fontSize: '25px',
            padding: '20px 0',
            fontFamily: 'Montserrat',
          }}
        >
          LỊCH CÔNG VIỆC
        </p>
        <Row
        //  noGutters
        >
          <Col
            // id="app-calendar-sidebar"
            // className={classnames(
            //   'col app-calendar-sidebar flex-grow-0 overflow-hidden d-flex flex-column',
            //   {
            //     show: leftSidebarOpen,
            //   },
            // )}

            md="5"
            lg="3"
          >
            <SidebarLeft
              store={store}
              dispatch={dispatch}
              updateFilter={updateFilter}
              toggleSidebar={toggleSidebar}
              updateAllFilters={updateAllFilters}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <Col md="7" lg="9" className="position-relative">
            <Calendar
              isRtl={isRtl}
              store={store}
              dispatch={dispatch}
              blankEvent={blankEvent}
              calendarApi={calendarApi}
              selectEvent={selectEvent}
              updateEvent={updateEvent}
              toggleSidebar={toggleSidebar}
              calendarsColor={calendarsColor}
              setCalendarApi={setCalendarApi}
              handleAddEventSidebar={handleAddEventSidebar}
            />
          </Col>
          <div
            className={classnames('body-content-overlay', {
              show: leftSidebarOpen === true,
            })}
            onClick={() => toggleSidebar(false)}
          ></div>
        </Row>
      </div>
      <AddEventSidebar
        store={store}
        dispatch={dispatch}
        addEvent={addEvent}
        open={addSidebarOpen}
        selectEvent={selectEvent}
        updateEvent={updateEvent}
        removeEvent={removeEvent}
        calendarApi={calendarApi}
        refetchEvents={refetchEvents}
        calendarsColor={calendarsColor}
        handleAddEventSidebar={handleAddEventSidebar}
      />
    </Fragment>
  )
}
export default CalendarWork
