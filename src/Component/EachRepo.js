import React from "react";
// import RepoData from "./RepoData";
const EachRepo = ({ eachrepo, backEachRepo }) => {
  console.log(eachrepo);
  return (
    <div>
      <h2>{eachrepo[0].name}</h2>
      <div className="details">
        <li className="confirm"><h4>Description</h4>{eachrepo[0].description}</li>
        <li className="confirm"><h4>Visibility</h4>{eachrepo[0].visibility}</li>
        <li className="confirm"><h4>Language</h4>{eachrepo[0].language}</li>
      </div>

      <nav>
        <button onClick={backEachRepo}>Back</button>
      </nav>
    </div>
  );
};

export default EachRepo;
