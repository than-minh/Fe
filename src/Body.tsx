import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Item from "./Item";

function Body(){
    const [posts, setPosts] = useState<Array<String>>([])
    const [postsPagi, setPostsPagi] = useState<number>(0)
    const [crPagi, setCrPagi] = useState<number>(1)

    useEffect(
        () =>{
            fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(
                results => {
                    setPosts(results.results)
                    setPostsPagi(results.count)
                    
                    if(results.previous == null){
                        setCrPagi(1)
                    }else if(results.next == null){
                        setCrPagi(Math.ceil(postsPagi/10))
                    }else{
                        const urlParams = results.next
                        setCrPagi(Number(urlParams.split('=')[1]) - 1)
                    }
                }
            )
        }
    ,[])

    return (
        <div className="body">
            <Header />
            { posts.map( (post,index) => { 
                return <Item key={index} item= {post} /> 
            }) }
        </div>
    )
}
export default Body;