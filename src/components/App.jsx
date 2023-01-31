import { Button, ImageGallery, Loader, Modal, Searchbar } from 'components';
import PT from 'prop-types';
import React, { PureComponent } from 'react';

import { AppStyled } from './App.styled';

export class App extends PureComponent {
  state = {
    searchName: '',
    imgData: null,
    isLoading: false,
    apiPage: '',
  };

  // async componentDidMount(name) {
  //   console.log(name);
  //   this.setState({ isLoading: true });
  //   const key = '32589447-ffbdd7a8f0a573b29764024b7';
  //   const searchName = this.state.name;
  //   axios.defaults.baseURL = 'https://pixabay.com/api/';
  //   if (name !== searchName) {
  //     try {
  //       const response = await axios.get(
  //         `?q=${name}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  //       );
  //       console.log(response);
  //       this.setState({ img: response.data.hits, name });
  //     } catch (error) {
  //       this.setState({ error });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //   }
  // }

  onFormSubmit = name => {
    this.setState({ name });
  };
  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery />
        {this.state.isLoading && <Loader />}
        <Button />
        {/* <Modal>
          <p>j</p>
        </Modal> */}
      </AppStyled>
    );
  }
}

// App.propTypes = {
//   name: PT.string.isRequired,
//   imgApi: PT.array.isRequired,
//   isLoading: PT.bool.isRequired,
// };
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна
