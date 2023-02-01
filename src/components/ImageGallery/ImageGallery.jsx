import { Button, ImageGalleryList, Loader, Modal } from 'components';
import PT from 'prop-types';
import { PureComponent } from 'react';

import api from '../../api/api';

class ImageGallery extends PureComponent {
  state = {
    imgData: [],
    isLoading: false,
    error: '',
    showModal: false,
  };

  async componentDidUpdate(prevProps) {
    const { searchName, page } = this.props;
    if (prevProps.searchName !== searchName || prevProps.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { data } = await api.onSearch(searchName, page);
        if (searchName !== prevProps.searchName) {
          this.setState({
            imgData: data.hits,
            isLoading: false,
          });
        } else {
          this.setState(prevState => ({
            imgData: [...prevState.imgData, ...data.hits],
            isLoading: false,
          }));
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  toggleModal = () => {
    return this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { imgData, isLoading } = this.state;
    return (
      <div>
        {imgData.length > 0 && (
          <ImageGalleryList imgData={imgData} toggleModal={this.toggleModal} />
        )}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>
              <h1>hhhhhh</h1>
            </div>
          </Modal>
        )}
        {imgData.length > 0 && <Button onClick={this.props.loadMore} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  searchName: PT.string.isRequired,
  page: PT.number.isRequired,
  loadMore: PT.func.isRequired,
};
