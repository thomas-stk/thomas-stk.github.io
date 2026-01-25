import './App.css';
import ParticlesBackground from './ParticlesBackground';



function App() {


  return (
    <div className='relative min-h-screen w-full'>
      {/* Particles Background */}
      <div className='fixed inset-0 -z-10'>
        <ParticlesBackground />
      </div>
      {/* Main wrapper */}
      <div className='relative flex flex-col gap-5 mb-10 items-center justify-center w-full'>
        {/* First container */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl mainBg text-black p-4 min-h-90 sm:min-h-[300px] sm:p-4 md:p-4 lg:rounded-2xl lg:w-[70%] shadow-xs shadow-gray-200'>
          <div className='flex flex-col items-center sm:flex-row sm:justify-between w-full px-2 sm:px-5'>
            <div className='p-2 sm:p-5 text-2xl sm:text-3xl mb-2 font-semibold'>
              Portfolio
            </div>
            <ul className='flex flex-row flex-wrap justify-center space-x-4 sm:space-x-8 sm:text-xl sm:font-semibold'>
              <li className='p-2 sm:p-5 transition-y-3 hover:-translate-y-2 delay-100 duration-300 ease-in-out hover:text-teal-900'><a href='#Projects'>Projects</a></li>

              <li className='p-2 sm:p-5 transition-y-3 hover:-translate-y-2 delay-100 duration-300 ease-in-out hover:text-teal-900'>About</li>
            </ul>

          </div>
          <div className='mx-auto mt-5 w-[90%] text-2xl sm:mx-20 sm:mt-10 sm:text-4xl '>
            <div className='UnderLine '>
              <h1 className='pb-2 '>Thomas Stokes</h1>
            </div>

          </div>
          <div className='w-full flex justify-center'>
            <p className='mt-5 sm:mx-20 mx-auto w-[90%] text-stone-800 '>Developer based in the UK, interested in web development, software development and Cybersecurity.</p>
          </div>

        </div>
        {/* second container */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto shadow-sm shadow-gray-200 rounded-2xl secondBg secondText p-4 min-h-[600px] sm:min-h-[500px] sm:p-4 md:p-4 lg:rounded-2xl lg:w-[70%] '>
          <div className='flex items-center justify-center '>
            <div className=''>
              <h1 className='border-b-2 font-semibold pb-2 secondText text-2xl sm:text-3xl'>What I can do</h1>
            </div>
          </div>
          <div className='flex flex-col gap-4 sm:flex-row sm:min-h-full'>
            <div className='sm:w-1/2 sm:h-full mt-5 sm:mt-10  '>
              {/* Description */}
              <p className='secondText sm:text-xl sm:mt-3 text-pretty text-center'>As a Web Developer I am able to create websites that are responsive and efficient. I'd like to describe my design style as minimalistic.

                For Front end, I primarily use JavaScript, HTML and CSS, combined with React and TailwindCSS to create a dynamic website and shorten development time.

                For the backend, I use Python, utilising the Flask framework and SQLite to create secure databases.
              </p>
            </div>
            <div className='sm:w-1/2 sm:h-full mt-5 sm:mt-10 '>
              <div className='appBg flex flex-wrap justify-center py-10 gap-5 sm:gap-10 sm:justify-center sm:py-10 shadow-md rounded-2xl'>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='css icon' src='/Icons/css.png'></img>
                  <span className='tooltiptext'>CSS</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='flask icon' src='/Icons/flask1.png'></img>
                  <span className='tooltiptext'>Flask</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='html icon' src='/Icons/html.png'></img>
                  <span className='tooltiptext'>HTML</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='jinja icon' src='/Icons/jinja1.png'></img>
                  <span className='tooltiptext'>Jinja</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='JavaScript icon' src='/Icons/js.png'></img>
                  <span className='tooltiptext'>JavaScript</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img alt='Python icon' src='/Icons/python.png'></img>
                  <span className='tooltiptext'>Python</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src='/Icons/react.png' alt='React icon'></img>
                  <span className='tooltiptext'>React</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src='/Icons/sqlite.png' alt='sqlite icon'></img>
                  <span className='tooltiptext'>SQLite</span>
                </div>
                <div className='w-[15%] tooltip transition delay-100 duration-300 ease-in-out hover:-translate-y-3'>
                  <img src='/Icons/tailwind.png' alt='TailwindCSS icon'></img>
                  <span className='tooltiptext'>TailwindCSS</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Projects */}

        {/* Wrapping div */}
        <div className='flex flex-col sm:flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 w-[95%] lg:w-[70%] mx-auto' id='Projects'>
          {/* Hyper Text Project */}
          <div className='flex flex-col mt-6 w-3/4 mx-auto md:w-full rounded-2xl projectBg text-white p-4 min-h-[400px] md:min-h-[300px] sm:p-4 md:p-4 lg:rounded-2xl flex-1 shadow-sm shadow-black transition delay-100 duration-300 ease-in-out hover:scale-102'>
            <div className='flex flex-col xl:flex-row justify-center items-center md:items-start gap-5 w-full px-4 md:gap-10 md:w-full'>
              <div className='md:w-full md:mx-auto md:justify-center md:items-center md:mt-5'>
                <img src='/Icons/hypertext.png' alt='HyperText Project' className='w-full lg:aspect-video object-contain bg-black/50 rounded-md outline outline-offset-1 outline-bg-white shadow-md'></img>
              </div>
              <div className='flex flex-col w-full justify-center items-center text-center md:w-full md:justify-center md:items-center md:text-center md:content-start secondText'>
                <h2 className='sm:text-2xl text-xl font-bold underline underline-offset-8'>Hyper Text Project</h2>
                <p className='sm:text-xl text-lg font-normal mt-3 md:mt-5 '>In this project, I created a web story game where the user's choices affect the game flow and the outcome of the game. I also implemented a turn based combat system for this game.
                </p>
              </div>
            </div>
          </div>

          {/* VLE Project */}
          <div className='flex flex-col mt-6 w-3/4 mx-auto md:w-full rounded-2xl projectBg text-white p-4 min-h-[400px] md:min-h-[300px] sm:p-4 md:p-4 lg:rounded-2xl flex-1 shadow-sm shadow-black transition delay-100 duration-300 ease-in-out hover:scale-102'>
            <div className='flex flex-col xl:flex-row justify-center items-center md:items-start gap-5 w-full px-4 md:gap-10 md:w-full'>
              <div className='md:w-full md:mx-auto md:justify-center md:items-center md:mt-5'>
                <img src='/Icons/vle.png' alt='Virtual Learning Environment Project' className='w-full lg:aspect-video object-contain bg-black/50 rounded-md outline outline-offset-1 outline-bg-white shadow-md'></img>
              </div>
              <div className='flex flex-col w-full justify-center items-center text-center md:w-full md:justify-center md:items-center md:text-center md:content-start secondText'>
                <h2 className='sm:text-2xl text-xl font-bold underline underline-offset-8'>VLE Project</h2>
                <p className='sm:text-xl text-lg font-normal mt-3 md:mt-5 '>In this project, I created a virtual learning environment where users such as Students and Teachers view information about their courses, attendance and manage their courses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section for mobile*/}
        <div className='flex sm:hidden flex-col mt-6 w-[95%] max-w-full mx-auto shadow-sm shadow-gray-200 rounded-2xl secondBg secondText p-4 min-h-[600px] sm:min-h-[500px] sm:p-4 md:p-4 lg:rounded-2xl lg:w-[70%]'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-row '>
              <h1 className='border-b-2 flex items-center gap-2 font-semibold pb-2 secondText text-2xl sm:text-3xl'>About</h1>
            </div>

            <p className='sm:text-xl text-lg font-normal mt-3 md:mt-5 '>I am a student currently studying T-Level Digital Production, Design and Development.<br /><br />
              I'm enjoying my journey in web development, creating functional and responsive interfaces. I hope to continue my journey in web developement and integrate into software and app development, primarily in backend development.<br /><br />
              Beyond web and software development, I'm also interested in cybersecurity. Specifically, malware analysis and reverse engineering.<br /><br />
              Outside of coding, I enjoy going to the gym, tracking my food and progress along with it.</p>
          </div>
        </div>

        {/* About Section for desktop*/}
        <div className='hidden md:flex md:flex-row md:justify-evenly md:w-1/2 md:mx-auto md:gap-20'>

          {/* Profile picture section */}
          <div>
            <img src='/favicon-96x96.png' alt='Profile picture' className='md:w-full'></img>
          </div>


          {/* Text section */}
          <div className='flex flex-col items-center secondBg secondText md:mx-auto  md:p-4 md:min-h-1/2 md:rounded-2xl'>
            <div className='flex flex-col items-center'>
              <h1 className='border-b-2 flex items-center gap-2 font-semibold pb-2 secondText text-2xl md:text-3xl'>About</h1>
              <p className='md:text-xl text-lg font-normal mt-3 md:mt-5 '>I am a student currently studying T-Level Digital Production, Design and Development.<br /><br />
                I'm enjoying my journey in web development, creating functional and responsive interfaces. I hope to continue my journey in web developement and integrate into software and app development, primarily in backend development.<br /><br />
                Beyond web and software development, I'm also interested in cybersecurity. Specifically, malware analysis and reverse engineering.<br /><br />
                Outside of coding, I enjoy going to the gym, tracking my food and progress along with it.</p>
            </div>

          </div>



        </div>

      </div>
    </div>
  );
}

export default App;
