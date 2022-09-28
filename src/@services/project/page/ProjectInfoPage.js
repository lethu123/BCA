import React, {useState} from 'react'
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  UncontrolledButtonDropdown,
} from 'reactstrap'
import {
  Calendar,
  Link2,
  MoreVertical,
  Square,
  User,
  Settings,
  Copy,
  Delete,
} from 'react-feather'
import {Link} from 'react-router-dom'

//image
import banner from 'assets/images/datacenter/banner.jpg'
import buy from 'assets/images/datacenter/buy.png'
import avatar from 'assets/images/avatars/avatar-blank.png'

//scss
import './Project.style.scss'

//component
import {ModalManageProject} from '@services/project'

const ProjectInfoPage = () => {
  //useState
  const [modalProject, setModalProject] = useState(false)
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/admin/du-an/quan-ly-cac-du-an"> Quản lý các dự án </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/admin/du-an/quan-ly-cac-du-an/1"> Tổng quan dự án </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Thông tin chi tiết </span>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="position-relative">
        <div
          className="w-100 text-center"
          style={{backgroundColor: '#eee', borderRadius: 13}}
        >
          <img
            src={banner}
            alt="bannerGroup"
            className="img-fluid w-75"
            style={{height: 300}}
          />
        </div>

        <h6
          className=" w-100 py-5 px-5 font-weight-bolder mb-0"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: '#eee',
            borderBottomLeftRadius: '13px',
            borderBottomRightRadius: '13px',
          }}
        >
          Dự án của đối tác
          <span className="text-primary"> Thi Phương</span>{' '}
        </h6>
      </div>

      <div style={{width: '97%', margin: '0px auto'}}>
        <Badge color="danger" className="badge-glow my-5">
          Dự án đối tác
        </Badge>
        <div className="d-md-flex d-block align-items-center justify-content-between">
          <div className="w-75">
            <h2 className="font-weight-bold text-primary">
              Thi phương Insurance
            </h2>
            <p className="mb-0">
              Mô tả ngắn về dự án: Phương Toàn Phát tại Xã Chánh Phú Hòa, Huyện
              Bến Cát một khu vực sôi động đất nền trong những năm gần đây bởi
              kênh đầu tư đất nền luôn là kênh đầu tư an toàn không rủi ro và
              mang lại lợi nhuận cao.
            </p>
          </div>
          <div className="d-flex justify-content-end">
            <Button.Ripple color="primary" className="mr-2 p-2">
              <img
                src={buy}
                alt="imgs"
                className="img-fluid mr-1"
                width="25px"
                height="25px"
              />
              Mua liên hệ
            </Button.Ripple>
            <UncontrolledButtonDropdown direction="left">
              <DropdownToggle color="secondary" caret className="  p-1">
                <MoreVertical size={20} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setModalProject(!modalProject)}>
                  <Settings size={20} className="mr-2 text-primary" /> Thiết lập
                  quản trị dự án
                </DropdownItem>
                <DropdownItem>
                  <Copy size={20} className="mr-2 text-primary" />
                  Nhân bản dự án
                </DropdownItem>
                <DropdownItem>
                  <Delete size={20} className="mr-2 text-primary" />
                  Xóa dự án
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>

        <Row className="mt-3">
          <Col lg={7}>
            <Card className="p-5">
              <h3 className="mb-5 font-weight-normal">
                Thời gian dự án:{' '}
                <span className="font-weight-bold">Còn 28 ngày</span>
              </h3>
              <p>Liên hệ được mua: 85/242 liên hệ</p>
              <Progress striped className="progress-bar-primary" value={45} />
            </Card>

            <Card className="p-5">
              <h3 className="mb-5">Mô tả dự án</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt quo nam tenetur aspernatur nulla blanditiis! Quibusdam
                quas tenetur iure dolorum sit voluptas. Quas aspernatur sapiente
                fugiat cupiditate? Voluptates, sequi ab. Aperiam repellat, non
                aspernatur officiis eligendi repudiandae, quos ab, ex soluta
                alias voluptates quas facere facilis exercitationem mollitia
                dignissimos dolorem pariatur vitae porro optio.
                <br />
                <br />
                Enim autem doloriure cumque ipsa. Molestias dolorem delectus
                quae molestiae, reprehenderit optio cupiditate aliquid culpa
                repellat vitae maiores repellendus ipsum corporis. quos debitis
                laudantium distinctio maiores quidem impedit fugiat, similique
                esse deleniti veniam qui ut deserunt reprehenderit voluptates,
                porro doloribus quis excepturi odit pariatur vel! Rem nam
                expedita cum?
                <br />
                <br />
                Veritatis molestias eligendi quidem, culpa eius, illum cumque
                alias eum, sequi sunt assumenda voluptate! Voluptas molestias
                quos debitis laudantium distinctio maiores quidem impedit
                fugiat, similique esse deleniti veniam qui ut deserunt
                reprehenderit voluptates, porro doloribus quis excepturi odit
                pariatur vel! Rem nam expedita cum?
              </p>
            </Card>

            <Card className="p-5">
              <h3>Đối tác dự án</h3>
              <div className="d-flex align-items-center">
                <img
                  src={avatar}
                  alt="images"
                  className="img-fluid rounded-circle mr-2"
                  width="50px"
                  height="50px"
                />
                <div className="user-info text-truncate ml-1">
                  <Link
                    className="d-block  text-truncate text-primary cursor-pointer"
                    to="#"
                  >
                    Thi Phương
                  </Link>
                  <Badge color="success">Đối tác marketing</Badge>
                </div>
              </div>
              <p className="mt-3 mb-0">
                Hợp tác với BCA từ ngày 20 tháng 11 năm 2015
              </p>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="p-5">
              <h3>Doanh thu từ dự án</h3>
              <h1 className="text-primary text-center">31,480,000 BizXu</h1>
            </Card>

            <Card className="p-5">
              <h3 className="mb-3">Thông tin dự án</h3>
              <div className="mb-5">
                <Square
                  size={16}
                  className="text-primary mr-3"
                  fill="#E6641F"
                  stroke="#E6641F"
                />
                Mã dự án: <span className="font-weight-bold"> 00238745</span>
              </div>
              <div className="mb-5">
                <Square
                  size={16}
                  className="text-primary mr-3"
                  fill="#E6641F"
                  stroke="#E6641F"
                />
                Ngồn dữ liệu:{' '}
                <span className="font-weight-bold"> landingpage</span>
              </div>
              <div className="mb-5">
                <Link2 size={16} className="text-primary mr-3" />
                Link LDP:{' '}
                <span className="font-weight-bold text-primary">
                  {' '}
                  http://bcavietnam.com/hoanquyen
                </span>
              </div>
              <div className="mb-5">
                <Calendar size={16} className="text-primary mr-3" />
                Thời gian chạy:{' '}
                <Badge color="success" className="mr-1">
                  Hoạt động
                </Badge>
                <span className="font-weight-bold "> còn 24 ngày</span>
              </div>
              <div className="mb-5">
                <Calendar size={16} className="text-primary mr-3" />
                Ngày tạo: <span className="font-weight-bold "> 20/11/2021</span>
              </div>
              <div className="mb-5">
                <Square
                  size={16}
                  className="text-primary mr-3"
                  fill="#E6641F"
                  stroke="#E6641F"
                />
                Người tạo dự án:{' '}
                <span className="font-weight-bold text-primary">
                  {' '}
                  Admin Bùi Quốc Anh
                </span>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="mb-5">Chi phí dự án</h3>
              <h1 className="text-warning text-center font-weight-normal">
                100,249,000 Vnđ
              </h1>
            </Card>

            <Card className="p-5">
              <h3 className="mb-5">Liên hệ có sẵn</h3>
              <h1 className="text-primary text-center font-weight-normal">
                +142 liên hệ mới <User />
              </h1>
            </Card>
          </Col>
        </Row>
      </div>
      <ModalManageProject
        setModalProject={setModalProject}
        modalProject={modalProject}
      />
    </div>
  )
}

export default ProjectInfoPage
