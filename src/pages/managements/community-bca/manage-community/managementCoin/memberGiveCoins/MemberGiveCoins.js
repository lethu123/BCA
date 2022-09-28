import React from 'react'
// *** Components
import StatisticMemberGiveCoins from './StatisticMemberGiveCoins'
import TableMemberGiveCoins from './TableMemberGiveCoins'
import DatePickerField from 'components/form/DatePickerField'

const MemberGiveCoins = () => {
  return (
    <div>
      <div className="text-right mt-3 mt-lg-0">
        <div style={{display: 'inline-block', width: 250}}>
          <DatePickerField
            name="picker"
            options={{
              mode: 'range',
              defaultDate: ['2020-02-01', '2020-02-15'],
            }}
            onChange={(name, value) => console.log(name, value)}
          />
        </div>
      </div>

      <StatisticMemberGiveCoins />
      <TableMemberGiveCoins />
    </div>
  )
}

export default MemberGiveCoins
