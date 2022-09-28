import React from 'react'
import {RefreshCcw, Save} from 'react-feather'
import {Button, Card, CardBody} from 'reactstrap'
import imgFB from 'assets/images/user/fb.png'
import imgIN from 'assets/images/user/in.png'
import imgINS from 'assets/images/user/ins.png'
import imgTW from 'assets/images/user/tw.png'
import imgYTB from 'assets/images/user/ytb.png'
import TextField from 'components/form/TextField'

const LinkSocial = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <div>
            <TextField
              icon={<img src={imgFB} alt="images" width="25px" height="25px" />}
              type="text"
              name="text"
              size="lg"
              label="Facebook"
              placeholder="Nhập link Facebook của bạn..."
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div>
            <TextField
              icon={<img src={imgIN} alt="images" width="25px" height="25px" />}
              type="text"
              name="text"
              size="lg"
              label="Linkedin"
              placeholder="Nhập link Linkedin của bạn..."
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div>
            <TextField
              icon={<img src={imgTW} alt="images" width="25px" height="25px" />}
              type="text"
              name="text"
              size="lg"
              label="Twitter"
              placeholder="Nhập link Twitter của bạn..."
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div>
            <TextField
              icon={
                <img src={imgYTB} alt="images" width="25px" height="25px" />
              }
              type="text"
              name="text"
              size="lg"
              label="Youtube"
              placeholder="Nhập link Youtube của bạn..."
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div>
            <TextField
              icon={
                <img src={imgINS} alt="images" width="25px" height="25px" />
              }
              type="text"
              name="text"
              size="lg"
              label="Instagram"
              placeholder="Nhập link Instagram của bạn..."
              onChange={(name, value) => console.log(value)}
            />
          </div>
          <div className="mt-10">
            <Button.Ripple color="primary" type="submit" className="mr-4">
              <Save size={15} /> Lưu thay đổi
            </Button.Ripple>
            <Button.Ripple color="secondary">
              <RefreshCcw size={15} /> Làm mới
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default LinkSocial
