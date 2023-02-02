import PT from 'prop-types';

import {
  GalleryItemStyled,
  ImageStyled,
} from '../ImageGallery/ImageGallery.styled';

const ImageGalleryItem = ({ images, toggleModal }) => {
  // state = {
  //   showModal: false,
  //   webImg: '',
  //   tags: '',
  //   id: null,
  //   largeImg: '',
  // };

  // toggleModal = () => {
  //   return this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  // getInfo = () => {
  //   this.props.images.map((id, webformatURL, tags, largeImageURL) => {
  //     this.setState({
  //       webImg: webformatURL,
  //       tags,
  //       id,
  //       largeImg: largeImageURL,
  //     });
  //   });
  // };

  // this.getInfo();
  // const { toggleModal } = this.props;
  // const { webImg, tags, id, largeImg } = this.state;
  console.log(images);
  images.map(({ id, webformatURL, tags, largeImageURL }) => {
    console.log(tags);
    return (
      <GalleryItemStyled key={id}>
        <ImageStyled
          key={id}
          src={webformatURL}
          alt={tags}
          onClick={() => toggleModal(largeImageURL, tags)}
        />
      </GalleryItemStyled>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PT.arrayOf(
    PT.shape({
      id: PT.number,
      webformatURL: PT.string,
      tags: PT.string,
      largeImageURL: PT.string,
    })
  ).isRequired,
  toggleModal: PT.func,
};
