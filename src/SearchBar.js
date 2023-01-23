import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState("search here") 
    const handleInputChange = (event) => {
       setSearchValue(event.target.value)
    }
       const handleInputClear = () => {
setSearchValue('')
       }
       const shouldDisplayButton = searchValue.length > 0

       const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)

       })
    

    return <div>
        <input type='text' value={searchValue} onChange={handleInputChange}></input>

        {/* {shouldDisplayButton && <button onClick={handleInputClear}>Clear</button>} */}
<ul>
     {filteredProducts.map ((product) => {
    return <li key={product}>{product}</li>
        })}
</ul>
       
        
    </div>


}

export default SearchBar;