import React, {useState} from 'react'
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import AddComment from './AddComment'

const Comment = ({listComment, reply}) => {
  const [list, setList] = useState(
    listComment.map(item => ({
      ...item,
      hidden: false,
    })),
  )
  const formatter = buildFormatter(englishStrings)
  const nestedComments = comment => {
    if (comment && comment.length > 0) {
      return (
        <div style={{width: '90%'}} className="ml-auto">
          <Comment listComment={comment} />
        </div>
      )
    }
  }
  return (
    <div>
      {list &&
        list.length > 0 &&
        list.map(item => (
          <div key={item.id}>
            <div className="d-flex py-5">
              <div className="symbol symbol-40 symbol-light-success mr-1 mt-1">
                <span className="symbol-label">
                  <img
                    src={item.user_info.avatar}
                    className="h-75 align-self-end"
                    alt="images"
                    style={{objectFit: 'cover'}}
                  />
                </span>
              </div>
              <div className="d-flex flex-column flex-row-fluid">
                <div className="d-flex align-items-center flex-wrap">
                  <p className="text-dark-75 text-hover-primary mb-1 font-size-lg font-weight-bolder pr-6">
                    {item.user_info.username}
                  </p>
                  <span className="text-muted font-weight-normal flex-grow-1 font-size-sm">
                    <TimeAgo date={item.date_created} formatter={formatter} />
                  </span>

                  <span
                    className="text-muted font-weight-normal font-size-sm"
                    style={{
                      display: reply ? 'block' : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() =>
                      setList(
                        list.map(ele =>
                          ele.id === item.id
                            ? {...ele, hidden: true}
                            : {...ele, hidden: false},
                        ),
                      )
                    }
                  >
                    Reply
                  </span>
                </div>
                <span className="text-dark-75 font-size-sm font-weight-normal pt-1">
                  Long before you sit dow to put digital pen to paper you need
                  to make sure you have to sit down and write.
                </span>
              </div>
            </div>
            {nestedComments(item.replyComments)}
            {item.hidden && <AddComment reply={true} />}
          </div>
        ))}
    </div>
  )
}

export default Comment
