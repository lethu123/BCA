import {useEffect, useState} from 'react'
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap'

const CarauselImagePost = ({data = []}) => {
  const [images, setImage] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  useEffect(() => {
    if (data.length > 0) {
      setImage(data.map(img => ({src: img})))
    }
  }, [data])

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    console.log(images)
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = () =>
    images.map((item, idx) => {
      return (
        <CarouselItem onExiting={onExiting} onExited={onExited} key={idx}>
          <img src={item.src} className="img-fluid" alt={item.id} />
        </CarouselItem>
      )
    })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={[]}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides()}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarauselImagePost
