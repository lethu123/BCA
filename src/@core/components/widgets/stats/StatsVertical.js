// *** Third Party Components
import PropTypes from 'prop-types'
import {Card, CardBody} from 'reactstrap'

const StatsVertical = ({
  icon,
  color,
  stats,
  statTitle,
  statTag,
  className,
  statSub,
  chooseColor,
  title,
  hasSub,
  hasMinHeight,
  classNameCard,
  ...rest
}) => {
  return (
    <Card className={`text-center h-100 mb-0 ${classNameCard || ''}`}>
      <CardBody>
        {title && <p>{title}</p>}
        <div
          className={`avatar p-50 m-0 mb-1 ${
            color ? `bg-light-${color}` : 'bg-light-primary'
          }`}
        >
          <div className="avatar-content">{icon}</div>
        </div>
        <h2
          className={`font-weight-bolder ${
            chooseColor ? `text-${color}` : ''
          } `}
          style={{fontSize: 18}}
        >
          {stats}
        </h2>
        <p
          className={
            statTag
              ? 'card-text line-ellipsis mb-0 text-primary font-weight-bold'
              : 'card-text line-ellipsis mb-0'
          }
          style={{minHeight: hasMinHeight ? hasMinHeight : 0}}
        >
          {statTitle}
        </p>
        {statSub && (
          <p className="card-text mt-2 " style={{fontSize: '12px'}}>
            {statSub}
            {statTag && (
              <span className="font-weight-bold text-success">{statTag}</span>
            )}
          </p>
        )}
        {hasSub && <div style={{height: '24px'}}></div>}
      </CardBody>
    </Card>
  )
}

export default StatsVertical

// *** PropTypes
StatsVertical.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  statTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
}
