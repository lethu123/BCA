import React, {useEffect, useState} from 'react'
import {Card} from 'reactstrap'
import {
  Airplay,
  CornerRightUp,
  Globe,
  Lock,
  UserPlus,
  Users,
} from 'react-feather'

//scss
import '@core/scss/react/libs/flatpickr/flatpickr.scss'

// *** Components
import StatisticComponent from 'components/statistic/StatisticComponent'
// *** query
import {GroupQuery} from '@services/group'

const StatisticManageGroup = () => {
  const {data: statistics} = GroupQuery.useStatisticGroup()
  console.log('statistics', statistics)
  const [statistic, setStatistic] = useState([])

  useEffect(() => {
    if (statistics) {
      const {
        num_group_enable,
        num_group_members,
        num_group_private,
        num_group_public,
        num_groups,
      } = statistics.data
      setStatistic([
        {
          id: 1,
          value: num_groups,
          label: 'Tổng số nhóm',
          color: 'primary',
          icon: <Airplay />,
        },

        {
          id: 3,
          value: num_group_public,
          label: 'Tổng số nhóm công khai',
          color: 'warning',
          icon: <Globe />,
        },
        {
          id: 4,
          value: num_group_private,
          label: 'Tổng số nhóm kín',
          color: 'success',
          icon: <Lock />,
        },
        {
          id: 2,
          value: num_group_enable,
          label: 'Tổng nhóm đang hoạt động',
          color: 'success',
          icon: <Airplay />,
        },
        {
          id: 5,
          value: num_group_members,
          label: 'Tổng số thành viên',
          color: 'info',
          icon: <Users />,
        },
      ])
    }
  }, [statistics])
  return (
    <Card className="pt-2 mt-3">
      <StatisticComponent statistic={statistic} />
    </Card>
  )
}

export default StatisticManageGroup
