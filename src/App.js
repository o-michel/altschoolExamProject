// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import ApiData from "./Component/ApiData "
import axios from 'axios'
import RepoData from './Component/RepoData';
import EachRepo from './Component/EachRepo';
import Pagination from './Component/Pagination';

import PageNotFound from "./Component/PageNotFound";
import ErrorBoundary from "./Component/ErrorBoundary";

function App() {


  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  
  
useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true); 
    const res = await axios.get('https://api.github.com/users/o-michel/repos');
    setRepoData(res.data);
    setLoading(false); 
    
  }
  fetchPosts();
  
}, [])
// console.log(repoData);

  //   const response =await res.data
  // let element = response.map(res=>
  //     <ul key={res.id}>
  //         <li className='repoList' onClick={()=> setClickedRepo(console.log("yaaga"))}>{res.name}</li>
         
  //         {clickedRepo}
  //         <br/>
  //         <hr/>
  //         <br/>
  //         </ul>
  // )
  
 
  
  

  

  // get current post 
  const indexOfLastPost = currentpage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repoData.slice(indexOfFirstPost, indexOfLastPost); 

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="App">
      
      <Router>
        <nav>
          {/* <Link to="/">Home</Link> */}
          <Link to="repoData">My Portfolio</Link>
        </nav>
        <Routes>
          {/* <Route path="/" element={ <ErrorBoundary><Homes /> </ErrorBoundary>} /> */}
          
          <Route className='nastedContainer' path="/repoData"  element={ <ErrorBoundary><RepoData repoData={currentPosts} loading={loading} /></ErrorBoundary>}>
          
            <Route   path="eachRepo" element={<ErrorBoundary><EachRepo /> </ErrorBoundary>} />
          

          </Route>
         
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
     <Pagination postsPerPage={postsPerPage} totalPosts={repoData.length} paginate={paginate} />
    </div>
  );
}
 
export default App;


