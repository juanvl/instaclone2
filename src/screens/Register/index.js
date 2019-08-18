import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '~store/actions/user';
import { Container, Input, Button, ButtonText } from './styles';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    return (
      <Container>
        <Input
          placeholder="Nome"
          autoFocus
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />

        <Input
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <Input
          placeholder="Senha"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <Button
          onPress={() => {
            this.props.onCreateUser(this.state);
          }}
        >
          <ButtonText>Registrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateUser: user => dispatch(createUser(user)),
});

export default connect(
  null,
  mapDispatchToProps
)(Register);
