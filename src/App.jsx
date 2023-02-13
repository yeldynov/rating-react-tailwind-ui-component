import { useState } from 'react';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState();

  return (
    <main className='bg-very-dark-blue min-h-screen flex flex-col justify-center items-center font-overpass'>
      {!submitted ? (
        <Rating
          setSubmitted={setSubmitted}
          setRating={setRating}
          rating={rating}
        />
      ) : (
        <ThankYou rating={rating} />
      )}
    </main>
  );
}

export default App;
