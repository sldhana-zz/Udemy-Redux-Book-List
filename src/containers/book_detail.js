import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class BookDetail extends Component {
  render() {
    const { book } =  this.props
    if (!book){
      return <div>No active book yet, choose a book fella!</div>
    }

    return <div>
      <h3>Details for</h3>
      <div>Title: {book.title}</div>
      <div>Pages: {book.pages}</div>
    </div>
  }
}


const mapStateToProps = state => (
  //will map whatever is returned as props inside BookDetails will automatically rerender.
  {
    book: state.activeBook
  }
);

export default connect(mapStateToProps)(BookDetail);
