import React from 'react'

import * as Icon from 'react-feather'
import {Col, Row} from 'reactstrap'

export default function EditDetalCanvasTooltip() {
  return (
    <div>
      <p
        style={{
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 15,
          textAlign: 'left',
        }}
      >
        Interelation
      </p>
      <p style={{fontSize: 14, textAlign: 'start', color: 'gray'}}>
        <Icon.Zap
          size={14}
          className=" fonticon-wrap"
          style={{
            backgroundColor: '#ff6700',
            color: 'white',
            borderRadius: '50%',
          }}
        />
        {''} 1 hypothesis
      </p>
      <p style={{fontSize: 14, textAlign: 'start', color: 'gray'}}>
        <Icon.Zap
          size={14}
          className=" fonticon-wrap"
          style={{
            backgroundColor: '#ffc002',
            color: 'white',
            borderRadius: '50%',
          }}
        />
        {''} 2 experiments
      </p>
      <p style={{fontSize: 14, textAlign: 'start', color: 'gray'}}>
        <Icon.Zap
          size={14}
          className=" fonticon-wrap"
          style={{
            backgroundColor: '#6eb144',
            color: 'white',
            borderRadius: '50%',
          }}
        />
        {''} 2 evidence
      </p>
      <p
        style={{
          fontWeight: 'bold',
          color: '#000000',
          fontSize: 15,
          textAlign: 'left',
        }}
      >
        Average-Scored
      </p>
      <p
        style={{
          fontSize: 14,
          textAlign: 'center',
          color: '#ff6700',
          padding: 0,
          margin: 0,
        }}
      >
        <Icon.Zap
          size={14}
          className=" fonticon-wrap"
          style={{
            backgroundColor: '#FB3A83',
            color: 'white',
            borderRadius: '50%',
          }}
        />
        {''} Neutral
      </p>
      <span style={{color: 'gray', marginTop: 5}}>02 Evidence</span>
      <Row style={{padding: '0px 5px'}}>
        <Col>
          <Icon.Zap
            size={10}
            className=" fonticon-wrap"
            style={{
              backgroundColor: '#FB3A83',
              color: 'white',
              borderRadius: '50%',
            }}
          />
        </Col>
        <Col>
          <Icon.Zap
            size={10}
            className=" fonticon-wrap"
            style={{
              backgroundColor: '#A93AFF',
              color: 'white',
              borderRadius: '50%',
            }}
          />
          <p style={{color: 'gray', marginBottom: 0}}>1</p>
        </Col>
        <Col>
          <Icon.Zap
            size={10}
            className=" fonticon-wrap"
            style={{
              backgroundColor: '#ff6700',
              color: 'white',
              borderRadius: '50%',
            }}
          />
        </Col>
        <Col>
          <Icon.Zap
            size={10}
            className=" fonticon-wrap"
            style={{
              backgroundColor: '#5558FF',
              color: 'white',
              borderRadius: '50%',
            }}
          />
          <p style={{color: 'gray', marginBottom: 0}}>1</p>
        </Col>
        <Col>
          <Icon.Zap
            size={10}
            className=" fonticon-wrap"
            style={{
              backgroundColor: '#0BB8A0',
              color: 'white',
              borderRadius: '50%',
            }}
          />
        </Col>
      </Row>
      <p style={{color: 'gray', fontSize: '10px', lineHeight: 1.5}}>
        This score is caculated as an average of all the roted interelation to
        this hypothesis
      </p>
    </div>
  )
}
