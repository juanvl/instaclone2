import React, { Component } from 'react';
import { connect } from 'react-redux';
import Author from '~components/Author';
import Comments from '~components/Comments';
import AddComment from '~components/AddComment';
import { Container, PostImg } from './styles';

class Post extends Component {
  render() {
    const addComment = this.props.name ? (
      <AddComment postId={this.props.id} />
    ) : null;

    return (
      <Container>
        <PostImg source={{ uri: this.props.image }} />
        <Author email={this.props.email} nickname={this.props.nickname} />
        <Comments comments={this.props.comments} />
        {addComment}
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
});

export default connect(mapStateToProps)(Post);
