import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Container,
  RowContainer,
  Img,
  Title,
  UserInfo,
  Name,
  Avatar,
} from './styles';

import icon from '~../assets/imgs/icon.png';

class Header extends Component {
  render() {
    const options = { email: this.props.email, secure: true };
    const avatar = this.props.email ? <Avatar options={options} /> : null;
    const name = this.props.name || 'Anônimo';

    return (
      <Container>
        <RowContainer>
          <Img source={icon} />
          <Title>Instaclone</Title>

          <UserInfo>
            <Name>{name}</Name>
            {avatar}
          </UserInfo>
        </RowContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
  email: user.email,
});

export default connect(mapStateToProps)(Header);
