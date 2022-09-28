//**UI */
import {ArrowLeft, Search, X} from 'react-feather'
import {Button, Input, InputGroup, InputGroupText, Label} from 'reactstrap'
import {useEffect, useState} from 'react'

//**Ctx */
import {useModalCtx} from '@services/news-feed-v1/context/create-post'

//**Component */
// import {ProfileQuery} from 'hook/profile'

//**Css */
import styles from '../Step.module.css'

//**fake data */
import data from './data'

const TagPeople = ({userUid}) => {
  //**Ctx */
  const {
    state: {with_friends},
    setPositionModal,
    setWithFriend,
  } = useModalCtx()

  // //**Query */
  // const {data: listFollowing} =
  //   ProfileQuery.useGetListFollowingsByUserId(userUid)

  //**State */
  const [tagItem, setTagItem] = useState([])

  //**Handle */
  const handleSelect = (friend, isSelect) => {
    return setTagItem(listFriends => {
      return listFriends.map(item =>
        item.user_id === friend.user_id ? {...item, isSelect} : item,
      )
    })
  }

  useEffect(() => {
    if (data) {
      setTagItem(data.map(item => ({...item, isSelect: false})))
    }
  }, [data])

  useEffect(() => {
    if (with_friends.length > 0) {
      setTagItem(with_friends.map(d => ({...d, isSelect: true})))
    }
  }, [with_friends])

  let listFriendNoSelect = tagItem?.filter(item => !item.isSelect)
  let listFriendSelected = tagItem?.filter(item => item.isSelect)
  const handleSubmit = () => {
    setWithFriend([...listFriendSelected])
    setPositionModal(0)
  }

  return (
    <>
      <div
        onClick={() => setPositionModal(0)}
        className="pt-1 border-bottom pb-1 mb-1 cursor-pointer title-24 text-color-primary-dark"
      >
        <ArrowLeft size={32} className="mr-1" />
        Friends
      </div>
      <div>
        <div className="mb-2">
          <InputGroup>
            <Input
              placeholder="Search by name"
              className={styles.inputSearch}
            />
            <InputGroupText
              style={{borderRadius: '0 0.357rem 0.357rem 0'}}
              className={`cursor-pointer ${styles.input}`}
            >
              <Search size={24} />
            </InputGroupText>
          </InputGroup>
        </div>

        {listFriendSelected?.length > 0 && (
          <div className="mb-2">
            <Label
              className="form-label title-16-700-24 text-color-primary-dark"
              for="Tagged"
            >
              Tagged
            </Label>
            <ul
              style={{backgroundColor: '#F4F5F4'}}
              className="p-1 d-flex flex-wrap rounded"
              id="Tagged"
            >
              {listFriendSelected.map(item => (
                <li
                  key={item.id}
                  className="mr-1 d-flex bg-white p-1 align-items-center rounded mb-1"
                >
                  <div style={{width: '40px', height: '40px'}} className="mr-1">
                    <img
                      className="w-100 h-100 rounded-circle"
                      src={
                        item.avatar ||
                        'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
                      }
                      alt={item.name}
                      style={{objectFit: 'cover'}}
                    />
                  </div>
                  <p className="title-16-700-24 text-color-primary-dark mr-2 mb-0">
                    {item.name || item.username}
                  </p>
                  <X
                    onClick={() => handleSelect(item, false)}
                    className="ml-auto cursor-pointer"
                    size={18}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {listFriendNoSelect?.length > 0 && (
          <div className="mb-2">
            <Label
              className="form-label title-16-700-24 text-color-primary-dark"
              for="Tagged"
            >
              Friends
            </Label>
            <ul className="px-1">
              {listFriendNoSelect.map(item => (
                <li key={item.id} className="mb-3">
                  <div
                    className="d-inline-flex align-items-center cursor-pointer"
                    onClick={() => handleSelect(item, true)}
                  >
                    <div className="mr-1">
                      <div
                        style={{width: '50px', height: '50px'}}
                        className="mr-1"
                      >
                        <img
                          className="w-100 h-100 rounded-circle"
                          src={
                            item.avatar ||
                            'https://res.cloudinary.com/cloudhspace/image/upload/v1652172821/dev.hspace.biz/user-profile/trend-avatar-1_xxdjif.jpg'
                          }
                          alt={item.name || item.username}
                          style={{objectFit: 'cover'}}
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="title-16-700-24 text-color-primary-dark mr-2 mb-0">
                        {item.name || item.username}
                      </p>
                      <p className="text-muted mb-0">{item.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <Button onClick={() => handleSubmit()} color="gradient-primary">
            Save
          </Button>
        </div>
      </div>
    </>
  )
}

export default TagPeople
