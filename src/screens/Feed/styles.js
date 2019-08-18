import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Posts = styled(FlatList)``;

export const EmptyFeedText = styled.Text`
  margin: auto;
`;
