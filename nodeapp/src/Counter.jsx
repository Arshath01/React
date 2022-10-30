import React,{ useState } from 'react';
const Counter = () => {
    const [style] = useState({button:'btn btn-primary m-2',countChange:'bg-warning p-2 rounded'})
    const [Count,setCount] = useState (0)
    function increament() {
        setCount ((prevCount)=>{
            return (prevCount + 1)
        })
    }
    function decreament() {
        setCount((prevCount)=> {
            if (prevCount > 0) {
                return (prevCount -1)
            }
            else {
                return (prevCount = 0)
            }
        })
    }
    return ( 
        <div>
           
            <button onClick={increament} className={style.button}>
                Increament
            </button>
            <span className={style.countChange}>{Count}</span>
            <button onClick={decreament} className={style.button}>
                decreament
            </button>
        </div>
    )
}

export default Counter ;
