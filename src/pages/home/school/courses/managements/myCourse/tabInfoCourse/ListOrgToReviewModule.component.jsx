import React, {useEffect, useState} from 'react'
import {Input} from 'reactstrap'

import {AgGridReact} from 'ag-grid-react'
import {Search} from 'react-feather'
// import '@core/scss/react/libs/tables/agGridStyleOverride.scss'
// import {getListOrgInSystem} from 'redux/actions/hschools/courseAction'
import {useDispatch, useSelector} from 'react-redux'
// import {selectOrgsInSystem} from 'redux/reselects/hschools/course.reselect'
const ListOrgToReviewModule = props => {
  const [state, setState] = useState({
    rowData: null,
    pageSize: 20,
    isVisible: true,
    reload: false,
    collapse: true,
    status: 'Opened',
    role: 'All',
    selectStatus: 'All',
    verified: 'All',
    department: 'All',
    defaultColDef: {
      sortable: true,
    },
    searchVal: '',
    columnDefs: [
      {
        headerName: 'Username',
        field: 'username',
        // filter: true,
        // width: 250,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
        cellRendererFramework: params => {
          return (
            <div
              className="d-flex align-items-center cursor-pointer"
              // onClick={() => history.push('/app/user/edit')}
            >
              <img
                className="rounded-circle mr-50"
                src={params.data.org_picture}
                alt="user avatar"
                height="30"
                width="30"
              />
              <span>{params.data.org_name}</span>
            </div>
          )
        },
      },
      {
        headerName: 'Location',
        field: 'location',
        // filter: true,
        width: 250,
        cellRendererFramework: params => {
          return (
            <div
              className="d-flex align-items-center cursor-pointer"
              // onClick={() => history.push('/app/user/edit')}
            >
              <span>{params.data.org_street_address ?? 'Updating'}</span>
            </div>
          )
        },
      },
      {
        headerName: 'Owner',
        field: 'owner',
        // filter: true,
        // width: 200,
        cellRendererFramework: params => {
          return (
            <div
              className=" cursor-pointer"
              style={{lineHeight: '15px'}}
              // onClick={() => history.push('/app/user/edit')}
            >
              <p className="m-0">{params.data.admin.username}</p>
              <span>{params.data.admin.email}</span>
            </div>
          )
        },
      },
    ],
  })

  const [gridApi, setGridApi] = useState(null)
  const dispatch = useDispatch()
  // const orgsInSystem = useSelector(selectOrgsInSystem)

  const limit = 10

  // useEffect(() => {
  //   dispatch(getListOrgInSystem('', null, limit))
  // }, [dispatch])

  // useEffect(() => {
  //   if (orgsInSystem) {
  //     setState({...state, rowData: orgsInSystem})
  //   }
  // }, [orgsInSystem])

  const onGridReady = params => {
    setGridApi(params.api)

    // Following line to make the currently visible columns fit the screen
    params.api.sizeColumnsToFit()

    // Following line dymanic set height to row on content
    params.api.resetRowHeights()
  }

  const updateSearchQuery = val => {
    gridApi.setQuickFilter(val)
    setState({...state, searchVal: val})
  }

  const onSelectionChanged = () => {
    var selectedRows = gridApi.getSelectedRows()
    props.setOrgInfo(selectedRows)
  }

  // const {rowData, columnDefs, defaultColDef, pageSize} = this.state
  return (
    <div
      className="ag-theme-material ag-grid-table"
      style={{height: 'calc(100vh - 20rem)', marginBottom: '50px'}}
    >
      <div className="ag-grid-actions d-flex justify-content-between flex-wrap mb-1">
        <div className="d-flex flex-wrap justify-content-end w-100">
          <div className="position-relative has-icon-left mb-1">
            <Input
              onChange={e => updateSearchQuery(e.target.value)}
              value={state.searchVal}
            />
            <div className="form-control-position">
              <Search size="15" />
            </div>
          </div>
        </div>
      </div>

      {state.rowData && state.rowData.length > 0 ? (
        <AgGridReact
          gridOptions={{}}
          rowSelection="single"
          defaultColDef={state.defaultColDef}
          columnDefs={state.columnDefs}
          rowData={state.rowData}
          onGridReady={onGridReady}
          colResizeDefault={'shift'}
          animateRows={true}
          // floatingFilter={true}
          pagination={true}
          pivotPanelShow="always"
          paginationPageSize={state.pageSize}
          resizable={true}
          onSelectionChanged={onSelectionChanged}
        />
      ) : null}
    </div>
  )
}

export default ListOrgToReviewModule
