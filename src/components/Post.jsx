import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'

const PostBox = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`
const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`
const PostPic = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`
const ExtraStuff = styled.div`
  padding: 5px 16px;
`
const heartsAndLikes = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component{

  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <PostBox>
        <User>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </User>
        <PostPic>
          <img src={post.image.url} />
        </PostPic>
        <ExtraStuff>
          <p>{post.caption}</p>gi
  
          <heartsAndLikes>
          <FaHeartO />
          <FaCommentO />
        </heartsAndLikes>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </ExtraStuff>
      </PostBox>
    )
  }
}

export default Post;