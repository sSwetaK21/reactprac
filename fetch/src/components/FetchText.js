import React, { useState, useEffect } from "react";
import axios from "axios"


export function FetchText() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearchBar] = useState("");


    useEffect(() => {
        axios
            // .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .get("https://jsonplaceholder.typicode.com/comments/")
            .then((response) => {
                console.log(response.data);
                setPosts([posts, ...response.data]);
                setFilter([posts, ...response.data])
            });
    }, [])


    useEffect(()=>{
        const filterDataValue = posts.filter((post) => {
            if(post.name){
                return post.name.includes(search.toLowerCase())
            }
        })
        setFilter(filterDataValue)
    }, [search])


    return (
        <div>

             {/* <h1>{post.title}</h1>
            <p>{post.body}</p>
                <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
                <button onClick={()=>setBtnId((id))}>Click</button> */}

            <input type="text" value={search} onChange={
                (e) => setSearchBar(e.target.value)
            }/>
            {
                filter.map(
                    (post)=> (

                    
                        <div key={post.id}>
                            <h1> {post.name}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                )
            }
          
        </div>
    )

}



