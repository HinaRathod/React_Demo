import React, {useState, useEffect} from 'react';

const CountButton = (props) => {
   const [Counter,setCounter] = useState(0)

const handleClick = () => {
      setCounter(Counter+props.incrementBy)
    }

useEffect( () => {
   
if(Counter == 10){
    setCounter(0)
}

    }, [Counter] )


    const divStyle = {
        color : "magenta",
        
        border : "2px solid blue",
        borderRadius : "10px"
    }
    const buttonStyle = {
background : props.buttonColor

    }


    return(
        <div style={divStyle}>
            <button onClick={handleClick} style={buttonStyle}>+{props.incrementBy}</button>
            <div>{Counter}</div>
        </div>
    )

}

export default CountButton