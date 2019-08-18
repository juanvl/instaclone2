import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addComment } from '~store/actions/post';
import { Container, CommentAreaContainer, Input, TWF, Caption } from './styles';

class AddComment extends Component {
  state = {
    comment: '',
    editMode: false,
  };

  handleAddComment = () => {
    this.props.onAddComment({
      postId: this.props.postId,
      comment: {
        nickname: this.props.name,
        comment: this.state.comment,
      },
    });

    this.setState({ comment: '', editMode: false });
  };

  render() {
    let commentArea = null;

    if (this.state.editMode) {
      commentArea = (
        <CommentAreaContainer>
          <Input
            value={this.state.comment}
            placeholder="Comentar..."
            autoFocus
            onChangeText={comment => this.setState({ comment })}
            onSubmitEditing={this.handleAddComment}
          />
          <TWF onPress={() => this.setState({ editMode: false })}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </CommentAreaContainer>
      );
    } else {
      commentArea = (
        <TWF onPress={() => this.setState({ editMode: true })}>
          <CommentAreaContainer>
            <Icon name="comment-o" size={15} color="#555" />
            <Caption>Adicione um comentário...</Caption>
          </CommentAreaContainer>
        </TWF>
      );
    }

    return <Container>{commentArea}</Container>;
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
});

const mapDispatchToProps = dispatch => ({
  onAddComment: payload => dispatch(addComment(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
