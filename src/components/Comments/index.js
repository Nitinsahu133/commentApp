import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
  }

  onChangeNameInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextarea = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, commentList} = this.state
    const date = new Date()
    if (name !== '' && comment !== '') {
      this.setState({
        commentList: [
          ...commentList,
          {
            id: uuidv4(),
            name,
            comment,
            date,
            isLike: false,
          },
        ],
        name: '',
        comment: '',
      })
    }
  }

  deleteComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(eachComment => eachComment.id !== id),
    })
  }

  likeComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, isLike: !eachItem.isLike}
          : {...eachItem, isLike: eachItem.isLike},
      ),
    })
  }

  render() {
    const {commentList, name, comment} = this.state
    let indexNo = 0
    function letterBgColor() {
      const lastIndexOfBgColors =
        initialContainerBackgroundClassNames.length - 1
      indexNo = indexNo !== lastIndexOfBgColors ? indexNo + 1 : 0
      return initialContainerBackgroundClassNames[indexNo]
    }

    return (
      <div className="main-container">
        <div>
          <h1 className="main-heading">Comments</h1>
          <div className="form-container">
            <form className="form">
              <img
                className="main-image"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
              <p className="page-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="input-element"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="textarea-element"
                value={comment}
                onChange={this.onChangeTextarea}
              />
              <div>
                <button
                  onClick={this.addComment}
                  className="add-comment-button"
                  type="submit"
                >
                  Add Comment
                </button>
              </div>
            </form>
            <div className="desktop-comment-image-div">
              <img
                className="main-image-desktop"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="comment-container">
            <div className="no-of-comment-container">
              <p className="no-of-comment">{commentList.length}</p>
            </div>
            <p className="comment-heading">Comment</p>
          </div>
          <ul className="comment-ul-container">
            {commentList.map(eachComment => (
              <CommentItem
                letterBgColorClassName={letterBgColor()}
                key={eachComment.id}
                likeComment={this.likeComment}
                deleteComment={this.deleteComment}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
