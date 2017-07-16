import React, {Component} from 'react'

// const SearchBar = () => {
//   return <input />
// };

class SearchBar  extends Component
{
  render ()
  {
    return <input onChange={(event) => console.log(event.target.value) } />;
    //return <input onChange={this.onInputChange} />; with function

  }


  // onInputChange(event)
  // {
  //   console.log(event);
  // }

}

export default SearchBar;
