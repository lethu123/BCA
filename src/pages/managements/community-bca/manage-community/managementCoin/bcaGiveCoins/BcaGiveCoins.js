import React from 'react'
// *** Components
import StatisticBcaGiveCoins from './StatisticBcaGiveCoins'
import TableBcaGiveCoins from './TableBcaGiveCoins'
import DatePickerField from 'components/form/DatePickerField'

const BcaGiveCoins = () => {
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

      <StatisticBcaGiveCoins />
      <TableBcaGiveCoins />
    </div>
  )
}

export default BcaGiveCoins
