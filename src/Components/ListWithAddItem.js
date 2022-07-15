import React from 'react';
import getPostCodeDetail from '../api/postcodeapi';

const initialList = [ ];

const ListWithAddItem = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);

  const handleChange =  event => {
    //alert(event.target.value);
    //getPostCodeDetail(event.target.value);
    setValue(event.target.value);
  };

  const showHide = event => {
    event.target.nextElementSibling.classList.toggle("hidden")
  }

  const handleSubmit = event => {

    if (value.length >= 3) {
      var codes = getPostCodeDetail(value);
      debugger
      if(codes.length === 0)
      {
        document.getElementById("lblSearchResult").innerHTML = "Invalid passcode";
      } else {
      codes.then( x=> {
        document.getElementById("lblSearchResult").innerHTML = "About "+ x.length +" result(s)";
        setList(x);               
      })
    }
    } 
    // setValue('');
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" minLength={3} value={value} placeholder="Search post code" onChange={handleChange} />        

        <button type="submit">Find</button>
        <br />
        <label id='lblSearchResult'></label>
      </form>
      <ul className='codeDisplayHolder'>
        {list.map(item => (
          <li> <div className='postCodeHeader' onClick={showHide}>Post code : {item.postcode} </div>
          <div className="hidden">
          Country : {item.country} <br /> 
          Region : {item.region} <br /> Admin district : {item.admindistrict} <br /> 
          Parliamentaryconstituency : {item.parliamentaryconstituency} <br /> Area : {item.area}
          </div>
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default ListWithAddItem;