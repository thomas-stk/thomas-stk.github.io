import './App.css';
import LogoLoop from './component/LogoLoop';
import SimpleLogoScroll from './component/SimpleLogoScroll';
import { useState, useEffect } from 'react';

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="white" />
  </svg>
);

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    ['Skills', 'Projects', 'About'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div className='relative min-h-screen w-full appBg'>
      <a href='#main-content' className='skip-link'>Skip to main content</a>
      {/* Main wrapper */}
      <div id='main-content' className='relative flex flex-col gap-5 mb-10 items-center justify-center w-full'>
        {/* Hero Section */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl mainBg p-6 sm:p-8 md:p-10 lg:rounded-2xl lg:w-[70%] shadow-premium fade-in-up'>
          {/* Navigation */}
          <nav className='flex flex-col items-center sm:flex-row sm:justify-between w-full mb-8 sm:mb-12' aria-label='Main navigation'>
            <div className='p-2 sm:p-0 mb-4 sm:mb-0'>
              <span className='font-display font-bold text-[clamp(1.25rem,2vw+0.25rem,1.625rem)] tracking-[-0.01em] text-brand-accent'>TS</span>
            </div>
            <ul className='flex flex-row flex-wrap justify-center gap-2 sm:gap-6'>
              <li>
                <a href='#Skills' className={`nav-link block px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold transition-smooth hover:text-brand-accent ${activeSection === 'Skills' ? 'text-brand-accent nav-link-active' : 'text-white'}`}>
                  Skills
                </a>
              </li>
              <li>
                <a href='#Projects' className={`nav-link block px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold transition-smooth hover:text-brand-accent ${activeSection === 'Projects' ? 'text-brand-accent nav-link-active' : 'text-white'}`}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#About' className={`nav-link block px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold transition-smooth hover:text-brand-accent ${activeSection === 'About' ? 'text-brand-accent nav-link-active' : 'text-white'}`}>
                  About
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero Content */}
          <div className='mx-auto mt-4 sm:mt-8 w-full max-w-4xl text-center fade-in-up-delay-1'>
            <h1 className='font-display font-bold text-[clamp(2.5rem,7vw+0.5rem,4.75rem)] leading-[1.05] tracking-[-0.025em] text-white text-balance mb-4 sm:mb-6'>
              Thomas Stokes
            </h1>
            <p className='font-display font-semibold text-[clamp(1.125rem,2vw+0.25rem,1.625rem)] leading-snug tracking-[-0.01em] text-white/75 mb-4 sm:mb-6'>
              Full-Stack Developer
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4'>
              React, TypeScript and Python developer. </p>

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
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto rounded-2xl glass-card p-6 sm:p-8 md:p-10 lg:rounded-2xl lg:w-[70%] shadow-premium' id='Skills'>
          <div className='flex items-center justify-center mb-8 reveal'>
            <h2 className='font-display font-bold text-[clamp(1.5rem,2.5vw+0.75rem,2.25rem)] leading-[1.1] tracking-[-0.015em] text-white text-balance pb-3'>
              What I Build
            </h2>
          </div>

          <div className='flex flex-col align-center justify-center items-center gap-8'>
            {/* Description */}
            <div className='w-full max-w-3xl'>
              <div className='pb-6 reveal reveal-delay-1'>
                <h3 className='font-display font-semibold text-[clamp(1.125rem,1.5vw+0.5rem,1.375rem)] leading-snug text-white/90 mb-3'>Frontend Development</h3>
                <p className='text-gray-200 text-sm sm:text-base leading-relaxed'>
                  I use React, TypeScript, and Next.js alongside HTML, CSS, and TailwindCSS to build dynamic websites and interfaces. I also use tools like Claude Code to help nail the interactive and visual side of things.
                </p>
              </div>

              <div className='pt-6 border-t border-white/10 reveal reveal-delay-2'>
                <h3 className='font-display font-semibold text-[clamp(1.125rem,1.5vw+0.5rem,1.375rem)] leading-snug text-white/90 mb-3'>Backend Development</h3>
                <p className='text-gray-200 text-sm sm:text-base leading-relaxed'>
                  I use Python with Flask, and SQLite for databases. I'm currently learning FastAPI and Docker to enhance my backend development skills.
                </p>
              </div>
            </div>

            {/* Logo Scroll */}
            <div className="w-full mt-6">
              {isMobile ? (
                <SimpleLogoScroll
                  logos={[
                    { src: '/Icons/css.png', alt: 'CSS', title: 'CSS' },
                    { src: '/Icons/flask1.png', alt: 'Flask', title: 'Flask' },
                    { src: '/Icons/html.png', alt: 'HTML', title: 'HTML' },
                    { src: '/Icons/jinja1.png', alt: 'Jinja', title: 'Jinja' },
                    { src: '/Icons/js.png', alt: 'JavaScript', title: 'JavaScript' },
                    { src: '/Icons/nextjs.png', alt: 'Next.js', title: 'Next.js' },
                    { src: '/Icons/python.png', alt: 'Python', title: 'Python' },
                    { src: '/Icons/react.png', alt: 'React', title: 'React' },
                    { src: '/Icons/sqlite.png', alt: 'SQLite', title: 'SQLite' },
                    { src: '/Icons/tailwind.png', alt: 'TailwindCSS', title: 'TailwindCSS' },
                    { src: '/Icons/TS.png', alt: 'TypeScript', title: 'TypeScript' },
                    { src: '/Icons/Claude.png', alt: 'Claude', title: 'Claude' },
                    { src: '/Icons/fastapi.png', alt: 'FastAPI', title: 'FastAPI' },
                    { src: '/Icons/docker.png', alt: 'Docker', title: 'Docker' }
                  ]}
                />
              ) : (
                <LogoLoop
                  logos={[
                    { src: '/Icons/css.png', alt: 'CSS', title: 'CSS' },
                    { src: '/Icons/flask1.png', alt: 'Flask', title: 'Flask' },
                    { src: '/Icons/html.png', alt: 'HTML', title: 'HTML' },
                    { src: '/Icons/jinja1.png', alt: 'Jinja', title: 'Jinja' },
                    { src: '/Icons/js.png', alt: 'JavaScript', title: 'JavaScript' },
                    { src: '/Icons/nextjs.png', alt: 'Next.js', title: 'Next.js' },
                    { src: '/Icons/python.png', alt: 'Python', title: 'Python' },
                    { src: '/Icons/react.png', alt: 'React', title: 'React' },
                    { src: '/Icons/sqlite.png', alt: 'SQLite', title: 'SQLite' },
                    { src: '/Icons/tailwind.png', alt: 'TailwindCSS', title: 'TailwindCSS' },
                    { src: '/Icons/TS.png', alt: 'TypeScript', title: 'TypeScript' },
                    { src: '/Icons/Claude.png', alt: 'Claude', title: 'Claude' },
                    { src: '/Icons/fastapi.png', alt: 'FastAPI', title: 'FastAPI' },
                    { src: '/Icons/docker.png', alt: 'Docker', title: 'Docker' }
                  ]}
                  speed={logoSize.speed}
                  direction="left"
                  logoHeight={logoSize.height}
                  gap={logoSize.gap}
                  pauseOnHover={true}
                  scaleOnHover={false}
                  fadeOut={logoSize.fadeOut}
                  fadeOutColor="oklch(0.17 0.009 215)"
                  className="mx-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className='flex flex-col mt-6 w-[95%] max-w-full mx-auto lg:w-[85%]' id='Projects'>
          <div className='flex items-center justify-center mb-8 reveal'>
            <h2 className='font-display font-bold text-[clamp(1.5rem,2.5vw+0.75rem,2.25rem)] leading-[1.1] tracking-[-0.015em] text-white text-balance pb-3'>
              Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {/* HyperText Project */}
            <div className='flex flex-col w-full rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow reveal'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/hypertext.png'
                    alt='Screenshot of HyperText Project'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                    loading='lazy'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-display font-bold text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] leading-snug tracking-[-0.01em] text-white'>HyperText Project</h3>
                      <span className='text-xs text-gray-400 mt-0.5'>2025</span>
                    </div>
                    <a
                      href='https://github.com/thomas-stk/HyperText-Game'
                      aria-label="View HyperText Project source code on GitHub"
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <GitHubIcon />
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    A web story game where the player's choices drive the narrative and outcome. Includes a turn-based combat system built with Flask and Jinja templating.
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
            <div className='flex flex-col w-full rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow reveal reveal-delay-1'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/vle.png'
                    alt='Screenshot of Virtual Learning Environment Project'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                    loading='lazy'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-display font-bold text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] leading-snug tracking-[-0.01em] text-white'>VLE Project</h3>
                      <span className='text-xs text-gray-400 mt-0.5'>2025</span>
                    </div>
                    <a
                      href='https://github.com/thomas-stk/Database-project-VLE-React-App'
                      aria-label="View VLE Project source code on GitHub"
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <GitHubIcon />
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    A virtual learning environment for students and teachers to view course information, track attendance, and manage course content. Built with a React front-end and a Flask/SQLite back-end.
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

            {/* Threat-intel Project */}
            <div className='flex flex-col w-full rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow reveal reveal-delay-2'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/threat-intel.png'
                    alt='Screenshot of Threat-intel Project'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                    loading='lazy'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-display font-bold text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] leading-snug tracking-[-0.01em] text-white'>Threat-intel</h3>
                      <span className='text-xs text-gray-400 mt-0.5'>2026</span>
                    </div>
                    <a
                      href='https://github.com/thomas-stk/threat-intel'
                      aria-label='View Threat-intel source code on GitHub'
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <GitHubIcon />
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    A single-page threat intelligence tool that queries AbuseIPDB and VirusTotal in parallel to assess whether an IP address or URL is malicious.
                  </p>

                  {/* Technology Badges */}
                  <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='tech-badge'>React</span>
                    <span className='tech-badge'>TypeScript</span>
                    <span className='tech-badge'>Python</span>
                    <span className='tech-badge'>FastAPI</span>
                    <span className='tech-badge'>Docker</span>
                    <span className='tech-badge'>Nginx</span>
                    <span className='tech-badge'>Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UpCheck Project */}
            <div className='flex flex-col w-full rounded-2xl projectBg p-6 shadow-premium-hover hover-lift transition-smooth-slow reveal reveal-delay-3'>
              <div className='flex flex-col gap-6'>
                {/* Project Image */}
                <div className='image-overlay rounded-xl overflow-hidden'>
                  <img
                    src='/Icons/upcheck.png'
                    alt='Screenshot of UpCheck desktop app'
                    className='w-full aspect-video object-cover bg-black/50 rounded-xl'
                    loading='lazy'
                  />
                </div>

                {/* Project Info */}
                <div className='flex flex-col gap-4'>
                  {/* Title and GitHub */}
                  <div className='flex flex-row items-center justify-between border-b border-white/20 pb-3'>
                    <div className='flex flex-col'>
                      <h3 className='font-display font-bold text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] leading-snug tracking-[-0.01em] text-white'>UpCheck</h3>
                      <span className='text-xs text-gray-400 mt-0.5'>2026</span>
                    </div>
                    <a
                      href='https://github.com/thomas-stk/upcheck'
                      aria-label='View UpCheck source code on GitHub'
                      rel='noopener noreferrer'
                      target='_blank'
                      className='social-link w-10 h-10'
                    >
                      <GitHubIcon />
                    </a>
                  </div>

                  {/* Description */}
                  <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
                    A cross-platform desktop app that monitors the real-time status of your services from the system tray. Comes with popular services built in, and lets you add your own custom URLs too.
                  </p>

                  {/* Technology Badges */}
                  <div className='flex flex-wrap gap-2 mt-2'>
                    <span className='tech-badge'>Electron</span>
                    <span className='tech-badge'>React</span>
                    <span className='tech-badge'>TypeScript</span>
                    <span className='tech-badge'>Vite</span>
                    <span className='tech-badge'>Tailwind CSS</span>
                    <span className='tech-badge'>Vitest</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id='About' className='flex flex-col md:flex-row md:justify-center md:items-stretch w-[95%] lg:w-[70%] mx-auto gap-6 mt-6'>
          {/* Profile Card */}
          <div className='flex flex-col items-center glass-card p-6 md:p-8 rounded-2xl shadow-premium w-full md:w-2/5 reveal'>
            <div className='relative mb-4 md:mb-6'>
              <div className='absolute inset-0 rounded-xl blur-xl opacity-20 bg-[oklch(0.78_0.11_215)]'></div>
              <img src='/favicon-96x96.png' alt='Thomas Stokes Avatar' className='relative w-24 h-24 md:w-32 md:h-32 rounded-xl shadow-lg' />
            </div>
            <h3 className='font-display font-bold text-[clamp(1.25rem,2vw+0.5rem,1.625rem)] leading-snug tracking-[-0.01em] text-white mb-1 md:mb-2'>Thomas Stokes</h3>
            <p className='text-gray-300 text-sm mb-4 md:mb-6'>Norwich, UK</p>
            <div className='flex flex-row items-center gap-4'>
              <a href='https://github.com/thomas-stk' aria-label="Visit Thomas Stokes' GitHub profile" rel='noopener noreferrer' target='_blank' className='social-link'>
                <GitHubIcon />
              </a>
              <a href="mailto:thomas.stk.7@gmail.com" aria-label="Email Thomas Stokes" rel='noopener noreferrer' target='_blank' className='social-link'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/thomas-stokes-912b043a8/" aria-label="Visit Thomas Stokes' LinkedIn profile" rel='noopener noreferrer' target='_blank' className='social-link'>
                <img src="/InBug-White.png" alt="LinkedIn" width="20" height="20" />
              </a>
            </div>
          </div>

          {/* About Content Card */}
          <div className='flex flex-col glass-card p-6 md:p-8 rounded-2xl shadow-premium w-full md:w-3/5 reveal reveal-delay-1'>
            <h2 className='font-display font-bold text-[clamp(1.5rem,2.5vw+0.75rem,2.25rem)] leading-[1.1] tracking-[-0.015em] text-white text-balance mb-4 md:mb-6'>About Me</h2>
            <p className='text-gray-200 text-base md:text-lg leading-relaxed max-w-prose'>
              I am a student studying T-Level Digital Production, Design and Development, and currently on a web developer role on my work placement at Surplush where I work with TypeScript and Next.js.
              <br /><br />
              I enjoy building functional and responsive interfaces. Alongside my placement work, I'm learning FastAPI to expand my backend skills beyond Flask.
              <br /><br />
              Beyond web and software development, I'm also interested in cybersecurity, specifically malware analysis and reverse engineering.
              <br /><br />
              Outside of coding, I enjoy going to the gym and tracking my progress along the way.
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
                  © 2026 <span className='font-semibold text-brand-accent'>Thomas Stokes</span>. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div className='flex flex-wrap justify-center gap-6'>
                <a href='#Skills' className='text-gray-300 hover:text-brand-accent transition-smooth text-sm'>Skills</a>
                <a href='#Projects' className='text-gray-300 hover:text-brand-accent transition-smooth text-sm'>Projects</a>
                <a href='#About' className='text-gray-300 hover:text-brand-accent transition-smooth text-sm'>About</a>
                <a href='mailto:thomas.stk.7@gmail.com' className='text-gray-300 hover:text-brand-accent transition-smooth text-sm'>Contact</a>
              </div>

              {/* Back to Top */}
              <a href='#' className='btn-secondary px-4 py-2 text-sm' aria-label='Back to top of page'>
                ↑ Back to top
              </a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
