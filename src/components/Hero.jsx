import Logo from '../assets/logo.svg'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={Logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type='button' className='rounded-md bg-black text-white px-4 py-2' onClick={()=>window.open('https://github.com/farhanf7n/ai_summarizer')}>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>Simplify your reading with Summrize, an opern-source article summarizer that transforms lengthy articles into clear and concise summaries.</h2>
    </header>
  )
}

export default Hero