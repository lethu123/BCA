import SelectField from 'components/form/SelectField'
import {useCallback, useState} from 'react'
// import {Clock} from 'react-feather'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Badge,
  // ListGroup,
  // ListGroupItem,
} from 'reactstrap'

import {uid} from 'uid'

const SelectForkInteractionModal = ({
  open,
  toggle,
  title = '',
  setLabelForkInteraction,
  setting,
  name,
}) => {
  console.log(setting)

  const [label, setLabel] = useState(null)

  const handleSave = useCallback(() => {
    setLabelForkInteraction(label)
    setLabel(null)
  }, [label, setLabelForkInteraction])

  // const renderConfigKeyword = useCallback(
  //   () =>
  //     label &&
  //     (label.type === 'tag' || label.type === 'checkbox') &&
  //     label.config &&
  //     label.config.length > 0 && (
  //       <div>
  //         {label.config.map(kw => (
  //           <Badge className="mx-2" key={kw.key} color="light-danger" pill>
  //             {kw.toUpperCase()}
  //           </Badge>
  //         ))}
  //       </div>
  //     ),
  //   [label],
  // )

  // const renderConfigTime = useCallback(
  //   () =>
  //     label &&
  //     label.type === 'time' &&
  //     label.config &&
  //     label.config.type && (
  //       <div>
  //         <ListGroup>
  //           <ListGroupItem className="d-flex">
  //             <span className="mr-1">
  //               <Clock size={16} />
  //             </span>

  //             <Badge className="mx-2" color="danger" pill>
  //               {label.config.value}
  //             </Badge>
  //             <Badge color="light-danger" pill>
  //               {label.config.type}
  //             </Badge>
  //           </ListGroupItem>
  //         </ListGroup>
  //       </div>
  //     ),
  //   [label],
  // )

  const renderSelectOption = useCallback(() => {
    return setting.length > 0
      ? setting.map(st => ({
          ...st,
          value: uid(),
          label:
            st.type === 'time' && st.config.type
              ? st.label + ` (${st.config?.value} ${st.config.type})`
              : (st.type === 'tag' || st.type === 'checkbox') &&
                st.config?.length > 0
              ? st.label + ` (${st.config?.join(', ')})`
              : st.label,
        }))
      : []
  }, [setting])

  return (
    <Modal
      isOpen={open}
      toggle={toggle}
      className="modal-dialog-centered modal-lg"
      modalClassName="modal-primary"
    >
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>
        <SelectField
          name={name}
          label
          onChange={(name, option) => setLabel(option)}
          options={renderSelectOption()}
        />
        {/* {renderConfigKeyword()}
        {renderConfigTime()} */}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave} disabled={label === null}>
          Lưu
        </Button>
        <Button color="danger" outline onClick={toggle}>
          Hủy
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default SelectForkInteractionModal
