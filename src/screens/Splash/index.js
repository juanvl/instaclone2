import React, { Component } from 'react';
import icon from '~../assets/imgs/icon.png';
import * as S from './styles';

export default class Splash extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Feed');
    }, 2000);
  };

  render() {
    return (
      <S.Container>
        <S.Logo source={icon}></S.Logo>
        <S.Header>Instaclone</S.Header>
      </S.Container>
    );
  }
}
