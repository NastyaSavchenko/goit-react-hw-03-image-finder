import { Button, Loader } from 'components';
import PT from 'prop-types';
import { PureComponent } from 'react';

import api from '../../api/api';
import { GalleryListStyled } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

class ImageGallery extends PureComponent {
  state = {
    imgData: null,
    page: 1,
    isLoading: false,
    error: '',
  };

  async componentDidUpdate(prevProps) {
    const newName = this.props.searchName;
    const prevName = prevProps.searchName;

    if (prevName !== newName) {
      this.setState({ isLoading: true, page: 1 });
      try {
        const { data } = await api.onSearch(newName, this.state.page);
        this.setState({ imgData: data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onLoadMoreClick = () => {
    this.setState(prevState => {
      const newPages = prevState.page + 1;
      return { page: newPages };
    });
  };

  render() {
    const { imgData, isLoading, page } = this.state;
    return (
      <div>
        <GalleryListStyled>
          {imgData !== null &&
            imgData.map(({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  webImg={webformatURL}
                  largeImg={largeImageURL}
                  tags={tags}
                  imgId={id}
                />
              );
            })}
        </GalleryListStyled>
        {imgData !== null && <Button onClick={this.onLoadMoreClick} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PT.string.isRequired,
};
