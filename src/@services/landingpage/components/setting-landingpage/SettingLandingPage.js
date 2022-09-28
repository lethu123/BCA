import React from 'react'
import {Star} from 'react-feather'
import {Alert} from 'reactstrap'

const SettingLandingPage = () => {
  return (
    <div className="mt-1">
      <Alert color="warning">
        <div className="alert-body">
          <Star size={15} className="mr-3" />
          <span className="ml-1">Setting Landingpage updating...</span>
        </div>
      </Alert>
    </div>
  )
}

export default SettingLandingPage
