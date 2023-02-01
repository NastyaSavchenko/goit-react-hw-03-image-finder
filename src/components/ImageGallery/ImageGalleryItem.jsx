import PT from 'prop-types';

import { GalleryItemStyled, ImageStyled } from './ImageGallery.styled';

export const ImageGalleryItem = ({ imgId, webImg, tags, toggleModal }) => {
  return (
    <GalleryItemStyled key={imgId}>
      <ImageStyled src={webImg} alt={tags} onClick={() => toggleModal()} />
    </GalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imgId: PT.number,
  webImg: PT.string,
  tags: PT.string,
  toggleModal: PT.func,
};
