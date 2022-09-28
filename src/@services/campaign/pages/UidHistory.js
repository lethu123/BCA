import FlowHistory from '@services/automation/auto-flow/FlowHistory'
import {useParams} from 'react-router-dom'

import UidBlockHistoryModal from '@services/campaign/components/modal/UidBlockHistory'

// *** React Query
import CampaignQuery from '@services/campaign/hook/query'
import {useState} from 'react'

const UidHistory = () => {
  const {uid, campaignId} = useParams()
  // *** State
  const [data, setData] = useState(null)

  // *** Query
  const {useGetDetailCampaignOfUidHistory} = CampaignQuery
  const {data: histories, isLoading} = useGetDetailCampaignOfUidHistory(
    uid,
    campaignId,
  )
  return (
    <>
      <FlowHistory
        histories={histories}
        isLoading={isLoading}
        setHistories={d => setData(d)}
        type="uid"
      />
      <UidBlockHistoryModal
        open={data !== null}
        toggle={() => setData(null)}
        data={data}
      />
    </>
  )
}

export default UidHistory
