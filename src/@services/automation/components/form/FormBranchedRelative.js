import React, {useCallback, useState} from 'react'
import {ModalFooter, Button, Alert} from 'reactstrap'
import {CardForkInteractionItem} from '@services/automation'
import {Plus, X} from 'react-feather'
import {options} from './data-options-source'
import {uid} from 'uid'

const handleInitialKeywords = datas => {
  let keywords = []
  if (datas && datas.length > 0) {
    let tagObj = datas.find(data => data.type === 'tag')
    if (tagObj) {
      keywords = tagObj.config
    }
  }
  return keywords
}

const FormBranchedRelative = ({
  setSetting,
  setting,
  id: idElement,
  onDelete,
  source,
}) => {
  // *** STATE
  const [datas, setDatas] = useState(setting && setting.length ? setting : [])
  const [keywords, setKeywords] = useState(handleInitialKeywords(setting))
  let listStatus = options.find(item => source?.includes(item.value))?.options

  const increaseCount = useCallback(() => {
    setDatas(datas => [
      ...datas,
      {
        id: uid(),
        type: null,
        value: null,
        label: null,
        config: null,
        name: `Cài đặt ${datas.length + 1}`,
      },
    ])
  }, [])

  const decreaseCount = useCallback(id => {
    setDatas(datas =>
      datas
        .filter(data => data.id !== id)
        .map((data, idx) => ({...data, name: `Cài đặt ${idx + 1}`})),
    )
  }, [])

  if (!source) {
    return (
      <Alert color="primary">
        <div className="alert-body">
          <span className="font-weight-bold">
            Vui lòng liên kết với một hành động trước đó để cài đặt
          </span>
        </div>
      </Alert>
    )
  }

  return (
    <>
      <React.Fragment>
        {datas.length > 0 &&
          datas.map((data, idx) => (
            <div className="" key={data.id}>
              <label htmlFor="priod" className="font-weight-bold text-primary">
                {data.name}
              </label>
              <div className="position-relative">
                <CardForkInteractionItem
                  options={listStatus}
                  data={data}
                  setDatas={setDatas}
                  id={data.id}
                  keywords={keywords}
                  setKeywords={setKeywords}
                />
                <div
                  className="position-absolute d-block"
                  style={{top: '-19px', right: '-15px'}}
                >
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    onClick={() => decreaseCount(data.id)}
                    outline
                    color="danger"
                    size="sm"
                  >
                    <X size={14} />
                  </Button.Ripple>
                </div>
              </div>
            </div>
          ))}

        <div className="mr-3">
          <Button.Ripple color="warning" onClick={increaseCount}>
            <Plus size={14} />
            <span className="align-middle ml-1">Thêm nhánh</span>
          </Button.Ripple>
        </div>
      </React.Fragment>

      <ModalFooter className="pb-3">
        <Button
          type="submit"
          disabled={datas.filter(dt => dt.value).length < datas.length}
          className="mr-2"
          color="primary"
          onClick={() =>
            setSetting(
              datas.map(data =>
                data.type === 'tag' ? {...data, config: keywords} : data,
              ),
              idElement,
            )
          }
        >
          Lưu
        </Button>
        <Button
          onClick={() => onDelete(idElement)}
          type="button"
          color="danger"
        >
          Xóa
        </Button>
      </ModalFooter>
    </>
  )
}

export default FormBranchedRelative
