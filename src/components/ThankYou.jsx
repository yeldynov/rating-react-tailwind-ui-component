import ThankYouImg from '/src/assets/illustration-thank-you.svg';

const ThankYou = ({ rating }) => {
  return (
    <div className='w-11/12 mobile:w-1/4 bg-medium-dark-blue p-8 flex flex-col items-center rounded-3xl gap-5'>
      <img className='w-[150px]' src={ThankYouImg} alt='thank you img' />
      <h2 className='text-orange bg-gray-800 px-3 py-1 rounded-3xl'>
        You selected {rating} out of 5
      </h2>
      <h1 className='text-3xl font-bold text-white'>Thank You!</h1>
      <p className='text-light-gray text-center'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
