// import React from 'react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import EachRepo from './EachRepo';
// { useState, useEffect} 


const RepoData = ({repodata, loading, repoClicked, clicked}) => {
    
//     // console.log(repoData);
    
//     let repoClicked = ()=> setRepoC lick(repoData);
//     const [repoClick, setRepoClick] = useState('');
//     console.log(repoClick);
    

    // useEffect(() => {
    
    // //   return () => {
    // //     second
    // //   }
    // }, [third])


    
    // const clickedIndex = ()=>{
    //     console.log({clickedIndex});
    // } 

    // clickedIndex={clickedIndex} onClick={handleClick(index)}


    console.log(loading);
    if (loading) {
        return <h2>Loading...</h2> 
    }
  return (
    <ul className='list-group'>
        {repodata.map((repo) => (
            <li onClick={()=> repoClicked(repo.id)} key={repo.id} className='list-group'>
       
{clicked?"":( <Link  className='each-repo' to='/repoData/eachRepo' repodata={repodata}> {repo.name }</Link>)}
            </li>

            
        ))}
        <Outlet/>
    </ul>
  )
}

export default RepoData