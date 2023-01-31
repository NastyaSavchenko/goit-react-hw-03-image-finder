import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery, Searchbar } from 'components';
import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppStyled } from './App.styled';

export class App extends PureComponent {
  state = {
    name: '',
  };

  onFormSubmit = name => {
    this.setState({ name });
  };
  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchName={this.state.name} />
        <ToastContainer />
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
