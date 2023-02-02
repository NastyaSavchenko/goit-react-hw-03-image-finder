import { ImageGalleryItem, Modal } from 'components';
import PT from 'prop-types';
import React, { PureComponent } from 'react';

import { GalleryListStyled } from '../ImageGallery/ImageGallery.styled';

class ImageGalleryList extends PureComponent {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    return this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <>
        <GalleryListStyled>
          <ImageGalleryItem
            images={this.props.images}
            toggleModal={this.toggleModal}
          />
        </GalleryListStyled>
        {this.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.largeImg} alt={this.props.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryList;

ImageGalleryList.propTypes = {
  images: PT.array.isRequired,
  largeImg: PT.string,
  tags: PT.string,
};

// ImageGalleryList.propTypes = {
//   imgData: PT.arrayOf(
//     PT.shape({
//       id: PT.number,
//       webformatURL: PT.string,
//       tags: PT.string,
//     })
//   ).isRequired,
//   toggleModal: PT.func.isRequired,
// };

// const ImageGalleryList = ({ imgData, toggleModal }) => {
//   return (
//     <GalleryListStyled>
//       {imgData.map(({ id, webformatURL, tags }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             webImg={webformatURL}
//             tags={tags}
//             imgId={id}
//             toggleModal={toggleModal}
//           />
//         );
//       })}
//     </GalleryListStyled>
//   );
// };

// export default ImageGalleryList;

// ImageGalleryList.propTypes = {
//   imgData: PT.arrayOf(
//     PT.shape({
//       id: PT.number,
//       webformatURL: PT.string,
//       tags: PT.string,
//     })
//   ).isRequired,
//   toggleModal: PT.func.isRequired,
// };
