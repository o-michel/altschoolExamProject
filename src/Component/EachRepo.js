import React from 'react'
// import RepoData from "./RepoData";
const EachRepo = ({eachrepo}) => {


  

  console.log(eachrepo);
  return (
    
    <div >
        <h2>{eachrepo[0].name}</h2>
        <li className='confirm'>{eachrepo[0].description
}</li>
        
    </div>
  )
}

export default EachRepo