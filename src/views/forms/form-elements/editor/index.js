import {Fragment} from 'react'
import {Row, Col} from 'reactstrap'
import EditorControlled from './EditorControlled'
import EditorUncontrolled from './EditorUncontrolled'
import ExtensionsHeader from '@core/components/extensions-header'

const Editor = () => {
  return (
    <Fragment>
      <ExtensionsHeader
        title="React Draft Wysiwyg"
        subTitle="A Wysiwyg Built on ReactJS and DraftJS"
        link="https://jpuri.github.io/react-draft-wysiwyg/#/docs"
      />

      <Row>
        <Col sm={12}>
          <EditorUncontrolled />
        </Col>
        <Col sm={12}>
          <EditorControlled />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Editor
