import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CustomInput,
  CardLink,
} from 'reactstrap'

import img1 from 'assets/images/slider/04.jpg'
import {subStr} from 'utility/Utils'

// *** CONTEXT
import {useSettingEmailCtx} from '@services/automation/context'

const AttachedLinkItem = ({data, isSystem, classNameCard, duplicateUrlErr}) => {
  // *** CONTEXT
  const {state, addSeoLinkSystem, deleteSeoLinkSystem} = useSettingEmailCtx()

  return (
    <>
      {data.url && (
        <Card className={`mb-0 ${classNameCard}`}>
          {data.title ? (
            <>
              <CardImg
                top
                src={data.image || data.icon || img1}
                height="180px"
                alt="Card cap"
              />
              <CardBody className="p-4">
                <div className="existed-seo-meta ">
                  <CardLink href={data.url} target="blank">
                    <span className="page-title-seo" style={{fontSize: '17px'}}>
                      {subStr(data.title, 50)}
                    </span>
                  </CardLink>

                  <div className="ws-nm">
                    <span className="page-description-seo">
                      {subStr(data.description, 100)}
                    </span>
                  </div>
                </div>
              </CardBody>
              {isSystem && (
                <CardFooter className="py-5">
                  <CustomInput
                    inline
                    type="checkbox"
                    id={data._id}
                    label="Đính kèm link này"
                    defaultChecked={
                      !!state.seo_link_system.find(it => it._id === data._id)
                    }
                    onChange={e => {
                      if (e.target.checked) {
                        addSeoLinkSystem(data)
                      } else {
                        deleteSeoLinkSystem(data._id)
                      }
                    }}
                  />
                </CardFooter>
              )}
            </>
          ) : (
            <>
              {duplicateUrlErr && (
                <CardBody>
                  <h3 className="text-danger"> {duplicateUrlErr}</h3>
                </CardBody>
              )}
            </>
          )}
        </Card>
      )}
    </>
  )
}

export default AttachedLinkItem
