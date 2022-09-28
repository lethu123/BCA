import {Spinner} from 'reactstrap'

const SmallSpinner = ({text = 'Submit', isLoading}) => {
  return (
    <>
      {isLoading ? (
        <>
          <Spinner color="white" size="sm" type="grow" />
          <span className="ml-50">Loading</span>
        </>
      ) : (
        <span className="indicator-label">{text}</span>
      )}
    </>
  )
}

export default SmallSpinner
