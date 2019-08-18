import React, { Component } from 'react';

import { Container, CommentContainer, Nickname, Comment } from './styles';

export default class Comments extends Component {
  render() {
    let view = null;
    if (this.props.comments) {
      view = this.props.comments.map((item, index) => (
        <CommentContainer key={index}>
          <Nickname>{item.nickname} </Nickname>
          <Comment>{item.comment}</Comment>
        </CommentContainer>
      ));
    }
    return <Container>{view}</Container>;
  }
}
