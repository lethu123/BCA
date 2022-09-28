import {Row, Col} from 'reactstrap'
import RadioField from 'components/form/RadioField'

const LIST_REACTIONS = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642405237/samples/icon_FB/img1_fooxog.gif',
    checked: false,
    code: 'like',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642417028/samples/icon_FB/Comp-61_zg0i1g.gif',
    checked: false,
    code: 'haha',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642405237/samples/icon_FB/img2_xdzanr.gif',
    checked: false,
    code: 'heart',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642405237/samples/icon_FB/img5_nuovd6.gif',
    checked: false,
    code: 'care',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642405237/samples/icon_FB/img3_wnerif.gif',
    checked: false,
    code: 'wow',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642416957/samples/icon_FB/Comp-4_bnyjiw.gif',
    checked: false,
    code: 'angry',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/dr7kx9d32/image/upload/v1642405238/samples/icon_FB/img7_w2jiyj.gif',
    checked: false,
    code: 'sad',
  },
]

const ChooseTypeReaction = ({setIsRandom, isRandom, reaction, setReaction}) => {
  return (
    <div>
      <h5>Chọn loại Reation</h5>

      <div className="d-flex justify-content-center mb-10 cursor-pointer ">
        <div
          className="mr-5 cursor-pointer"
          onClick={() => {
            setIsRandom(true)
          }}
        >
          <input
            type="radio"
            name="fav_language"
            value="HTML"
            checked={isRandom}
            onChange={() => {}}
          />
            <label for="html">Random</label>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsRandom(false)
          }}
        >
          <input
            type="radio"
            name="fav_language"
            value="HTML"
            checked={!isRandom}
            onChange={() => {}}
          />
            <label for="html">Chọn loại Reaction</label>
        </div>
         
      </div>
      {!isRandom && (
        <Row>
          {LIST_REACTIONS.map(ele => (
            <Col md="4" key={ele.id}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 40,
                }}
              >
                <img src={ele.image} alt="imgs" className="img-fluid" />
                <div style={{marginLeft: 20, marginTop: -10}}>
                  <RadioField
                    type="list"
                    name="reaction"
                    color="primary"
                    inline
                    options={[
                      {
                        name: ele.code,
                        value: ele.code,
                        label: '',
                        checked: ele.code === reaction,
                      },
                    ]}
                    onChange={(name, value) => setReaction(ele.code)}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default ChooseTypeReaction
