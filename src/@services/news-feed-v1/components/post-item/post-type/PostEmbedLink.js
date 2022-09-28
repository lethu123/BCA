//** Component */
import {useState} from 'react'
import ShowMoreText from 'react-show-more-text'
import {Badge} from 'reactstrap'

//**Third party */
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import ReactPlayer from 'react-player'
import {detectUrlYoutube} from 'utility/Utils'
import {Link, NavLink, useHistory} from 'react-router-dom'

const PostEmbedLink = ({embed, ...rest}) => {
  const history = useHistory()
  const [isShowMore, setIsShowMore] = useState(
    () => keywords && keywords.length > 5,
  )
  const [isOpenLb, setIsOpenLb] = useState(false)

  if (!embed) return null

  const {image, description, title, url, keywords, icon} = embed

  //**Detect vidieo youtube */
  const check = detectUrlYoutube(url)

  return (
    <>
      <div className="d-block mt-2 cursor-pointer">
        {check && (
          <div>
            <ReactPlayer
              width="100%"
              controls={true}
              className="react-player-video"
              url={url}
            />
          </div>
        )}
        {image && !check && (
          <div>
            <img
              style={{objectFit: 'cover'}}
              className="img-fluid"
              src={image}
              alt={title}
              onClick={() => setIsOpenLb(true)}
            />
          </div>
        )}
        <div
          style={{
            backgroundColor: '#F4F5F4',
            borderRadius: '0 0 8px 8px',
          }}
          className="p-2 d-flex"
        >
          {icon && (
            <div className="mr-1">
              <img src={icon} alt="icon" width="50" height="50" />
            </div>
          )}

          <div>
            <h4>
              <a href={url}>{url}</a>
            </h4>

            {keywords && keywords.length > 0 && (
              <div className="my-1">
                {keywords
                  .slice(0, isShowMore ? keywords.length : 5)
                  .map(keyword => (
                    <Badge
                      color="light-secondary"
                      className="mr-1 mb-1"
                      key={keyword}
                    >
                      {keyword}
                    </Badge>
                  ))}
                {!isShowMore ? (
                  <Badge color="secondary" onClick={() => setIsShowMore(true)}>
                    ...more
                  </Badge>
                ) : (
                  <Badge color="secondary" onClick={() => setIsShowMore(false)}>
                    ...less
                  </Badge>
                )}
              </div>
            )}

            <p className="text-color-black100 title-16-700-24">{title}</p>

            <div className="text-color-black100 text-16">
              <ShowMoreText
                lines={1}
                more="Show more"
                less="Show less"
                className="content-css text-color-black100 text-16"
                anchorClass="my-anchor-css-class"
                expanded={false}
                truncatedEndingComponent={'... '}
              >
                {description}
              </ShowMoreText>
            </div>
          </div>
        </div>
      </div>
      {isOpenLb && (
        <Lightbox mainSrc={image} onCloseRequest={() => setIsOpenLb(false)} />
      )}
    </>
  )
}

export default PostEmbedLink
