// *** React core
import React, {useCallback, useRef, useState} from 'react'

// *** Core ui
import Wizard from '@core/components/wizard'

// *** Components
import FilterStep1 from './FilterStep1'
import FilterStep2 from './FilterStep2'
import FilterStep2Preview from './FilterStep2Preview'
import FilterStep3 from './FilterStep3'
import FilterStep4 from './FilterStep4'

const WizardFilter = ({
  dataSubmit,
  setDataSubmit,
  onSubmit,
  isLoadingSubmit = false,
  isEdit = true,
  handlePrevious,
}) => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)

  const handleShowMore = useCallback(() => {
    localStorage.setItem(
      'customer_lead_filter',
      JSON.stringify(dataSubmit.filter),
    )
    window.open('/admin/potential-customers?type=automation_filter')
  }, [dataSubmit.filter])

  const steps = useCallback(
    () => [
      {
        id: 'step_1',
        title: 'Tạo bộ lọc',
        subtitle: 'Tên, mô tả, chọn tài khoản',
        content: (
          <FilterStep1
            stepper={stepper}
            dataSubmit={dataSubmit}
            setDataSubmit={setDataSubmit}
            handlePrevious={handlePrevious}
            isEdit={isEdit}
          />
        ),
      },
      {
        id: 'step_2',
        title: 'Bộ lọc',
        subtitle: 'Cài đặt bộ lọc',
        content: isEdit ? (
          <FilterStep2
            stepper={stepper}
            dataSubmit={dataSubmit}
            setDataSubmit={setDataSubmit}
            isEdit={isEdit}
          />
        ) : (
          <FilterStep2Preview stepper={stepper} filter={dataSubmit.filter} />
        ),
      },
      {
        id: 'step_3',
        title: 'Kết quả lọc',
        subtitle: 'Xem trước danh sách uid',
        content: (
          <FilterStep3
            stepper={stepper}
            dataSubmit={dataSubmit}
            showMore={handleShowMore}
          />
        ),
      },
      {
        id: 'step_4',
        title: 'Chăm sóc facebook',
        subtitle: 'Phân bổ tài khoản chăm sóc facebook',
        content: (
          <FilterStep4
            stepper={stepper}
            dataSubmit={dataSubmit}
            onSubmit={onSubmit}
            isLoadingSubmit={isLoadingSubmit}
            isEdit={isEdit}
          />
        ),
      },
    ],
    [
      dataSubmit,
      handlePrevious,
      handleShowMore,
      isEdit,
      isLoadingSubmit,
      onSubmit,
      setDataSubmit,
      stepper,
    ],
  )

  return (
    <>
      <div className="horizontal-wizard create-input-data mb-0">
        <Wizard
          instance={el => setStepper(el)}
          ref={ref}
          steps={steps()}
          noShadow
        />
      </div>
    </>
  )
}

export default WizardFilter
