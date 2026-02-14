import './App.css';
import ParticlesBackground from './ParticlesBackground';
import LogoLoop from './component/LogoLoop';
import SimpleLogoScroll from './component/SimpleLogoScroll';
import { useState, useEffect } from 'react';




function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Responsive logo sizing
  const [logoSize, setLogoSize] = useState({
    height: 40,
    gap: 30,
    speed: 50,
    fadeOut: false
  });

  useEffect(() => {
    const updateLogoSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setLogoSize({
        height: mobile ? 40 : 60,
        gap: mobile ? 30 : 50,
        speed: mobile ? 35 : 50,
        fadeOut: !mobile
      });
    };

    updateLogoSize();
    window.addEventListener('resize', updateLogoSize);
    return () => window.removeEventListener('resize', updateLogoSize);
  }, []);

  return (
    <div className='relative min-h-screen w-full'>
      {/* Particles Background */}
      <div className='fixed inset-0 -z-10'>
        <ParticlesBackground />
      </div>
      {/* Main wrapper */}
      <div className='relative flex flex-col gap-5 mb-10 items-center justify-center w-full'>
        {/* Hero Section */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl mainBg p-6 sm:p-8 md:p-10 lg:rounded-2xl lg:w-[70%] shadow-premium fade-in-up'>
          {/* Navigation */}
          <div className='flex flex-col items-center sm:flex-row sm:justify-between w-full mb-8 sm:mb-12'>
            <div className='p-2 sm:p-0 text-2xl sm:text-3xl mb-4 sm:mb-0 font-bold text-white'>
              <span className='gradient-text-accent'>Portfolio</span>
            </div>
            <ul className='flex flex-row flex-wrap justify-center gap-2 sm:gap-6'>
              <a href='#Skills' className='nav-link'>
                <li className='px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-purple-300'>
                  Skills
                </li>
              </a>
              <a href='#Projects' className='nav-link'>
                <li className='px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-purple-300'>
                  Projects
                </li>
              </a>
              <a href='#About' className='nav-link'>
                <li className='px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-purple-300'>
                  About
                </li>
              </a>
            </ul>
          </div>

          {/* Hero Content */}
          <div className='mx-auto mt-4 sm:mt-8 w-full max-w-4xl text-center fade-in-up-delay-1'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text leading-tight'>
              Thomas Stokes
            </h1>
            <p className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6'>
              Full-Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4'>
              Crafting responsive web experiences and secure applications. Based in the UK, specializing in modern web development and keen interest in cybersecurity.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up-delay-2'>
              <a href='#Projects' className='btn-primary w-full sm:w-auto text-center'>
                View My Work
              </a>
              <a href='mailto:thomas.stk.7@gmail.com' className='btn-secondary w-full sm:w-auto text-center'>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl glass-card p-6 sm:p-8 md:p-10 lg:rounded-2xl lg:w-[70%] shadow-premium fade-in-up' id='Skills'>
          <div className='flex items-center justify-center mb-8'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-accent pb-3'>
              What I Can Do
            </h2>
          </div>

          <div className='flex flex-col align-center justify-center items-center gap-8'>
            {/* Description */}
            <div className='w-full max-w-3xl'>
              <p className='text-white text-base sm:text-lg md:text-xl leading-relaxed text-center'>
                As a <span className='font-semibold text-purple-300'>Web Developer</span>, I create responsive and efficient websites with a minimalistic design philosophy.
              </p>

              <div className='mt-8 space-y-6'>
                <div className='glass-card-light p-5 rounded-xl transition-smooth hover-lift'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 gradient-text-accent'>Frontend Development</h3>
                  <p className='text-gray-200 text-sm sm:text-base leading-relaxed'>
                    I primarily use <span className='font-semibold'>JavaScript, HTML, and CSS</span>, combined with <span className='font-semibold'>React</span> and <span className='font-semibold'>TailwindCSS</span> to create dynamic websites and shorten development time.
                  </p>
                </div>

                <div className='glass-card-light p-5 rounded-xl transition-smooth hover-lift'>
                  <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 gradient-text-accent'>Backend Development</h3>
                  <p className='text-gray-200 text-sm sm:text-base leading-relaxed'>
                    For the backend, I use <span className='font-semibold'>Python</span>, utilizing the <span className='font-semibold'>Flask framework</span> and <span className='font-semibold'>SQLite</span> to create secure databases.
                  </p>
                </div>
              </div>
            </div>

            {/* Logo Scroll */}
            <div className="w-full mt-6">
              {isMobile ? (
                // Lightweight CSS-only animation for mobile
                <SimpleLogoScroll
                  logos={[
                    { src: '/Icons/css.png', alt: 'CSS', title: 'CSS' },
                    { src: '/Icons/flask1.png', alt: 'Flask', title: 'Flask' },
                    { src: '/Icons/html.png', alt: 'HTML', title: 'HTML' },
                    { src: '/Icons/jinja1.png', alt: 'Jinja', title: 'Jinja' },
                    { src: '/Icons/js.png', alt: 'JavaScript', title: 'JavaScript' },
                    { src: '/Icons/python.png', alt: 'Python', title: 'Python' },
                    { src: '/Icons/react.png', alt: 'React', title: 'React' },
                    { src: '/Icons/sqlite.png', alt: 'SQLite', title: 'SQLite' },
                    { src: '/Icons/tailwind.png', alt: 'TailwindCSS', title: 'TailwindCSS' }
                  ]}
                />
              ) : (
                // Full-featured LogoLoop for desktop
                <LogoLoop
                  logos={[
                    { src: '/Icons/css.png', alt: 'CSS', title: 'CSS' },
                    { src: '/Icons/flask1.png', alt: 'Flask', title: 'Flask' },
                    { src: '/Icons/html.png', alt: 'HTML', title: 'HTML' },
                    { src: '/Icons/jinja1.png', alt: 'Jinja', title: 'Jinja' },
                    { src: '/Icons/js.png', alt: 'JavaScript', title: 'JavaScript' },
                    { src: '/Icons/python.png', alt: 'Python', title: 'Python' },
                    { src: '/Icons/react.png', alt: 'React', title: 'React' },
                    { src: '/Icons/sqlite.png', alt: 'SQLite', title: 'SQLite' },
                    { src: '/Icons/tailwind.png', alt: 'TailwindCSS', title: 'TailwindCSS' }
                  ]}
                  speed={logoSize.speed}
                  direction="left"
                  logoHeight={logoSize.height}
                  gap={logoSize.gap}
                  pauseOnHover={true}
                  scaleOnHover={false}
                  fadeOut={logoSize.fadeOut}
                  fadeOutColor="rgba(255, 255, 255, 0)"
                  className="mx-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto lg:w-[70%]' id='Projects'>
          <div className='flex items-center justify-center mb-8'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold gradient-text pb-3'>
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className='flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6'>
            {/* HyperText Project */}
            <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow fade-in-up'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/hypertext.png'
                    alt='Screenshot of HyperText Project'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-white'>HyperText Project</h3>
                    <a
                      href='https://github.com/thomas-stk/HyperText-Game'
                      aria-label="View HyperText Project Source Code on GitHub"
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white" />
                      </svg>
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    In this project, I created a web story game where the user's choices affect the game flow and the outcome of the game. I also implemented a turn-based combat system for this game.
                  </p>

                  {/* Technology Badges */}
                  <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='tech-badge'>Python</span>
                    <span className='tech-badge'>Flask</span>
                    <span className='tech-badge'>Jinja</span>
                    <span className='tech-badge'>HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VLE Project */}
            <div className='flex flex-col w-full md:w-3/4 lg:w-1/2 rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow fade-in-up-delay-1'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/vle.png'
                    alt='Screenshot of Virtual Learning Environment Project'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-white'>VLE Project</h3>
                    <a
                      href='https://github.com/thomas-stk/Database-project-VLE-React-App'
                      aria-label="View VLE Project Source Code on GitHub"
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white" />
                      </svg>
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    In this project, I created a virtual learning environment where users such as Students and Teachers view information about their courses, attendance and manage their courses.
                  </p>

                  {/* Technology Badges */}
                  <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='tech-badge'>React</span>
                    <span className='tech-badge'>Python</span>
                    <span className='tech-badge'>Flask</span>
                    <span className='tech-badge'>SQLite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* About Section - Mobile */}
        <div className='md:hidden flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl glass-card p-6 shadow-premium fade-in-up' id='About'>
          {/* Profile Picture */}
          <div className='flex flex-col items-center mb-6'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50'></div>
              <img src='/favicon-96x96.png' alt='Thomas Stokes Avatar' className='relative w-24 h-24 rounded-xl shadow-lg' />
            </div>
            <h3 className='font-bold text-2xl text-white mt-4 gradient-text'>Thomas Stokes</h3>
            <p className='text-gray-300 text-sm mt-1'>Norwich, UK</p>
          </div>

          {/* Social Links */}
          <div className='flex flex-row items-center justify-center gap-4 mb-6'>
            <a href='https://github.com/thomas-stk' aria-label="Visit Thomas Stokes' GitHub Profile" rel='noopener noreferrer' target='_blank' className='social-link'>
              <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white" />
              </svg>
            </a>
            <a href="mailto:thomas.stk.7@gmail.com" aria-label="Email Thomas Stokes" rel='noopener noreferrer' target='_blank' className='social-link'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/thomas-stokes-912b043a8/" aria-label="Visit Thomas Stokes' LinkedIn Profile" rel='noopener noreferrer' target='_blank' className='social-link'>
              <img src="/InBug-White.png" alt="LinkedIn" width="20" height="20" />
            </a>
          </div>

          {/* About Content */}
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold gradient-text-accent mb-4 text-center'>About Me</h2>
            <p className='text-gray-200 text-base leading-relaxed'>
              I am a student currently studying <span className='font-semibold text-purple-300'>T-Level Digital Production, Design and Development</span>.
              <br /><br />
              I'm enjoying my journey in web development, creating functional and responsive interfaces. I hope to continue my journey in web development and integrate into software and app development, primarily in backend development.
              <br /><br />
              Beyond web and software development, I'm also interested in <span className='font-semibold text-purple-300'>cybersecurity</span>. Specifically, malware analysis and reverse engineering.
              <br /><br />
              Outside of coding, I enjoy going to the gym, tracking my food and progress along with it.
            </p>
          </div>
        </div>




        {/* About Section - Desktop */}
        <div className='hidden md:flex md:flex-row md:justify-center md:items-stretch md:w-[95%] lg:w-[70%] md:mx-auto gap-6 mt-6' id='About'>
          {/* Profile Card */}
          <div className='flex flex-col items-center glass-card p-8 rounded-2xl shadow-premium w-full md:w-2/5 fade-in-up'>
            <div className='relative mb-6'>
              <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50'></div>
              <img src='/favicon-96x96.png' alt='Thomas Stokes Avatar' className='relative w-32 h-32 rounded-xl shadow-lg' />
            </div>
            <h3 className='font-bold text-3xl gradient-text mb-2'>Thomas Stokes</h3>
            <p className='text-gray-300 text-sm mb-6'>Norwich, UK</p>

            {/* Social Links */}
            <div className='flex flex-row items-center gap-4'>
              <a href='https://github.com/thomas-stk' aria-label="Visit Thomas Stokes' GitHub Profile" rel='noopener noreferrer' target='_blank' className='social-link'>
                <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white" />
                </svg>
              </a>
              <a href="mailto:thomas.stk.7@gmail.com" aria-label="Email Thomas Stokes" rel='noopener noreferrer' target='_blank' className='social-link'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thomas-stokes-912b043a8/" aria-label="Visit Thomas Stokes' LinkedIn Profile" rel='noopener noreferrer' target='_blank' className='social-link'>
                <img src="/InBug-White.png" alt="LinkedIn" width="20" height="20" />
              </a>
            </div>
          </div>

          {/* About Content Card */}
          <div className='flex flex-col glass-card p-8 rounded-2xl shadow-premium w-full md:w-3/5 fade-in-up-delay-1'>
            <h2 className='text-3xl font-bold gradient-text-accent mb-6'>About Me</h2>
            <p className='text-gray-200 text-lg leading-relaxed'>
              I am a student currently studying <span className='font-semibold text-purple-300'>T-Level Digital Production, Design and Development</span>.
              <br /><br />
              I'm enjoying my journey in web development, creating functional and responsive interfaces. I hope to continue my journey in web development and integrate into software and app development, primarily in backend development.
              <br /><br />
              Beyond web and software development, I'm also interested in <span className='font-semibold text-purple-300'>cybersecurity</span>. Specifically, malware analysis and reverse engineering.
              <br /><br />
              Outside of coding, I enjoy going to the gym, tracking my food and progress along with it.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className='mt-16 w-full glass-card-dark py-8 px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
              {/* Copyright */}
              <div className='text-center md:text-left'>
                <p className='text-gray-300 text-sm'>
                  © 2026 <span className='font-semibold gradient-text-accent'>Thomas Stokes</span>. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div className='flex flex-wrap justify-center gap-6'>
                <a href='#Skills' className='text-gray-300 hover:text-purple-300 transition-smooth text-sm'>Skills</a>
                <a href='#Projects' className='text-gray-300 hover:text-purple-300 transition-smooth text-sm'>Projects</a>
                <a href='#About' className='text-gray-300 hover:text-purple-300 transition-smooth text-sm'>About</a>
                <a href='mailto:thomas.stk.7@gmail.com' className='text-gray-300 hover:text-purple-300 transition-smooth text-sm'>Contact</a>
              </div>

              {/* Back to Top */}
              <a href='#' className='btn-secondary px-4 py-2 text-sm'>
                ↑ Back to Top
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
