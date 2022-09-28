import Timeline from '@core/components/timeline'
import {basicData} from './data'
import {Card, CardBody, CardHeader, CardTitle} from 'reactstrap'

const BasicTimeline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Basic</CardTitle>
      </CardHeader>
      <CardBody>
        <Timeline data={basicData} />
      </CardBody>
    </Card>
  )
}

export default BasicTimeline