import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';


const API_KEY = "AIzaSyDfERKS6olOSi_ty2R7ptPYYuV3pM9gZPw"
//create some html component with JS
const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

//make component with reactdom and show on page
ReactDOM.render(<App />, document.querySelector('.container'));
