import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryLi, ImageGalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onItemClick }) => {
  const handleClick = () => {
    onItemClick(image);
  };

  return (
    <ImageGalleryLi onClick={handleClick}>
      <ImageGalleryItemImg src={image.webformatURL} alt={image.tags} />
    </ImageGalleryLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
