const getPostCodeDetail = async (postcode) => {
    let lambdaApiUrl = "https://rpzxxc61d0.execute-api.us-east-1.amazonaws.com/Prod/" + (postcode.lenght === 8 ? "lookup" :"autocomplete") + "?postcode=" + postcode;
    try {
        const response = await fetch(lambdaApiUrl, {mode: 'cors'})
        return await response.json();
             
    } catch (error) {
        console.log("Invalid postcode")
        return [];
    }
    
  }
  export default getPostCodeDetail;