import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '~store/actions/post';
import Header from '~components/Header';
import Post from '~components/Post';

import * as S from './styles';

class Feed extends Component {
  componentDidMount = () => {
    this.props.onFetchPosts();
  };

  render() {
    return (
      <S.Container>
        <Header />
        {this.props.posts.length > 0 ? (
          <S.Posts
            data={this.props.posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item }) => <Post key={item.id} {...item} />}
          />
        ) : (
          <S.EmptyFeedText>Nada no seu Feed :/</S.EmptyFeedText>
        )}
      </S.Container>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.posts,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
