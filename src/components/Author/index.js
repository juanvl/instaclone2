import React from 'react';

import { Container, Avatar, Nickname } from './styles';

const Author = props => (
  <Container>
    <Avatar options={{ email: props.email, secure: true }} />
    <Nickname>{props.nickname}</Nickname>
  </Container>
);

export default Author;
