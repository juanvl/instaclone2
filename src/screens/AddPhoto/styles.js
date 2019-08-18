import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-top: ${Platform.OS === 'ios' ? 50 : 30}px;
  font-weight: bold;
`;

export const ImageContainer = styled.View`
  width: 90%;
  height: ${Dimensions.get('window').width / 2}px;
  background-color: #eee;
  margin-top: 10px;
`;

export const Img = styled.Image`
  width: 100%;
  height: ${Dimensions.get('window').width / 2}px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  padding: 10px;
  background-color: #4286f4;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Input = styled.TextInput`
  margin-top: 20px;
  width: 90%;
`;

export const NoUserText = styled.Text`
  margin: auto;
`;
