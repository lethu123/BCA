import React, {useEffect, useState, useCallback} from 'react'
import {ArrowLeft, Save} from 'react-feather'
import {Button, Spinner} from 'reactstrap'
import ReactPaginate from 'react-paginate'
// *** scss
import './AccountFB.style.scss'
// *** Third Party Components
import {ChevronDown} from 'react-feather'
import DataTable from 'react-data-table-component'
import RadioField from 'components/form/RadioField'

// *** Query
import {queryClient} from 'react-query/queryClient'
import {CustomerLeadsQuery} from '@services/customer-leads'

// *** Contant
const customStyles = {
  headCells: {
    style: {
      fontWeight: 'bold',
      fontSize: '13px',
    },
  },
  cells: {
    style: {
      fontSize: '13px',
    },
  },
}

const AccountFB = ({
  stepper,
  dataSubmit,
  onSubmit,
  isLoadingSubmit,
  isEdit,
}) => {
  // *** state
  const [currentPage, setCurrentPage] = useState(0)
  const [datas, setDatas] = useState([])
  const [pages, setPages] = useState({})
  const [pageCount, setPageCount] = useState(1)
  const [residuals, setResiduals] = useState(10)
  const [isCheckAll, setIsCheckAll] = useState(false)

  // *** Query
  const {data: dataListProfileLead, isLoading} =
    CustomerLeadsQuery.useListProfileLeads(
      '',
      currentPage + 1,
      10,
      dataSubmit.filter,
    )

  // *** Prefetch page 2 ***
  useEffect(() => {
    if (dataListProfileLead?.metadata?.num_pages) {
      let maxPostPage = dataListProfileLead?.metadata?.num_pages
      if (currentPage + 1 < maxPostPage) {
        const nextPage = currentPage + 2

        const {key, fn} = CustomerLeadsQuery.prefectListProfileLeads(
          '',
          nextPage,
          10,
          dataSubmit.filter,
        )
        queryClient.prefetchQuery(
          [...key, '', nextPage, 10, dataSubmit.filter],
          () => fn,
        )
      }
    }
  }, [currentPage, dataListProfileLead?.metadata?.num_pages, dataSubmit.filter])

  useEffect(() => {
    if (datas.length > 0) {
      let c_friend = 0
      datas.forEach(data => {
        c_friend += data.configs.length
      })
      if (c_friend === dataListProfileLead?.metadata?.count) {
        setIsCheckAll(true)
      }
    }
  }, [dataListProfileLead?.metadata?.count, datas])

  // *** handle add current list page
  useEffect(() => {
    let totalFriends = 0
    datas.forEach(account => {
      totalFriends += account.c_friends
    })

    let availableAddfriend = datas.length * 5000 - totalFriends
    let newResiduals = availableAddfriend - (currentPage + 1) * 10
    if (residuals < 0) {
      setResiduals(-newResiduals > 10 ? 10 : newResiduals + 10)
    } else {
      setResiduals(newResiduals)
    }

    if (dataListProfileLead?.data?.length > 0 && datas.length > 0) {
      if (availableAddfriend > 0) {
        let pageCount = Math.round(availableAddfriend / 10)
        let num_pages = dataListProfileLead?.metadata?.num_pages || 0

        setPageCount(pageCount < num_pages ? pageCount : num_pages)
      }

      if (!pages[currentPage + 1] && newResiduals > 0) {
        setPages(pages => ({
          ...pages,
          [currentPage + 1]: dataListProfileLead.data,
        }))

        setDatas(
          datas.map((account, accountIdx) => {
            let oids = []
            dataListProfileLead.data
              .slice(0, newResiduals > 0 ? newResiduals : -newResiduals)
              .forEach((data, dataIdx) => {
                if (account.friends?.includes(data.id)) {
                  oids = [
                    ...oids,
                    {
                      oid: data.oid,
                      uid: data.id,
                      user_name: data.user_name,
                    },
                  ]
                } else if (account.c_friends < 5000) {
                  if (dataIdx % datas.length === accountIdx) {
                    oids = [
                      ...oids,
                      {
                        oid: data.oid,
                        uid: data.id,
                        user_name: data.user_name,
                      },
                    ]
                  }
                }
              })
            account.configs = [...account.configs, ...oids]
            return account
          }),
        )
      }
    } else {
      setPageCount(0)
    }
  }, [currentPage, dataListProfileLead, datas.length, pages])

  useEffect(() => {
    if (dataSubmit?.account?.length > 0) {
      setDatas(
        dataSubmit.account
          .sort((a, b) => b.c_friends - a.c_friends)
          .map(el => ({
            ...el,
            friends: el.friends?.map(fr => String(fr.id)) || [],
            uid: el.link && el.link.split('id=')[1],
            configs: [],
          })),
      )
      setCurrentPage(0)
      setPages({})
    }
  }, [dataSubmit.account, dataSubmit.filter])

  const account = useCallback(() => {
    return (
      (datas?.length > 0 &&
        datas.map(item => ({
          name: item.username,
          width: '180px',
          center: true,
          cell: row => (
            <div className="mb-0">
              <RadioField
                type="list"
                name={`radio_${row.id}`}
                color="primary"
                inline
                options={[
                  {
                    value: `${item._id}_${row.id}`,
                    label: '',
                    checked: item.configs.find(ite => ite.uid === row.id),
                    disabled: !isEdit,
                  },
                ]}
                onChange={(name, value) => {
                  const newData = datas.map(account =>
                    account._id === item._id
                      ? {
                          ...account,
                          configs: !account.configs.find(
                            ite => ite.uid === row.id,
                          )
                            ? [
                                ...account.configs,
                                {
                                  oid: row.oid,
                                  uid: row.id,
                                  user_name: row.user_name,
                                },
                              ]
                            : account.configs,
                        }
                      : account.configs.find(ite => ite.uid === row.id)
                      ? {
                          ...account,
                          configs: account.configs.filter(
                            acc => acc.uid !== row.id,
                          ),
                        }
                      : account,
                  )
                  setDatas(newData)
                }}
              />
            </div>
          ),
        }))) ||
      []
    )
  }, [datas])

  let columns = [
    {
      name: 'Username',
      width: '200px',
      cell: row => (
        <div className="d-block font-weight-bold text-primary cursor-pointer">
          <a
            href={`/admin/potential-customers/user/${row.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            {row.user_name || row.id}
          </a>
        </div>
      ),
    },
  ]

  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  return (
    <div>
      <div className="dataTable">
        <DataTable
          className="dataTable-custom"
          noHeader
          subHeader
          customStyles={customStyles}
          data={
            dataListProfileLead?.data?.length > 0
              ? dataListProfileLead.data.slice(0, residuals)
              : []
          }
          columns={[...columns, ...account()]}
          sortIcon={<ChevronDown size={10} />}
          progressPending={
            dataListProfileLead?.data?.length > 0 ? false : isLoading
          }
          progressComponent={
            <div>
              <Button.Ripple color="flat-primary">
                <Spinner color="primary" size="sm" type="grow" />
                <span className="ml-5 text-primary">Loading...</span>
              </Button.Ripple>
            </div>
          }
        />
        <ReactPaginate
          previousLabel=""
          nextLabel=""
          forcePage={currentPage}
          onPageChange={page => handlePagination(page)}
          pageCount={pageCount || 1}
          breakLabel="..."
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          activeClassName="active"
          pageClassName="page-item"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          nextLinkClassName="page-link"
          nextClassName="page-item next"
          previousClassName="page-item prev"
          previousLinkClassName="page-link"
          pageLinkClassName={`page-link ${pageCount > 500 ? 'mx-3 p-5' : ''}`}
          containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 mt-1"
        />
      </div>
      <div className="border-top pt-5 d-flex justify-content-end">
        <div>
          <Button.Ripple
            color="secondary"
            className="btn-prev mr-3"
            size="sm"
            type="button"
            outline
            onClick={() => stepper.previous()}
          >
            <ArrowLeft
              size={14}
              className="align-middle mr-sm-2 mr-0"
            ></ArrowLeft>
            <span className="align-middle d-sm-inline-block d-none">
              Quay lại
            </span>
          </Button.Ripple>
        </div>
        <div>
          {!isLoadingSubmit ? (
            <Button.Ripple
              size="sm"
              type="submit"
              color="primary"
              className="btn-next"
              onClick={() =>
                onSubmit({
                  is_check_all: isCheckAll,
                  data: datas.map(data => ({...data, friends: []})),
                })
              }
            >
              <span className="align-middle d-sm-inline-block d-none">Lưu</span>
              <Save size={14} className="align-middle ml-sm-2 ml-0"></Save>
            </Button.Ripple>
          ) : (
            <Button color="primary">
              <Spinner color="white" size="sm" type="grow" />
              <span className="ms-50">Loading...</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountFB
