//**UI */
import {useModalCtx} from '@services/news-feed-v1/context/create-post'
import {useEffect, useState} from 'react'
import {X} from 'react-feather'
import {Input, Label} from 'reactstrap'

const SearchHashTagsResult = ({data, tagsSelected, setTagsSelected}) => {
  // const {setHashTag, toggleSubModalAction, setBookMark} = useModalCtx()
  const {
    state: {hash_tags},
  } = useModalCtx()

  const [itemHashTags, setItemHashTag] = useState([])

  useEffect(() => {
    setItemHashTag(
      data?.data.length
        ? data.data.map(item => ({...item, isSelect: false, isBookMark: false}))
        : [],
    )
  }, [data])

  const handleSelect = (tag, isSelect) => {
    return setItemHashTag(listTag => {
      return listTag.map(item =>
        item.id === tag.id ? {...item, isSelect} : item,
      )
    })
  }

  useEffect(() => {
    if (itemHashTags)
      setTagsSelected(itemHashTags?.filter(item => item.isSelect))
  }, [itemHashTags])

  useEffect(() => {
    if (hash_tags)
      setItemHashTag(
        data?.data.length
          ? data.data.map(item => ({
              ...item,
              isSelect: hash_tags.map(it => it.id).includes(item.id),
              isBookMark: false,
            }))
          : [],
      )
  }, [hash_tags, data?.data])

  // const handleBookMark = (tag, isBookMark) => {
  //   return setItemHashTag(listTag => {
  //     return listTag.map(item =>
  //       item.id === tag.id ? {...item, isBookMark} : item,
  //     )
  //   })
  // }
  // let listTagSelected = itemHashTags?.filter(item => item.isSelect)
  // let listBookMark = itemHashTags?.filter(item => item.isBookMark)

  if (!data) return null
  return (
    <>
      {itemHashTags?.length > 0 && (
        <div className="mb-2 ">
          <Label
            className="form-label title-16-700-24 text-color-primary-dark"
            for="Search"
          >
            List Hash Tag
          </Label>
          <ul className="m-0 px-1 mt-2">
            {itemHashTags.map(item => (
              <li key={item.id} className="mb-3">
                <div className="form-check form-check-tertiary d-flex align-items-center">
                  <Input
                    onChange={e => {
                      handleSelect(item, e.target.checked)
                    }}
                    type="checkbox"
                    id={item.id}
                    checked={item.isSelect}
                  />
                  <Label className="form-check-label ms-1" for={item.id}>
                    <span className="text-color-primary-dark title-16-700-24">
                      #{item.content}
                    </span>{' '}
                    <span className="text-color-back60 text-14">
                      {item.c_post} Posts
                    </span>
                  </Label>
                  {/* <div
                    onClick={() => {
                      handleBookMark(item, !item.isBookMark)
                    }}
                    className="ms-auto cursor-pointer"
                    id={item.id_bookMark}
                  >
                    <Bookmark
                      fill={item.isBookMark ? 'red' : '#ffffff'}
                      color={item.isBookMark ? 'red' : '#333333'}
                    />
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {tagsSelected?.length > 0 && (
        <div className=" ">
          <Label
            className="form-label title-16-700-24 text-color-primary-dark"
            for="Search"
          >
            Selected
          </Label>
          <ul
            style={{backgroundColor: '#F4F5F4'}}
            className="p-1 rounded d-flex flex-wrap"
            id="Tagged"
          >
            {tagsSelected.map(item => (
              <li
                key={item.id}
                className="me-1 rounded d-flex bg-white p-1 align-items-center"
                onClick={() => handleSelect(item, false)}
              >
                <div className="me-1"></div>
                <p className="title-16-700-24 text-color-primary-dark me-2">
                  #{item.content}
                </p>
                <X className="ms-auto cursor-pointer" size={18} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <div className="d-flex justify-content-end">
        <MyButton
          className="title-16-700-24 text-color-primary-dark"
          color="gray-1"
          text="Add"
          style={{width: '25%'}}
          onClick={() => {
            setHashTag([...listTagSelected])
            setBookMark([...listBookMark])
            toggleSubModalAction(false)
          }}
        />
      </div> */}
    </>
  )
}

export default SearchHashTagsResult
