// *** Image
import imgVideo1 from 'assets/images/home/video-1.png'
import imgVideo2 from 'assets/images/home/video-2.png'
// *** Third Libary
import {useState} from 'react'
import ReactPlayer from 'react-player'
import {Card, Modal, ModalBody} from 'reactstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'

const DataPackage = () => {
  const [centeredModal, setCenteredModal] = useState(false)
  return (
    <Card className="p-1">
      <h5>Khu vực nổi bật</h5>
      <div className="rounded">
        <img
          src={imgVideo1}
          alt="images"
          className="img-fluid cursor-pointer w-100 "
          onClick={() => setCenteredModal(true)}
        />
        <h6 className="text-primary mt-2">Tìm hiểu về BCA</h6>
        <p>Quốc Anh - 200 lượt xem - 3 tháng trước</p>
      </div>
      <div>
        <img
          src={imgVideo2}
          alt="images"
          className="img-fluid cursor-pointer w-100"
          onClick={() => setCenteredModal(true)}
        />
        <h6 className="text-primary mt-2">Bảo hiểm tai nạn toàn diện</h6>
        <h6 className="text-primary mt-2">BCA Protector Plus</h6>
        <p>Quốc Anh - 200 lượt xem - 3 tháng trước</p>
      </div>
      <Modal
        scrollable
        isOpen={centeredModal}
        toggle={() => setCenteredModal(!centeredModal)}
        className="modal-dialog-centered modal-lg"
      >
        <ModalBody className="p-0 ">
          <PerfectScrollbar>
            <ReactPlayer
              url="http://youtube.com/watch?v=FCPdIvXo2rU"
              className="react-player-video rounded overflow-hidden"
              width="100%"
              height="500px"
              controls={true}
              playing={true}
            />
          </PerfectScrollbar>
        </ModalBody>
      </Modal>
    </Card>
  )
}

export default DataPackage
