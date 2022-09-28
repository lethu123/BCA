import MyButton from '@core/components/button/MyButton'
import SelectAdvanced from '@core/components/select/SelectAdvanced'
import TitleWithLine from '@core/components/title-with-line/TitleWithLine'
import SearchHashTagsResult from './hashtag-modal/SearchHashTagsResult'

import {useModalCtx} from '@services/news-feed-v1/context/create-post'
import {CommonQuery} from 'hook/common'
import CommonApi from 'hook/common/api'
import {useState} from 'react'
import {Search} from 'react-feather'

import {
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap'

// import Recent from './hashtag-modal/Recent'
// import Saved from './hashtag-modal/Saved'
// import Trending from './hashtag-modal/Trending'

import styles from './Step.module.css'

const newFormStyle = {
  input: () => ({
    fontSize: '1.6rem',
    padding: '14px !important',
    fontWeight: 'bold',
    width: '20%',
  }),
}

const Hashtags = ({openSubModal, toggleSubModal}) => {
  //**State */
  const [active, setActive] = useState('1')
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    search: null,
  })
  const [tagsSelected, setTagsSelected] = useState([])
  const [tagsCreate, setTagsCreate] = useState([])

  const {setHashTag} = useModalCtx()

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  //**Query */
  const {data: getListHashTag} = CommonQuery.useGetListHashTag(params)
  // const queryClient = useQueryClient()

  // useEffect(() => {
  //   if (getListHashTag && getListHashTag.data) {
  //     setListHashtag(getListHashTag.data.map(item => ({...item})))
  //   }
  // }, [getListHashTag])
  //**Step */
  // const subModalStep = [
  //   {
  //     _key: 'Trending',
  //     id: '1',
  //     item: <Trending data={listHashtag} />  ,
  //   },
  //   {
  //     _key: 'Recent',
  //     id: '2',
  //     item: <Recent />,
  //   },
  //   {
  //     _key: 'Saved',
  //     id: '3',
  //     item: <Saved />,
  //   },
  // ]

  return (
    <>
      <Modal
        className="modal-dialog-centered w-50 custom_modal_job"
        isOpen={openSubModal}
        toggle={toggleSubModal}
        scrollable
      >
        <ModalHeader
          className={`custom_modal_header bg-white border-bottom pb-4 mb-2`}
          toggle={toggleSubModal}
          style={{border: 'none'}}
        >
          <TitleWithLine
            className="title-24-16 text-color-primary-dark"
            color="#D1ECFD"
            text="Hashtags"
          />
        </ModalHeader>
        <ModalBody className="p-0">
          <div className="mb-2  ">
            <Label
              className="form-label title-16-700-24 text-color-primary-dark"
              for="Search"
            >
              Tạo Tag
            </Label>
            <SelectAdvanced
              onChange={option => {
                setTagsCreate(option.map(it => it))
              }}
              moreStyle={newFormStyle}
            />
            <p className={`mb-0 ${styles.info}`}>
              We will ignore duplicate tags.
            </p>
          </div>

          <hr className="my-3" />
          <Nav pills className="justify-content-between">
            <NavItem className="mb-1">
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                className="nav-link-custom "
              >
                Trending
              </NavLink>
            </NavItem>
            <div className="mb-1">
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  const value = e.target.elements.search.value.trim()
                  setParams({...params, search: value || null, page: 1})
                }}
              >
                <InputGroup>
                  <Input
                    name="search"
                    placeholder="Search hashtags"
                    className={styles.inputSearch}
                    onChange={e => {
                      if (!e.target.value.trim())
                        setParams({...params, search: null, page: 1})
                    }}
                  />
                  <InputGroupText className={`cursor-pointer ${styles.input}`}>
                    <Search size={24} />
                  </InputGroupText>
                </InputGroup>
              </Form>
            </div>
          </Nav>
          <TabContent className="py-2" activeTab={active}>
            <TabPane tabId="1">
              <SearchHashTagsResult
                data={getListHashTag}
                tagsSelected={tagsSelected}
                setTagsSelected={setTagsSelected}
              />
            </TabPane>
          </TabContent>

          {/* <Nav pills className="justify-content-between">
            <NavItem>
              <NavLink
                active={active === '1'}
                onClick={() => {
                  toggle('1')
                }}
                className="nav-link-custom"
              >
                Trending
              </NavLink>
            </NavItem>
            <div className="mb-1">
              <InputGroup>
                <Input
                  placeholder="Search hashtags"
                  className={styles.inputSearch}
                />
                <InputGroupText className={`cursor-pointer ${styles.input}`}>
                  <Search size={24} />
                </InputGroupText>
              </InputGroup>
            </div>
            <NavItem>
              <NavLink
                active={active === '2'}
                onClick={() => {
                  toggle('2')
                }}
                className="nav-link-custom"
              >
                Recent
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                active={active === '3'}
                onClick={() => {
                  toggle('3')
                }}
                className="nav-link-custom"
              >
                Saved
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="py-2" activeTab={active}>
            {subModalStep.map(item => (
              <TabPane key={item._key} tabId={item.id}>
                {item.item}
              </TabPane>
            ))}
          </TabContent> */}
        </ModalBody>
        <ModalFooter>
          <MyButton
            className="title-16-700-24 text-color-primary-dark"
            color="gray-1"
            text="Add"
            style={{width: '25%'}}
            onClick={async () => {
              const newTags = tagsCreate.map((it, index) => ({
                ...it,
                content: it.value,
                __isNew__: true,
                id: index + it.value,
              }))
              setHashTag([...newTags, ...tagsSelected])

              // đóng modal tag
              toggleSubModal()
            }}
          />
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Hashtags
