import TagInputField from 'components/form/TagInputField'
import {X} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from 'reactstrap'
import {useState} from 'react'
// *** mutation
import {CustomerLeadsMutation} from '@services/customer-leads'
import SelectField from 'components/form/SelectField'
const listColor = ['secondary', 'danger', 'info', 'warning', 'primary']

const ModalCreateTags = ({
  modalCreateTags,
  setCreateTags,
  titleTags,
  listTags,
  dataCheked,
}) => {
  // *** useMutaiton
  const {mutate: assignTag} =
    CustomerLeadsMutation.usePostAssignTagCustomerLead()

  // *** useState
  const [dataCreateTag, setDataCreateTag] = useState([])
  return (
    <div>
      <Modal
        isOpen={modalCreateTags}
        toggle={() => setCreateTags(!modalCreateTags)}
        className="modal-dialog-centered"
      >
        <ModalHeader
          toggle={() => setCreateTags(!modalCreateTags)}
          close={
            <div
              className="cursor-pointer"
              onClick={() => setCreateTags(!modalCreateTags)}
            >
              <X />
            </div>
          }
        >
          {titleTags ? 'Tạo Tags' : 'Gán Tags'}
        </ModalHeader>
        <ModalBody>
          {!titleTags && (
            <div>
              <p className="mb-2 font-weight-bold ">Uid đã chọn</p>
              {dataCheked
                ?.filter(ele => ele.checked === true)
                ?.map((item, idx) => (
                  <Badge
                    key={item.prf_id}
                    color={`light-${listColor[Math.abs(idx % 5)]}`}
                    className="mr-1 mb-1"
                  >
                    {item.prf_name || 'updating'}
                  </Badge>
                ))}
            </div>
          )}

          {titleTags ? (
            <TagInputField
              name="tag"
              // defaultValue="viêm họng,"
              blacklist={titleTags ? listTags?.map(ele => ele.value) : []}
              suggestions={!titleTags ? listTags : []}
              onChange={(name, value) => {
                setDataCreateTag(value)
              }}
            />
          ) : (
            <SelectField
              name="select"
              isSearchable
              isMulti
              options={listTags}
              onChange={(name, value) => {
                setDataCreateTag(value?.map(ele => ele.value))
              }}
            />
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              setDataCreateTag([])
              let userChecked = dataCheked.filter(ele => ele.checked === true)
              const dataSubmit = {
                customer_profile_id: userChecked.map(ele => ele.prf_id),
                customer_tag_id: dataCreateTag,
              }
              assignTag(dataSubmit)

              setCreateTags(!modalCreateTags)
            }}
            disabled={dataCreateTag.length > 0 ? false : true}
          >
            {titleTags ? 'Tạo' : 'Gán'}
          </Button>{' '}
          <Button
            color="primary"
            outline
            onClick={() => setCreateTags(!modalCreateTags)}
          >
            Thoát
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ModalCreateTags
