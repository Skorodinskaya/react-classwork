import {useEffect, useState} from "react";
import {getPosts} from "../../services/posts.comments.service";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {
  let [posts, setPosts] = useState([]);
  let [post, setPost] = useState(null)

  useEffect(() => {
    getPosts().then(value => setPosts([...value]))
  })

    const postBtn = (choosePost) => {
      setPost({...choosePost})
    }

  return (
      <div className={'wrap'}>
        <div className={'post-box'}>
          {posts.map(value =>
              <Post
                  item={value}
                  key={value.id}
                  postBtn={postBtn}
              />)}
        </div>

          {post && (<div className={'btn-box'}>{JSON.stringify(post)}</div>)}

      </div>
  );
}