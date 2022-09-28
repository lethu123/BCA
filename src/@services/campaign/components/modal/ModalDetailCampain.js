import {useState, useEffect, useRef} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Badge,
} from 'reactstrap'
import {Search, X} from 'react-feather'
import moment from 'moment'

//** query */
import {AutomationQuery} from '@services/automation'

const ModalDetailCampain = ({open, item, toggle}) => {
  const {data} = AutomationQuery.useGetDetailCampain(
    item?._id,
    item?.campain_type_info?.key,
  )
  const {data: autojobs} = AutomationQuery.useGetListAutojobSelect()

  const [dataDetail, setDataDetail] = useState([])

  useEffect(() => {
    if (data)
      if (item.campain_type_info?.key === 'FB') {
        setDataDetail([
          {
            name: 'Chiến dịch',
            value: data.title,
          },
          {
            name: 'Mô tả',
            value: data.description,
          },
          {
            name: 'Trạng thái',
            value: data.status_info,
          },
          {
            name: 'Tên AutoJob',
            value: autojobs?.data?.find(ele => ele.id === data.automation_id)
              ?.name,
          },
          {
            name: 'Ngày tạo',
            value: moment(item?.created_at).calendar(),
          },
          {
            name: 'Ngày bắt đầu',
            value: moment(item?.start_date).calendar(),
          },
          {
            name: 'Ngày kết thúc',
            value: moment(item?.end_date).calendar(),
          },
          {
            name: 'Ngày dừng chiến dịch',
            value: item?.stop_date && moment(item?.stop_date).calendar(),
          },

          // -------- FB
          {
            name: 'Like Post FB',
            value: data.like_post_fb || 0,
          },
          {
            name: 'Bình luận Post FB',
            value: data.comment_post_fb || 0,
          },
          {
            name: 'Nhắn tin FB',
            value: data.messager_sent || 0,
          },
          {
            name: 'Gửi yêu cầu kết bạn',
            value: data.request_friends || 0,
          },
          {
            name: 'Bạn bè',
            value: data.friends || 0,
          },

          {
            name: 'Like bình luận',
            value: '20',
          },
          {
            name: 'KH trả lời tin nhắn',
            value: data.replied || 0,
          },
          // -------- Group
          {
            name: 'Bình luận Post nhóm',
            value: data.comment_post_group || 0,
          },
          {
            name: 'Yêu cầu tham gia nhóm',
            value: data.request_join_group || 0,
          },
          {
            name: 'Đã tham gia nhóm',
            value: data.joined_group || 0,
          },
          {
            name: 'Like Post nhóm',
            value: data.like_post_group || 0,
          },
          {
            name: 'Viết bài nhóm',
            value: data.post_group || 0,
          },

          // ------ Fanpage
          {
            name: 'Bình luận Post Fanpage',
            value: data.comment_post_fanpage || 0,
          },
          {
            name: 'Like Fanpage',
            value: data.like_fanpage || 0,
          },
          {
            name: 'Like Post - FP',
            value: data.like_post_fanpage || 0,
          },
          // ---- Sasam
          {
            name: 'Bình luận Post Sasam',
            value: data.comment_post_sasam || 0,
          },
          {
            name: 'Like Bình luận - Sasam',
            value: data.like_comment_sasam || 0,
          },
          {
            name: 'Trả lời bình luận Sasam',
            value: data.replied_comment_sasam,
          },
        ])
      } else {
        setDataDetail([
          {
            name: 'Chiến dịch',
            value: data.title,
          },
          {
            name: 'Mô tả',
            value: data.description,
          },
          {
            name: 'Trạng thái',
            value: data.status_info,
          },
          {
            name: 'Tên AutoJob',
            value: autojobs?.data?.find(ele => ele.id === data.automation_id)
              ?.name,
          },
          {
            name: 'Ngày tạo',
            value: moment(item?.created_at).calendar(),
          },
          {
            name: 'Ngày bắt đầu',
            value: moment(item?.start_date).calendar(),
          },
          {
            name: 'Ngày kết thúc',
            value: moment(item?.end_date).calendar(),
          },
          {
            name: 'Ngày dừng chiến dịch',
            value: item?.stop_date && moment(item?.stop_date).calendar(),
          },
          {name: 'Tổng số khách hàng', value: data.total_customer || 0},
          {name: 'Chi phí', value: data.cost || 0},
          {name: 'Doanh thu', value: data.revenue || 0},
          {name: 'Gửi yêu cầu kết bạn', value: data.request_friends || 0},
          {name: 'Bạn bè', value: data.friends || 0},
          {name: 'Số email được gửi', value: data.email_sent || 0},
          {name: 'Số KH được nhắn tin FB', value: data.messager_sent},
          {name: 'Số KH trả lời', value: data.replied || 0},
          {name: 'Số thông báo', value: data.notification || 0},
          {name: 'Số người đã xem', value: data.seen || 0},
          {name: 'Số SMS đã gửi', value: data.sms_sent || 0},
        ])
      }
  }, [data])

  const def = useRef(dataDetail)
  const [search, setSearch] = useState('')

  // ** Custom close btn
  const CloseBtn = <X className="cursor-pointer" size={20} onClick={toggle} />
  useEffect(() => {
    let timeout = setTimeout(() => {
      if (search !== '') {
        let res = def.current.filter(
          item =>
            item.name.toLocaleLowerCase().includes(search) ||
            item.value.toLocaleLowerCase().includes(search),
        )
        setDataDetail(res)
      } else {
        setDataDetail(def.current)
      }
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [search])
  return (
    <Modal scrollable isOpen={open} toggle={toggle} className="modal-lg">
      <ModalHeader close={CloseBtn} toggle={toggle}>
        Thông tin chi tiết chiến dịch
      </ModalHeader>
      <ModalBody>
        <InputGroup className="input-group-merge mb-10">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <Search size={14} />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            placeholder="Tìm kiếm ..."
            className="pl-5"
            onChange={e => setSearch(e.target.value.toLocaleLowerCase())}
          />
        </InputGroup>
        <Table responsive striped>
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: 'transparent',
                  paddingLeft: 0,
                  minWidth: '200px',
                }}
              >
                Thuộc tính
              </th>
              <th style={{backgroundColor: 'transparent'}}>Giá trị</th>
            </tr>
          </thead>

          <tbody>
            {dataDetail.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>

                <td>
                  {item.name === 'Trạng thái' ? (
                    <Badge
                      color={
                        item.value?.key === 'RUNNING' ? 'success' : 'warning'
                      }
                      className="badge-glow"
                    >
                      {item.value?.name}
                    </Badge>
                  ) : (
                    <div className="">{item.value}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Thoát
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalDetailCampain
