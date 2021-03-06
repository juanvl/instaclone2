import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin: 10px;
`;

export const CommentContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const Nickname = styled.Text`
  margin-left: 5px;
  font-weight: bold;
  color: #444;
`;

export const Comment = styled.Text`
  color: #555;
`;
