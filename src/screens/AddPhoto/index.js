import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { addPost } from '~store/actions/post';
import * as S from './styles';

class AddPhoto extends Component {
  state = {
    image: null,
    comment: '',
  };

  pickImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Escolha a imagem',
        maxWidth: 800,
        maxHeight: 600,
      },
      res => {
        if (!res.didCancel) {
          this.setState({ image: { uri: res.uri, base64: res.data } });
        }
      }
    );
  };

  save = async () => {
    await this.props.onAddPost({
      id: Math.random(),
      nickname: this.props.name,
      email: this.props.email,
      image: this.state.image,
      comments: [
        {
          nickname: this.props.name,
          comment: this.state.comment,
        },
      ],
    });

    this.setState({ image: null, comment: '' });
    this.props.navigation.navigate('Feed');
  };

  render() {
    return (
      <S.Container>
        {this.props.name ? (
          <>
            <S.Title>Compartilhe uma imagem</S.Title>

            <S.ImageContainer>
              <S.Img source={this.state.image} />
            </S.ImageContainer>

            <S.Button onPress={this.pickImage}>
              <S.ButtonText>Escolha a foto</S.ButtonText>
            </S.Button>

            <S.Input
              placeholder="Algum comentário para a foto?"
              value={this.state.comment}
              onChangeText={comment => this.setState({ comment })}
            />

            <S.Button onPress={this.save}>
              <S.ButtonText>Salvar</S.ButtonText>
            </S.Button>
          </>
        ) : (
          <S.NoUserText>
            Você precisa estar logado para adicionar fotos!
          </S.NoUserText>
        )}
      </S.Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
  email: user.email,
});

const mapDispatchToProps = dispatch => ({
  onAddPost: post => dispatch(addPost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPhoto);
