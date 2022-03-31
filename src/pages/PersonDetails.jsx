import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const PeopleDetails = () => {
  const { personid } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
      .then(res => res.json())
      .then(person => setPerson(person))
  }, []);

  return (
    <main className='container'>
      <section className='row justify-content-center mt-5'>

        <div className='col-md-6' key={person?.id}>
          <div className='card shadow my-2'>

            <div className='card-body'>
              <h4 className='card-title'>{person?.name}</h4>
              <p className='card-subtitle text-muted'>Age: {person?.age}</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Gender: {person?.gender}</li>
                <li className="list-group-item">Eye color: {person?.eye_color}</li>

                <li className="list-group-item">Hair Color: {person?.hair_color}</li>
              </ul>
              
              <Link to="/people" className="btn btn-secondary">Go Back</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PeopleDetails;