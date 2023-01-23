//import logo from './logo.svg';
import './App.css';
import React from 'react';
import CountButton from './Countbutton';
import SearchBar from './SearchBar';
import Button from './Button';



function App() {

  // const [productState,setProductState] = useState([])

  // useEffect ( () => {

  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then((productsarray) =>{
  //             const newProductsState = productsarray.map((product) => {

  //               return product.title
  //             })
  //             setProductState(newProductsState)
  //           })
  //         },[])




  // const hasProducts = productState.length > 0
  
  return (
    <div>
    <Button>Hello1</Button>
     <Button>Hello2</Button>
      <Button>Hello3</Button>
      <CountButton incrementBy={1} buttonColor={'aqua'} />
      {/* {<CountButton incrementBy = {5} buttonColor={'pink'}/>
       <CountButton incrementBy = {10} buttonColor={'yellow'}/>} */}
{/* <SearchBar products= { [
'lipstick',
'lip gloss',
'lip liner',
'eye liner',
'blush',
'foundation',
'primer']} /> */}
{/* 
{hasProducts ? <SearchBar products= {productState} />  : "Loading..."} */}





       </div>
  )
}

export default App;

