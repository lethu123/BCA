import {Bookmark, Search, X} from 'react-feather'
import {Input, InputGroup, InputGroupText, Label} from 'reactstrap'
import styles from '../Step.module.css'
import data from '../data'
import SearchHashTagsResult from './SearchHashTagsResult'
const Saved = () => {
  return (
    <>
      <div className="mb-2">
        <InputGroup>
          <Input placeholder="Search hashtags" className={styles.inputSearch} />
          <InputGroupText className={`cursor-pointer ${styles.input}`}>
            <Search size={24} />
          </InputGroupText>
        </InputGroup>
      </div>
      <SearchHashTagsResult data={data.hashtag} />
    </>
  )
}

export default Saved
