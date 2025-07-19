'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <>
      <motion.div
        style={{
          padding: '0.4rem',
          borderRadius: '1.8rem',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 6px 6px, rgba(0, 0, 0, 0.1) 0px 0px 20px',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2) 0s'
        }}
        whileHover={{
          padding: '0.6rem',
          borderRadius: '2rem',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 6px 6px, rgba(0, 0, 0, 0.1) 0px 0px 20px'
        }}
        className='w-full max-w-[1568px] mx-2 sm:mx-4 md:mx-8 lg:mx-11 my-2 sm:my-3 md:my-4 relative overflow-hidden rounded-2xl cursor-pointer'>
        <motion.div
          className='absolute inset-0 z-0 backdrop-blur-sm overflow-hidden'
          style={{
            borderRadius: '1.8rem',
            filter: 'url(#glass-distortion)',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2) 0s'
          }}
          whileHover={{
            borderRadius: '2rem',
            filter: 'url(#glass-distortion)'
          }}
        />
        <motion.div
          className='absolute inset-0 z-10 bg-white/25'
          style={{
            borderRadius: '1.8rem',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2) 0s'
          }}
          whileHover={{
            borderRadius: '2rem'
          }}
        />
        <motion.div
          className='absolute inset-0 z-20 overflow-hidden'
          style={{
            borderRadius: '1.8rem',
            boxShadow:
              'rgba(255, 255, 255, 0.5) 2px 2px 1px 0px inset, rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2) 0s'
          }}
          whileHover={{
            borderRadius: '2rem',
            boxShadow:
              'rgba(255, 255, 255, 0.5) 2px 2px 1px 0px inset, rgba(255, 255, 255, 0.5) -1px -1px 1px 1px inset'
          }}
        />
        <div className='relative z-30 px-3 sm:px-4 md:px-6 lg:px-8 py-2 flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href='/' className=''>
              <Image
                alt='Aladdin logo'
                width={126}
                height={20}
                className='w-[70px] sm:w-[84px] md:w-[100px] lg:w-[126px] h-[11px] sm:h-[13px] md:h-[16px] lg:h-[20px] transition-opacity duration-300'
                style={{ color: 'transparent' }}
                src='/svgs/text-logo.svg'
                priority
              />
            </Link>
          </div>
          <div className='md:hidden'>
            <button className='p-2 transition-colors duration-300 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-menu'>
                <line x1='4' x2='20' y1='12' y2='12'></line>
                <line x1='4' x2='20' y1='6' y2='6'></line>
                <line x1='4' x2='20' y1='18' y2='18'></line>
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex items-center gap-4 lg:gap-8 absolute left-1/2 transform -translate-x-1/2'>
            <motion.div
              className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
              initial='initial'
              whileHover='hovered'>
              <motion.div
                className='absolute inset-0 rounded-xl'
                variants={{
                  hovered: {
                    opacity: 1
                  },
                  initial: {
                    opacity: 0
                  }
                }}
                transition={{ duration: 0.1, ease: 'easeInOut' }}>
                <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                <div
                  className='absolute inset-0 rounded-xl'
                  style={{
                    boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                  }}></div>
              </motion.div>
              <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                Product
              </span>
            </motion.div>
            <Link href={'/agent'}>
              <motion.div
                className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
                initial='initial'
                whileHover='hovered'>
                <motion.div
                  className='absolute inset-0 rounded-xl'
                  variants={{
                    hovered: {
                      opacity: 1
                    },
                    initial: {
                      opacity: 0
                    }
                  }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}>
                  <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                  <div
                    className='absolute inset-0 rounded-xl'
                    style={{
                      boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                </motion.div>
                <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                  Agents
                </span>
              </motion.div>
            </Link>
            <Link href={'/job'}>
              <motion.div
                className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
                initial='initial'
                whileHover='hovered'>
                <motion.div
                  className='absolute inset-0 rounded-xl'
                  variants={{
                    hovered: {
                      opacity: 1
                    },
                    initial: {
                      opacity: 0
                    }
                  }}
                  transition={{ duration: 0.1, ease: 'easeInOut' }}>
                  <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                  <div
                    className='absolute inset-0 rounded-xl'
                    style={{
                      boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                </motion.div>
                <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                  jobs
                </span>
              </motion.div>
            </Link>
            <a
              href='https://githubmap.vercel.app'
              target='_blank'
              rel='noopener noreferrer'>
              <motion.div
                className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
                initial='initial'
                whileHover='hovered'>
                <motion.div
                  variants={{
                    hovered: {
                      opacity: 1
                    },
                    initial: {
                      opacity: 0
                    }
                  }}
                  className='absolute inset-0 rounded-xl'
                  transition={{ duration: 0.1, ease: 'easeInOut' }}>
                  <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                  <div
                    className='absolute inset-0 rounded-xl'
                    style={{
                      boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                </motion.div>
                <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                  Social
                </span>
              </motion.div>
            </a>
            <a
              href='https://github.com/AladdinAGI/aladdin-contract'
              target='_blank'
              rel='noopener noreferrer'>
              <motion.div
                className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
                initial='initial'
                whileHover='hovered'>
                <motion.div
                  variants={{
                    hovered: {
                      opacity: 1
                    },
                    initial: {
                      opacity: 0
                    }
                  }}
                  className='absolute inset-0 rounded-xl'
                  transition={{ duration: 0.1, ease: 'easeInOut' }}>
                  <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                  <div
                    className='absolute inset-0 rounded-xl'
                    style={{
                      boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                </motion.div>
                <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                  Docs
                </span>
              </motion.div>
            </a>
            <a
              href='https://aladdinagi.substack.com'
              target='_blank'
              rel='noopener noreferrer'>
              <motion.div
                className='relative px-3 py-2 rounded-xl cursor-pointer overflow-hidden'
                initial='initial'
                whileHover='hovered'>
                <motion.div
                  variants={{
                    hovered: {
                      opacity: 1
                    },
                    initial: {
                      opacity: 0
                    }
                  }}
                  className='absolute inset-0 rounded-xl'
                  transition={{ duration: 0.1, ease: 'easeInOut' }}>
                  <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-xl'></div>
                  <div
                    className='absolute inset-0 rounded-xl'
                    style={{
                      boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                    }}></div>
                </motion.div>
                <span className='relative z-10 text-base font-semibold transition-colors duration-300 text-white'>
                  Blog
                </span>
              </motion.div>
            </a>
          </nav>
          <div className='hidden md:flex items-center gap-0 lg:gap-1'>
            <a
              href='https://github.com/AladdinAGI/'
              target='_blank'
              rel='noopener noreferrer'
              className='relative px-3 py-2 sm:px-4 rounded-full flex items-center gap-1 overflow-hidden'>
              <div
                className='absolute inset-0 rounded-full'
                style={{ opacity: 0, transition: 'opacity 0.1s ease-in 0s' }}>
                <div className='absolute inset-0 backdrop-blur-sm bg-white/50 rounded-full'></div>
                <div
                  className='absolute inset-0 rounded-full'
                  style={{
                    boxShadow: 'inset -2px -2px 2px rgba(0, 0, 0, 0.1)'
                  }}></div>
              </div>
              <div className='relative z-10 flex items-center gap-1'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-github w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300 text-gray-200'>
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
                <span className='text-sm sm:text-base font-semibold transition-colors duration-300 text-white'>
                  4
                </span>
              </div>
            </a>
            <a
              className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-white text-[#8d75e6] hover:bg-white/80 px-4 py-2 text-base bg-white/50 text-[#0477F7] !py-1'
              href='https://docs.google.com/forms/d/e/1FAIpQLSco0VH98fH7w8VzbXzkluZ3pzHtQnMRm6BiDiay-luMntKtAQ/viewform'
              target='_self'>
              <span>waitlist</span>
            </a>
          </div>
        </div>
      </motion.div>
      <svg className='hidden'>
        <filter
          id='glass-distortion'
          x='0%'
          y='0%'
          width='100%'
          height='100%'
          filterUnits='objectBoundingBox'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.01 0.01'
            numOctaves='1'
            seed='5'
            result='turbulence'></feTurbulence>
          <feComponentTransfer in='turbulence' result='mapped'>
            <feFuncR
              type='gamma'
              amplitude='1'
              exponent='10'
              offset='0.5'></feFuncR>
            <feFuncG
              type='gamma'
              amplitude='0'
              exponent='1'
              offset='0'></feFuncG>
            <feFuncB
              type='gamma'
              amplitude='0'
              exponent='1'
              offset='0.5'></feFuncB>
          </feComponentTransfer>
          <feGaussianBlur
            in='turbulence'
            stdDeviation='3'
            result='softMap'></feGaussianBlur>
          <feSpecularLighting
            in='softMap'
            surfaceScale='5'
            specularConstant='1'
            specularExponent='100'
            lightingColor='white'
            result='specLight'>
            <fePointLight x='-200' y='-200' z='300'></fePointLight>
          </feSpecularLighting>
          <feComposite
            in='specLight'
            operator='arithmetic'
            k1='0'
            k2='1'
            k3='1'
            k4='0'
            result='litImage'></feComposite>
          <feDisplacementMap
            in='SourceGraphic'
            in2='softMap'
            scale='150'
            xChannelSelector='R'
            yChannelSelector='G'></feDisplacementMap>
        </filter>
      </svg>
    </>
  )
}
