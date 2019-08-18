import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '~store/actions/user';

import * as S from './styles';

class Login extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.props.navigation.navigate('Profile');
    }
  };

  login = () => {
    this.props.onLogin({ ...this.state });
  };

  register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <S.Container>
        {this.props.isLoading ? (
          <S.Loading size="large" />
        ) : (
          <>
            <S.Input
              placeholder="Email"
              autoCapitalize="none"
              autoFocus
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />

            <S.Input
              placeholder="Senha"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />

            <S.Button onPress={this.login}>
              <S.ButtonText>Login</S.ButtonText>
            </S.Button>

            <S.Button onPress={this.register}>
              <S.ButtonText>Criar nova conta</S.ButtonText>
            </S.Button>
          </>
        )}
      </S.Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(login(user)),
});

const mapStateToProps = ({ user }) => ({
  isLoading: user.isLoading,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
