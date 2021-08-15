import {useEffect, useState} from "react";
import {getComments} from "../../services/posts.comments.service";
import Comment from "../comment/Comment";
import './Comments.css'

export default function Comments({id}) {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null)
    useEffect(() => {
        getComments(id).then(value => setComments([...value]))
    }, [id]);

    const commentBtn = (chooseComment) => {
        setComment({...chooseComment})
    }
  return (
      <div className={'wrapper'}>
          <div className={'content-box'}>
              {comments.map(value =>
                  <Comment
                      item={value}
                      key={value.id}
                      commentBtn={commentBtn}
                  />)}
          </div>

          {comment && (<div className={'comment-box'}>{JSON.stringify(comment)}</div>)}
      </div>
  );
}