import React, {useCallback, useEffect, useState} from 'react'
import {PlusCircle} from 'react-feather'
import {Button} from 'reactstrap'

//** component */
import TableAutoFilter from './../table/TableAutoFilter'
import WizardFilter from '../step'

const INITIALSTATE = {
  _id: null,
  name: '',
  description: '',
  table_type: '',
  account: [],
  filter: {},
}

const StepCreateInputData = ({setting, setSetting, id}) => {
  const [dataSubmit, setDataSubmit] = useState({
    name: setting?.name || '',
    description: setting?.description || '',
    table_type: setting?.table_type ? setting.table_type : null,
    account: setting?.account || [],
    filter: setting?.filter || {},
  })

  const [showWizard, setShowWizard] = useState(false)

  useEffect(() => {
    if (setting && setting.name) {
      setShowWizard(true)
    }
  }, [setting])

  const handleSubmit = useCallback(
    configs_customer => {
      setSetting(
        {
          ...dataSubmit,
          configs_customer,
        },
        id,
      )
    },
    [dataSubmit, id, setSetting],
  )

  return (
    <>
      {!showWizard ? (
        <>
          <div className="text-right mb-3">
            <Button.Ripple
              color="success"
              className="mr-5"
              onClick={() => {
                setDataSubmit(INITIALSTATE)
                setShowWizard(true)
              }}
            >
              <PlusCircle size={20} className="mr-2" /> Tạo mới bộ lọc
            </Button.Ripple>
          </div>
          <div>
            <h3 className="text-primary">Danh sách bộ lọc đã tạo</h3>
            <TableAutoFilter
              setDataSubmit={data => {
                setDataSubmit(data)
                setShowWizard(true)
              }}
            />
          </div>
        </>
      ) : (
        <WizardFilter
          dataSubmit={dataSubmit}
          setDataSubmit={setDataSubmit}
          onSubmit={handleSubmit}
          handlePrevious={() => setShowWizard(false)}
          isEdit={dataSubmit._id === null}
        />
      )}
    </>
  )
}

export default StepCreateInputData
