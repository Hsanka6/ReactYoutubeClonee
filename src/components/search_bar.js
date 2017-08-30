import React, {Component} from 'react'

// const SearchBar = () => {
//   return <input />
// };

class SearchBar  extends Component
{
  constructor(props)
  {
    super(props)

    this.state = {term: ''};
  }
  render ()
  {
    return(
      <div className="search-bar">
      <input
      value={this.state.term}
      onChange={(event) => this.onInputChange(event.target.value) } />
      </div>
    );
    //Value of the input: {this.state.term} // to print out to the screen

    //return <input onChange={(event) => console.log(event.target.value) } />;
    //return <input onChange={this.onInputChange} />; with function

  }
  onInputChange(term)
  {
    this.setState({term});
    this.props.onSearchTermChange(term)
  }

  // onInputChange(event)
  // {
  //   console.log(event);
  // }

}

export default SearchBar;
