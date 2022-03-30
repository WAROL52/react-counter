import React,{useState} from 'react'
import './counter.css'
function Counter({start=0,step=1}){
    const [count, setcount] = useState(start);
    return (
        <div className='counter'>
            <span>{count}</span>
            <input type='button' onClick={()=>setcount(start)} value="reset"/>
            <input type='button' onClick={()=>setcount(oldcount=>oldcount-step)} value="-"/>
            <input type='button' onClick={()=>setcount(oldcount=>oldcount+step)} value="+"/>
        </div>
    )
}
export default Counter