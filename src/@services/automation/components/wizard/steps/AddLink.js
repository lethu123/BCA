import React from 'react'
import TagInputField from 'components/form/TagInputField'
import {Button} from 'reactstrap'
import {ArrowLeft, ArrowRight} from 'react-feather'
// *** Context
import {useSettingCommentCtx} from '@services/automation/context'

const AddLink = ({setActiveIndex}) => {
  // *** CONTEXT
  const {state: accounts, add_link: dispatchAddLink} = useSettingCommentCtx()
  const accountActive = accounts.find(ele => ele.active)
  const linkActive = accountActive?.config['add-link']

  return (
    <div>
      <TagInputField
        name="tag"
        label="Input link Fb"
        value={linkActive.length > 0 ? linkActive : ''}
        placeholder="Nhấn enter để add link"
        helpText="Nhấn enter để add link"
        blacklist={[]}
        suggestions={[]}
        onChange={(name, value) => {
          dispatchAddLink(value)
        }}
      />
      <div className="d-flex justify-content-between w-100">
        <Button.Ripple
          color="secondary"
          className="btn-prev"
          onClick={() => {
            setActiveIndex(active => active - 1)
          }}
        >
          <ArrowLeft
            size={14}
            className="align-middle mr-sm-25 mr-0"
          ></ArrowLeft>
          <span className="align-middle d-sm-inline-block d-none">
            Quay lại
          </span>
        </Button.Ripple>
        <Button.Ripple
          outline
          color="primary"
          className="btn-next"
          onClick={() => {
            setActiveIndex(active => active + 1)
          }}
        >
          <span className="align-middle d-sm-inline-block d-none">
            Tiếp tục
          </span>
          <ArrowRight
            size={14}
            className="align-middle ml-sm-25 ml-0"
          ></ArrowRight>
        </Button.Ripple>
      </div>
    </div>
  )
}

export default AddLink
