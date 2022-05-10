import React, {useState} from "react";



const Comp = function(){
    const [count, setCount] = useState(5)

    function like(){
        setCount(count+1)
    }

    function dislike(){
        setCount(count-1)
    }

    return (
        <div>
            <button onClick={like}>like</button>
            <button onClick={dislike}>dislike</button>
            <p>{count}</p>
        </div>
    )
}

export default Comp;