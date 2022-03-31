import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const FilmDetails = () => {
  const { filmid } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then(res => res.json())
      .then(film => setFilm(film))
  }, []);

  return (
    <main className='container'>
      <section className='row justify-content-center mt-5'>

        <div className='col-md-6' key={film?.id}>
        
          <div className='card shadow my-2'>
          <img src={film?.movie_banner} className="card-img-top" alt="..." />
            <div className='card-body'>
              <h4 className='card-title'>{film?.title}</h4>
              <p className='card-subtitle text-muted'>{film?.original_title}</p>
              <p className="card-text">{film?.description}</p>
              <Link to="/films" className="btn btn-secondary">Go Back</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FilmDetails;