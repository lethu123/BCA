import React, {useEffect, useState} from 'react'

// assets
import defaultAva from 'assets/images/avatars/avatar-blank.png'
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap'
import {X} from 'react-feather'
import ReactPaginate from 'react-paginate'
import Avatar from '@core/components/avatar'
// *** query
import {UserQuery} from '@services/user'
import {EventQuery} from '@services/event'

const ModalParticipant = ({id, modal, toggleModal}) => {
  const [page, setPage] = useState(0)
  const [listParticipant, setListParticipant] = useState(false)

  // ** query
  const {data: users} = UserQuery.useGetListAllUserSys()
  const {data: participants} = EventQuery.useListParticipantEvent({
    event_id: id,
    page: page + 1,
    limit: 10,
  })

  useEffect(() => {
    const data = participants?.data
    if (data?.length > 0) {
      setListParticipant(
        users?.data.filter(user =>
          data?.map(it => it.user_id).includes(user.user_id),
        ),
      )
    }
  }, [participants?.data, users])

  return (
    <Modal
      scrollable
      isOpen={modal}
      toggle={toggleModal}
      className="modal-dialog-centered"
    >
      <ModalHeader
        toggle={toggleModal}
        close={<X className="cursor-pointer" size={20} onClick={toggleModal} />}
      >
        Người tham gia
      </ModalHeader>

      <ModalBody>
        {listParticipant?.length > 0 ? (
          <>
            {listParticipant.map(it => (
              <div
                key={it.id}
                className="d-flex align-items-center m-2 cursor-pointer"
              >
                <div className="symbol symbol-50 symbol-light mr-2">
                  <span className="symbol-label">
                    <Avatar
                      className="pull-up"
                      img={it.avatar || defaultAva}
                      alt=""
                      onError={e => {
                        e.target.onerror = null
                        e.target.src = defaultAva
                      }}
                      imgClassName="rounded"
                      imgHeight="50"
                      imgWidth="50"
                    />
                  </span>
                </div>
                <div>
                  <p className="text-dark-75 text-hover-primary mb-0 font-size-lg">
                    {it.profile?.name || it.username}
                  </p>
                  <span className="text-muted font-weight-bold d-block">
                    {it.email}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-3">
              <ReactPaginate
                previousLabel=""
                nextLabel=""
                forcePage={page}
                onPageChange={page => setPage(page.selected)}
                pageCount={participants?.metadata.num_pages || 1}
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
                pageLinkClassName={`page-link ${
                  participants?.metadata.num_pages > 500 ? 'mx-3 p-5' : ''
                }`}
                containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-center pr-1 mt-1"
              />
            </div>
          </>
        ) : (
          <Alert color="primary">
            <div className="alert-body">
              <span className="fw-bold">Chưa có người tham gia!</span>
            </div>
          </Alert>
        )}
      </ModalBody>

      <ModalFooter>
        <Button.Ripple color="primary" type="submit">
          Đóng
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  )
}

export default ModalParticipant
