import {useState} from 'react'
import {
  Calendar,
  Clock,
  EyeOff,
  Lock,
  MessageCircle,
  UserCheck,
  Users,
} from 'react-feather'
import {
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap'
import data from '../../data'
const Intro = () => {
  const [open, setOpen] = useState(false)
  // const router = useRouter()
  return (
    <>
      <div className="m-auto" style={{maxWidth: '780px'}}>
        <Card className="w-100 p-3">
          <CardTitle className="pb-1 border-bottom mb-3 title-20">
            About this group
          </CardTitle>
          <CardBody className="p-0">
            <div className="d-flex mb-3">
              <Lock size={20} />
              <div className="ms-2">
                <p className="title-16">Only me</p>
                <p className="text-15-500-20">Only yoou can see this content</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <EyeOff size={20} />
              <div className="ms-2">
                <p className="title-16">Hide</p>
                <p className="text-15-500-20">
                  Only members can find this group
                </p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <Users size={20} />
              <div className="ms-2">
                <p className="title-16">Generality</p>
                <p className="text-15-500-20">100 Member Group</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <Clock size={20} />
              <div className="ms-2">
                <p className="title-16">Histore</p>
                <p className="text-15-500-20">
                  Ngày tạo nhóm : 25/12/2022{' '}
                  <span
                    onClick={() => setOpen(true)}
                    className="title-16 text-primary cursor-pointer"
                  >
                    ViewMore
                  </span>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="w-100 p-3">
          <CardTitle className="pb-1 border-bottom mb-3 title-20">
            Member - 12
          </CardTitle>
          <CardBody className="p-0">
            <ul className="member-thumb d-flex align-items-center justify-content-start">
              {data &&
                data.slice(0, 4).map((item, idx, arr) => (
                  <>
                    <li key={item.id}>
                      <div>
                        <img src={item.avt} alt={item.avt} />
                      </div>
                    </li>
                  </>
                ))}
            </ul>
            <p className="title-16-500-24 mb-1 mt-1">
              Arturia và Khang là quản trị viên.
            </p>
            {/* <MyButton
              color="gray-1"
              className="title-16-700-24 mt-1 w-100 mt-auto"
              text="ViewAll"
              textcl="#000000"
              onClick={() =>
                router.push(`/group/${router.query.id}?tab=members`)
              }
            /> */}
          </CardBody>
        </Card>
        <Card className="w-100 p-3">
          <CardTitle className="pb-1 border-bottom mb-3 title-20">
            Activity
          </CardTitle>
          <CardBody className="p-0">
            <div className="d-flex mb-3">
              <MessageCircle size={20} />
              <div className="ms-2">
                <p className="title-16">There are no new posts today</p>
                <p className="text-15-500-20">Only yoou can see this content</p>
              </div>
            </div>
            <div className="d-flex mb-3">
              <UserCheck size={20} />
              <div className="ms-2">
                <p className="title-16">Total 12 members</p>
                <p className="text-15-500-20">Only yoou can see this content</p>
              </div>
            </div>
            <div className="d-flex mb-3 align-items-center">
              <Calendar size={20} />
              <div className="ms-2">
                <p className="title-16">Creation date: 5 years ago</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Modal
        className="modal-dialog-centered"
        isOpen={open}
        toggle={() => setOpen(false)}
      >
        <ModalHeader
          className={`custom_modal_header bg-white p-3 justify-content-center border-bottom pb-2`}
          toggle={() => {
            setOpen(false)
          }}
          style={{border: 'none'}}
        >
          <p className="title-20 text-center ">Group History</p>
        </ModalHeader>
        <ModalBody className="p-2">
          <p className="title-16-500-24">
            Group history shows up when you create this group, as well as when
            the name changes. You can use Team History to see if the purpose of
            a group has changed over time.
          </p>
          <div className="d-flex mt-2">
            <Clock size={20} />
            <div className="ms-2">
              <p className="text-15-500-20">
                The group name hasn't changed recently
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default Intro
