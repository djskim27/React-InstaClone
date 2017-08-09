import React, {Component} from 'react';
import styled from 'styled-components';

const CommentDiv = styled.div`
  display: flex;
  align-items: center;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <CommentDiv>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentDiv>
    );
  }
}

export default Comment;