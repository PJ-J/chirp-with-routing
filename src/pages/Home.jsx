// import pic from '../components/assets/ghibli.jpg'

// const Home = () => {
//     return (
//       <main className='container mt-5'>
//         <img className='mx-auto d-block border shadow' src={pic} alt="" />
//         <div className='row justify-content-center'>
//           <h1 className='text-center mt-2'>Check out this Studio Ghibli stuff!</h1>
          
//         </div>
//         <div className='card text-center shadow my-2'>
//                 <div className='card-body'>
//                   <h4 className='card-title'>Studio Ghibli React Routing Lab</h4>
                  
//                   <p className="card-text">This lab shows off my React routing skills.</p>
                 
//                   <a href='https://www.google.com' className="card-link" target="_blank">Link to info</a>
//                 </div>
//               </div>
//       </main>
//     )
// }

// export default Home;
import pic from '../components/assets/ghibli.jpg'
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "regenerator-runtime/runtime.js";
// import { v4 as uuidv4 } from "uuid";
// import moment from "moment";
// import ChirpCard from "./components/ChirpCard.jsx";


const Home = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chirps, setChirps] = useState([
    // {
    //   id: uuidv4(),
    //   username: "Josh",
    //   message: "This is the chirp body!",
    //   created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    // },
    // {
    //   id: uuidv4(),
    //   username: "Haylee",
    //   message: "Hello!",
    //   created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    // },
    // {
    //   id: uuidv4(),
    //   username: "Garrett",
    //   message: "I'm not mad!",
    //   created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    // },
  ]);

  useEffect(() => {
    async function getChirps() {
      try {
        const res = await fetch('/api/chirps');
        const chirpData = await res.json();
        setChirps(chirpData);
        } catch (error) {
        console.log(error);
      }
    } getChirps();
  }, []);


  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
//   const handleChirpSubmit = (e) => {
//     e.preventDefault();

//     const newChirp = {
//       id: uuidv4(),
//       username: username,
//       message: message,
//       created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
//     };

//     setChirps([...chirps, newChirp]);
//   };

  return (
    <>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 m-3">
            <nav>
              <img
                className="banner"
                src={pic}
                alt="logo for awesome site yay"
              />
              <h1>Ghibli Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form action="/chirp-submit" method="POST">
            <div className="form-group mb-2">
              <input
                name="name"
                type="text"
                className="form-control mb-1"
                placeholder="User ID number"
                aria-label="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <textarea
                name="content"
                className="form-control mb-2"
                              aria-label="With textarea"
                              placeholder="(280 characters max)"
                value={message}
                onChange={handleMessageChange}
                cols="30"
                rows="10"
              ></textarea>
              <input type="submit" value="chirp it!"></input>
              {/* <button className="btn btn-dark" onClick={handleChirpSubmit}>
                Chirp It!
              </button> */}
            </div>
          </form>
          	<section className='row justify-content-center mt-5'>
			{chirps.map(chirp => (
					<div className='col-md-6' key={chirp.id}>
						<div className='card shadow my-2'>
							<div className='card-body'>
								<h4 className='card-title'>{chirp.userid}</h4>

								<p className="card-text">{chirp.content}</p>
								<p className="card-text-muted">{chirp.location}</p>
                <a href={`api/chirps/${chirp.id}`} className='btn btn-primary'>More details</a>
							</div>
						</div>
					</div>
				))}
			</section>
          {/* <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <ChirpCard
                key={chirp.id}
                username={chirp.userid}
                message={chirp.content}
                created={chirp.location}
              />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;