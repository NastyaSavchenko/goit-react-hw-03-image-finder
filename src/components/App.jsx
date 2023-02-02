import 'react-toastify/dist/ReactToastify.css';

import { ImageGallery, Searchbar } from 'components';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppStyled } from './App.styled';

export class App extends PureComponent {
  state = {
    name: '',
    page: 0,
  };

  handelSubmit = name => {
    if (this.state.name !== name) {
      this.setState({ name, page: 1 });
    }
  };

  onLoadMoreClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { name, page } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handelSubmit} />
        <ImageGallery name={name} page={page} loadMore={this.onLoadMoreClick} />
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}

// import 'react-toastify/dist/ReactToastify.css';

// import { ImageGallery, Searchbar } from 'components';
// import PropTypes from 'prop-types';
// import React, { PureComponent } from 'react';
// import { ToastContainer } from 'react-toastify';

// import { AppStyled } from './App.styled';

// export class App extends PureComponent {
//   state = {
//     name: '',
//     page: 1,
//   };

//   onFormSubmit = name => {
//     if (this.state.name !== name) {
//       this.setState({ name, page: 1 });
//     }
//   };

//   onLoadMoreClick = event => {
//     event.preventDefault();
//     this.setState(() => ({
//       page: this.state.page + 1,
//     }));
//   };

//   render() {
//     return (
//       <AppStyled>
//         <Searchbar onSubmit={this.onFormSubmit} />
//         <ImageGallery
//           searchName={this.state.name}
//           page={this.state.page}
//           loadMore={this.onLoadMoreClick}
//         />
//         <ToastContainer />
//       </AppStyled>
//     );
//   }
// }

App.propTypes = {
  name: PropTypes.string,
  // page: PropTypes.number.isRequired,
};
