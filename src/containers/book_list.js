import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//connect method should only be used on container components
/*
 only create containers for component that care about state, need to read/access state
 only the most parent component that needs to know about state will need to know
*/
class BookList extends Component {
  render() {
    return (<ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>);
  }

  renderList() {
    const books = this.props.books.map((book) => {
      return(
        <li key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
    return books;
  }
}

const mapStateToProps = state => (
  //will map whatever is returned as props inside BookList will automatically rerender.
  {
    books: state.books
  }
);

// Anything returned from this function will end up as props on the BookList container
const mapDispatchToProps = dispatch => (
  //whenever selectBook is called, the result should be passed to all our reducers
  bindActionCreators({ selectBook: selectBook }, dispatch)
);

//whenever application state changes, the BookList wi

// Promote BookList from a component into a container - it needs to know about the new dispatch method, selectBook.
// Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
