// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    deleteComment,
    likeComment,
    letterBgColorClassName,
  } = props
  const {name, comment, time, id, isLike} = commentDetails
  const likedClass = isLike ? 'liked-comment' : ''

  const onClickDeleteComment = () => {
    deleteComment(id)
  }

  const onClickLike = () => {
    likeComment(id)
  }

  return (
    <li className="comment-item-container">
      <div className="name-time-first-letter-container">
        <div
          className={`name-first-letter-container ${letterBgColorClassName}`}
        >
          <p>{name[0]}</p>
        </div>
        <div>
          <p className="commenter-name">
            {name}
            <span className="comment-time"> {time}</span>
          </p>
          <p className="comment-paragraph">{comment}</p>
        </div>
      </div>
      <div className="like-delete-button-container">
        <div className="like-image-container">
          {isLike && (
            <img
              onClick={onClickLike}
              alt="liked"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
          )}
          {!isLike && (
            <img
              onClick={onClickLike}
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
          )}
          <p
            onClick={onClickLike}
            className={`comment-like-text ${likedClass}`}
          >
            Like
          </p>
        </div>
        <img
          onClick={onClickDeleteComment}
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
        />
      </div>
      <hr className="comment-item-horizontal-line" />
    </li>
  )
}

export default CommentItem
