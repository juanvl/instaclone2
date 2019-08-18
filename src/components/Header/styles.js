import styled from 'styled-components/native';
import { Gravatar } from 'react-native-gravatar';

export const Container = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-color: #bbb;
  width: 100%;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Img = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  color: #000;
  font-family: 'shelter';
  height: 30px;
  font-size: 28px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  margin-right: 5px;
  color: #888;
  font-size: 10px;
`;

export const Avatar = styled(Gravatar)`
  border-radius: 25px;
  width: 30px;
  height: 30px;
`;
