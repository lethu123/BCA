import {Search} from 'react-feather'
import {Input, InputGroup, InputGroupText} from 'reactstrap'
import styles from '../Step.module.css'
import SearchHashTagsResult from './SearchHashTagsResult'

const Trending = ({data}) => {
  return (
    <>
      <div className="mb-2">
        {/* <InputGroup>
          <Input placeholder="Search hashtags" className={styles.inputSearch} />
          <InputGroupText className={`cursor-pointer ${styles.input}`}>
            <Search size={24} />
          </InputGroupText>
        </InputGroup> */}
      </div>
      <SearchHashTagsResult data={data} />
    </>
  )
}

export default Trending
