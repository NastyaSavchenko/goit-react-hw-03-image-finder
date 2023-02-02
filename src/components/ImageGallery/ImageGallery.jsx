import { Button, ImageGalleryList, Loader, Modal } from 'components';
import PT from 'prop-types';
import React, { PureComponent } from 'react';
import { animateScroll } from 'react-scroll';
import { toast } from 'react-toastify';

import { onSearch } from '../../api/api';

class ImageGallery extends PureComponent {
  state = {
    images: [],
    total: 0,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps) {
    const { name, page } = this.props;
    if (name !== prevProps.name || page !== prevProps.page) {
      this.setState({ status: 'pending' });
      try {
        const { data } = await onSearch(name, page);
        if (data.totalHits === 0) {
          this.setState({ status: 'rejected' });
        }
        if (name !== prevProps.name) {
          this.setState({
            images: data.hits,
            total: data.totalHits,
            status: 'resolved',
          });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            total: data.totalHits,
            status: 'resolved',
          }));
        }
        // if (data.hits < data.totalHits) {
        //   animateScroll.scrollToBottom({ behavior: 'smooth' });
        // }
      } catch (error) {
        this.setState({ error });
      }
    }
  }
  render() {
    const { images, total, status, error } = this.state;
    console.log('images ', images.length, 'total', total);

    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return toast.error(`🥺 sorry we can't find any ${this.props.name}`);
    }
    if (error) {
      return toast.error(`😭 something goes wrong please try again`);
    }
    if (status === 'resolved') {
      animateScroll.scrollToBottom({ behavior: 'smooth' });
      return (
        <>
          <ImageGalleryList images={images} />
          {images.length > 0 && images.length < total && (
            <Button onClick={this.props.loadMore} />
          )}
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  name: PT.string.isRequired,
  page: PT.number.isRequired,
  loadMore: PT.func,
};

// ` Looks like it's all ${this.props.searchName} we have`,
// toast.error(
//   ` 😍 We found ${this.state.totalImg} ${this.props.searchName}`,
//   {
//     autoClose: 2000,
//   }
// );

// state = {
//   imgData: [],
//   isLoading: false,
//   error: '',
//   showModal: false,
//   largeImg: '',
//   tag: '',
//   totalImg: 0,
// };

// async componentDidUpdate(prevProps) {
//   const { searchName, page } = this.props;
//   if (prevProps.searchName !== searchName || prevProps.page !== page) {
//     this.setState({ isLoading: true });
//     try {
//       const { data } = await api.onSearch(searchName, page);
//       if (searchName !== prevProps.searchName) {
//         this.setState({
//           imgData: data.hits,
//           isLoading: false,
//           totalImg: data.total,
//         });
//       } else {
//         this.setState(prevState => ({
//           imgData: [...prevState.imgData, ...data.hits],
//           isLoading: false,
//           totalImg: data.total,
//         }));
//       }
//       if (this.state.imgData.length < this.state.totalImg) {
//         animateScroll.scrollToBottom({ behavior: 'smooth' });
//       }
//     } catch (error) {
//       this.setState({ error });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }
// }

// getImgInfo = () => {
//   if (this.state.imgData !== []) {
//     this.state.imgData.map(({ largeImageURL, tag }) => {
//       return this.setState({ largeImg: largeImageURL, tag });
//     });
//   }
// };

// toggleModal = () => {
//   return this.setState(({ showModal }) => ({ showModal: !showModal }));
// };

// render() {
//   this.getImgInfo();
//   const { imgData, isLoading, largeImg, tag } = this.state;
//   return (
//     <div>
//       {imgData.length > 0 && (
//         <ImageGalleryList imgData={imgData} toggleModal={this.toggleModal} />
//       )}
//       {this.state.showModal && (
//         <Modal onClose={this.toggleModal}>
//           <ImageLarge src={largeImg} alt={tag} />
//         </Modal>
//       )}
//       {imgData.length > 0 &&
//         this.state.imgData.length !== this.state.totalImg && (
//           <Button onClick={this.props.loadMore} />
//         )}
//       {isLoading && <Loader />}
//     </div>
//   );
// }
