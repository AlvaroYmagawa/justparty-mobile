import React from 'react';
import PropTypes from 'prop-types';
import { Linking } from 'react-native';

// CUSTOM IMPORTS
import {
  Container,
  Header,
  HeaderLeft,
  Avatar,
  UserName,
  CreatedAt,
  Title,
  Category,
  Categories,
  Description,
  HelpButton,
} from './styles';
import { colors } from '../../../styles';

const PostCell = ({ post, style }) => {
  const {
    title, description, created_at: createdAt, user, categories,
  } = post;

  // FUNCTIONS
  function openWhatsApp() {
    Linking.openURL('https://wa.me/5543988209509');
  }

  return (
    <Container style={style}>
      <Header>
        <Avatar source={{ uri: user.avatar }} />

        <HeaderLeft>
          <UserName>{user.name}</UserName>
          <CreatedAt>{createdAt}</CreatedAt>
        </HeaderLeft>

      </Header>

      <Title>{title}</Title>
      <Categories>
        {categories.map((category) => (<Category key={category.id}>{category.name}</Category>))}
      </Categories>

      <Description>
        {description}
      </Description>

      <HelpButton fontAwesomeIcon="whatsapp" onPress={openWhatsApp}>
        Entrar em contato
      </HelpButton>
    </Container>
  );
};

PostCell.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PostCell;
