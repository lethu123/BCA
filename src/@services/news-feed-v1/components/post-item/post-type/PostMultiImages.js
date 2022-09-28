//**UI */
import {useState} from 'react'

//**Component */
import styles from '../PostItem.module.css'

//**Third party */
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const PostMultiImages = ({data}) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [imageList, setImageList] = useState([])
  const [isOpenLb, setIsOpenLb] = useState(false)
  let isMultipleImages = data?.length < 5
  let isDoubleImage = data?.length === 2

  const renderLayoutImg = idx => {
    switch ((idx + 1) % 5) {
      case 1:
        return isDoubleImage
          ? 'calc(0% + 0px) calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px)'
          : `calc(0% + 0px) calc(50% + 1.01px) calc(${
              isMultipleImages ? '50' : '40'
            }% + 1.01px) calc(0% + 0px)`
      case 2:
        return isDoubleImage
          ? 'calc(0% + 0px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)'
          : `calc(0% + 0px) calc(0% + 0px) calc(${
              isMultipleImages ? '50' : '40'
            }% + 1.01px) calc(50% + 1.01px)`
      case 3:
        return `calc(60% + 1.01px) calc(${
          isMultipleImages ? '50' : '66.6667'
        }% + 1.01px) calc(0% + 0px) calc(0% + 0px)`
      case 4:
        return isMultipleImages
          ? 'calc(50% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(50% + 1.01px)'
          : 'calc(60% + 1.01px) calc(33.3333% + 1.01px) calc(0% + 0px)'

      default:
        return 'calc(60% + 1.01px) calc(0% + 0px) calc(0% + 0px) calc(66.6667% + 1.01px)'
    }
  }
  return (
    <>
      <div
        style={{
          paddingTop: isDoubleImage
            ? 'calc(50%)'
            : isMultipleImages
            ? 'calc(100%)'
            : 'calc(83.3333%)',
        }}
        className="position-relative"
        id="post-image-content"
        onClick={() => setImageList(data)}
      >
        {data.slice(0, 5).map((url, idx, arr) => (
          <div
            key={url}
            className="overflow-hidden position-absolute"
            style={{
              inset: renderLayoutImg(idx),
            }}
          >
            <div
              className="image-box"
              onClick={() => {
                setPhotoIndex(idx)
                setIsOpenLb(status => !status)
              }}
            >
              <div className={`overflow-hidden `}>
                <div
                  style={{paddingTop: '100%'}}
                  className="overflow-hidden h-0 position-relative"
                >
                  <div
                    className={`position-absolute ${
                      arr.length > 4 && idx === 4 && styles.post_multi_img_bg
                    } cursor-pointer`}
                    style={{
                      top: 0,
                      height: '100%',
                      left: '-16.6667%',
                      width: 'calc(133.333%)',
                    }}
                  >
                    <img
                      src={url}
                      alt="imgs"
                      className="img-fluid position-absolute"
                      style={{
                        width: '100%',
                        inset: 0,
                        height: '100%',
                        bolder: 0,
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
              {arr.length > 4 && idx === 4 && (
                <p className={styles.img_last_couter}>+{data.length - 4}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {isOpenLb && (
        <Lightbox
          mainSrc={imageList.length > 0 && imageList[photoIndex]}
          nextSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + 1) % imageList.length]
          }
          prevSrc={
            imageList.length > 0 &&
            imageList[(photoIndex + imageList.length - 1) % imageList.length]
          }
          onCloseRequest={() => setIsOpenLb(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageList.length - 1) % imageList.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageList.length)
          }
        />
      )}
    </>
  )
}

export default PostMultiImages
