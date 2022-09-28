import {Badge} from 'reactstrap'
import {Link} from 'react-feather'

const BadgeLink = () => {
  return (
    <Badge color="primary" href="#">
      <Link size={12} />
      <span className="align-middle ml-1">Link Badge</span>
    </Badge>
  )
}
export default BadgeLink
