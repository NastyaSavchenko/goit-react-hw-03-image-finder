import PT from 'prop-types';

import { GalleryListStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

const ImageGalleryList = ({ imgData, toggleModal }) => {
  return (
    <GalleryListStyled>
      {imgData.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webImg={webformatURL}
            tags={tags}
            imgId={id}
            toggleModal={toggleModal}
          />
        );
      })}
    </GalleryListStyled>
  );
};

export default ImageGalleryList;

ImageGalleryList.propTypes = {
  imgData: PT.arrayOf(
    PT.shape({
      id: PT.number,
      webformatURL: PT.string,
      tags: PT.string,
    })
  ).isRequired,
  toggleModal: PT.func.isRequired,
};
