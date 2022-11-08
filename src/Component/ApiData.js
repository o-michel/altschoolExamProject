// // import React from 'react'
// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// const ApiData = () => {
//     const [clickedRepo, setClickedRepo] = useState("")

//     const [repoData, setRepoData] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [currentpage, setCurrentPage] = useState(1)
//     const [postsPerPage, setPostsPerPage] = useState(5)

//     // const afterClick = ()=> {res.description}
    
//   useEffect(() => {
//     const fetchPosts = async () => {
//     //   setLoading(true); 
//       const res = await axios.get('https://api.github.com/users/o-michel/repos');
//       const response =await res.data
//       console.log(response);
//     //   for (let i = 0; i < response.length; i++) {
//     //     let element = response[i].name;
//         // console.log(element);
//         // console.log(response.length);
//     //     setRepoData(element);
//     let element = response.map(res=>
//         <ul key={res.id}>
//             <li className='repoList' onClick={()=> setClickedRepo(console.log("yaaga"))}>{res.name}</li>
//             {/* <li><p>{res.description}</p></li>
//             <div className='boxes'>
//             <li><button><a href={res.html_url}>Github Repo</a></button></li>
//             <li><div>{res.visibility}</div></li>
//             </div> */}
//             {clickedRepo}
//             <br/>
//             <hr/>
//             <br/>
//             </ul>
//         // <ul key={res.id}>{res.description}</ul>
//     )
//     // console.log(element);
//     setRepoData(element);
        
//     // }
//     //   const person = response.results[0]
//     //   const {phone, email} = person

    
//     }
//     fetchPosts();
    

    
//   }, [])


//   return (
//     <div>
//         <h5>My Portfolio</h5>
//         <h3>
//         {repoData}
//         </h3>
        

//     </div>
//   )
// }

// export default ApiData