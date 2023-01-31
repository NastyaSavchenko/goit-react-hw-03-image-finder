import PT from 'prop-types';

import { GalleryItemStyled, ImageStyled } from './ImageGallery.styled';

export const ImageGalleryItem = ({ imgId, webImg, largeImg, tags }) => {
  return (
    <GalleryItemStyled key={imgId}>
      <ImageStyled src={webImg} alt={tags} />
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imgId: PT.number,
  webImg: PT.string,
  largeImg: PT.string,
  tags: PT.string,
};
