//** UI */

//** Component */
import {useState} from 'react'
import styles from '../PostItem.module.css'

//**Third party */
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const PostImages = ({data}) => {
  const [isOpenLb, setIsOpenLb] = useState(false)

  return (
    <>
      <div className={`${styles.fiximg} rounded`}>
        <img
          className="w-100 h-100 cursor-pointer border-none"
          style={{objectFit: 'cover'}}
          src={data}
          alt={data}
          onClick={() => setIsOpenLb(true)}
        />
      </div>
      {isOpenLb && (
        <Lightbox mainSrc={data} onCloseRequest={() => setIsOpenLb(false)} />
      )}
    </>
  )
}

export default PostImages
