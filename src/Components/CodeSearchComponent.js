import React from 'react';
import getPostCodeDetail from '../api/postcodeapi';

//react class component to handle the call to API and render the UI 
const CodeSearchComponent = () => {
  //Variable to hold search keyword
  const [value, setValue] = React.useState('');
  //variable to hold the result set
  const [list, setList] = React.useState([]);
  
  const handleChange =  event => {
    setValue(event.target.value);
  };

  //Show the loader when user clicks and waits to see results of search 
  const showHide = event => {
    event.target.nextElementSibling.classList.toggle("hidden")
  }
 // Click event when user enters search key word and hits click button 
  const handleSubmit = event => {
      document.getElementById("divLoader").classList.toggle("loader");
      var codes = getPostCodeDetail(value);            
      if(codes.length === 0)
      {
        document.getElementById("lblSearchResult").innerHTML = "Invalid passcode";
        document.getElementById("divLoader").classList.toggle("loader");
      } else {
      codes.then( x=> {
        document.getElementById("lblSearchResult").innerHTML = "About "+ x.length +" result(s)";
        setList(x);     
        document.getElementById("divLoader").classList.toggle("loader");          
      })} 
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" minLength={2} value={value} placeholder="Search post code" onChange={handleChange} required />        
        <button type="submit">Find</button>
        <div id="divLoader"></div>
        <br />
        <label id='lblSearchResult'></label>
      </form>
      <ul className='codeDisplayHolder'>
        {list.map(item => (
          <li> 
            <div className='postCodeHeader' onClick={showHide}>Post code : {item.postcode} </div>
            <div className="hidden">
            Country : {item.country} <br /> 
            Region : {item.region} <br /> 
            Admin district : {item.admindistrict} <br /> 
            Parliamentary constituency : {item.parliamentaryconstituency} <br /> 
            Area : {item.area}
            </div>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default CodeSearchComponent;