// import React from 'react'
import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
// import EachRepo from './EachRepo';
// { useState, useEffect} 


const RepoData = ({repoData, loading}) => {
    
//     // console.log(repoData);
    
//     let repoClicked = ()=> setRepoClick(repoData);
//     const [repoClick, setRepoClick] = useState('');
//     console.log(repoClick);
    

    // useEffect(() => {
        const [clickedIndex, setClickedIndex] = useState({});
    
    // //   return () => {
    // //     second
    // //   }
    // }, [third])


    // const handleClick = (index) => () => {
    //     setClickedIndex(state => ({
    //         ...state,
    //         [index]: !state[index]
    //     }));
    // }
    

    // clickedIndex={clickedIndex} onClick={handleClick(index)}


    if (loading) {
        return <h2>Loading...</h2> 
    }
  return (
    <ul className='list-group'>
        {repoData.map((repo, index) => (
            <li  key={repo.id} className='list-group'>
        <Link className='each-repo' to='/repoData/eachRepo'> {repo.name }</Link>
                {/* {repoClick}  */}
                {/* <EachRepo/> */}
            </li>

            
        ))}
        <Outlet/>
    </ul>
  )
}

export default RepoData