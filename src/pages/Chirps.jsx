import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";


const Chirps = () => {
  const [chirps, setChirps] = useState([]);

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

  return (
    <main className='container'>
      <section className='row justify-content-center mt-5'>
        {chirps.map(chirp => (
          <div className='col-md-6' key={chirp.id}>
            <div className='card shadow my-2'>
              <div className='card-body'>
                <h4 className='card-title'>{chirp.userid}</h4>

                <p className="card-text">{chirp.content.substr(0, 75) + "..."}</p>
                <Link to={`/chirps/${chirp.id}`} className='btn btn-primary'>More details</Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>

  )
}

export default Chirps;