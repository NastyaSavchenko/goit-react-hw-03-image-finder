import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery, Searchbar } from 'components';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppStyled } from './App.styled';

export class App extends PureComponent {
  state = {
    name: '',
    page: 1,
  };

  onFormSubmit = name => {
    let page = this.state.page;
    if (this.state.name !== name) {
      page = 1;
    }
    this.setState({ name, page });
  };

  onLoadMoreClick = event => {
    event.preventDefault();
    this.setState(() => ({
      page: this.state.page + 1,
    }));
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery
          searchName={this.state.name}
          page={this.state.page}
          loadMore={this.onLoadMoreClick}
        />
        <ToastContainer />
      </AppStyled>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  page: PropTypes.number,
};
