import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sums-logo" className='w-28 object-contain'/>
        <div className='button-container'>
          <button
            type='button'
            onClick={() => window.open('https://github.com/Cebonkosi')}  
            className='black_btn'
          >
            Github
          </button>
          <button
            type='button'
            onClick={() => window.open('https://www.linkedin.com/in/cebolenkosi-gumpo-41b14523b/')}  
            className='blue_btn'
          >
            LinkedIn
          </button>
        </div>
      </nav>

      <h1 className='head_text'>Write Article Summaries Using <br className='max-md:hidden'/> <span className=' orange_gradient'>Open-AI</span></h1>
      <h2 className='desc'>Meet Summarizelt, your ultimate solution for cutting through the noise and getting straight to the point! Save time, boost productivity, and stay informed without the overwhelm.</h2>

    </header>
  )
}

export default Hero