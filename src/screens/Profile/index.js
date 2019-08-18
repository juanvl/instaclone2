import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '~store/actions/user';

import {
  Container,
  Avatar,
  Nickname,
  Email,
  Button,
  ButtonText,
} from './styles';

class Profile extends Component {
  logout = () => {
    this.props.onLogout();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const options = { email: this.props.email, secure: true };

    return (
      <Container>
        <Avatar options={options} />
        <Nickname>{this.props.name}</Nickname>
        <Email>{options.email}</Email>
        <Button onPress={this.logout}>
          <ButtonText>Sair</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
  email: user.email,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
