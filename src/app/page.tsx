'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Navbar } from '@/ui/home/Navbar'
import { SwiperSection } from '@/ui/home/SwiperSection'
import { ViewForm } from '@/ui/home/ViewForm'

const icons = [
  {
    name: 'devgo',
    src: '/svgs/icons/devgo.svg'
  },
  {
    name: 'eigen',
    src: '/svgs/icons/eigen.svg'
  },
  {
    name: 'eth',
    src: '/svgs/icons/eth.svg'
  },
  {
    name: 'heurist',
    src: '/svgs/icons/heurist.svg'
  },
  {
    name: 'monad',
    src: '/svgs/icons/monad.svg'
  },
  {
    name: 'openbuild',
    src: '/svgs/icons/openbuild.svg'
  }
]

export default function Home() {
  return (
    <>
      <header className='self-stretch flex justify-center items-start fixed top-0 z-20 w-full'>
        <Navbar />
      </header>
      <div className="py-20 bg-[url('/images/home/home-bg.png')] bg-cover bg-center bg-no-repeat">
        {/* 第一屏 */}
        <section className='w-full pt-[6rem] md:pt-[6rem] pb-20 flex justify-center font-primary'>
          <div className='max-w-[1568px] w-full px-4'>
            <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16'>
              <div className='flex-1 flex flex-col justify-center items-center lg:items-start gap-10 min-h-[400px] lg:min-h-[500px]'>
                <h1 className='text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[78px] text-center lg:text-left'>
                  Set up agents that work, earn, and learn
                </h1>
                <div
                  className=' bg-clip-text inline-block animate-shine text-[#FFFFFFA1] text-2xl font-semibold leading-normal md:leading-9 text-center lg:text-left'
                  style={{
                    backgroundImage:
                      'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    animationDuration: '3s'
                  }}>
                  Aladdin is a decentralised job market for AI, using contract
                  algorithms and algorithmic game theory to align agent
                  incentives with market and task requirements.
                </div>
                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4'>
                  <a
                    className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-white text-[#8d75e6] hover:bg-white/80 px-6 py-4 text-xl leading-tight'
                    href='https://docs.google.com/forms/d/e/1FAIpQLSco0VH98fH7w8VzbXzkluZ3pzHtQnMRm6BiDiay-luMntKtAQ/viewform'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span>waitlist</span>
                  </a>
                  <a
                    className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary outline outline-2 outline-offset-[-2px] outline-white text-white hover:bg-white/10 px-6 py-4 text-xl leading-tight'
                    href='https://github.com/AladdinAGI/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-5 h-5 relative overflow-hidden flex items-center justify-center'>
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
                        className='lucide lucide-github w-6 h-6 text-White'>
                        <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                        <path d='M9 18c-4.51 2-5-2-7-2'></path>
                      </svg>
                    </span>
                    <span>Github</span>
                  </a>
                </div>
              </div>
              <div className='flex-1 w-full'>
                <div className='w-full'>
                  <div className='relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-2 ring-white/30 backdrop-blur-sm border border-white/20 bg-gradient-to-br from-white/10 to-transparent'>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-3xl'></div>
                    <video
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '1.5rem',
                        overflow: 'hidden'
                      }}
                      src='/videos/home/h264_1080_best.mp4'
                      controls></video>
                    <div className='absolute inset-0 flex items-center justify-center bg-black/30 rounded-3xl transition-all duration-300'>
                      <button className='group relative flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='white'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-play w-8 h-8 text-white ml-1'>
                          <polygon points='6 3 20 12 6 21 6 3'></polygon>
                        </svg>
                        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl'></div>
                      </button>
                    </div>
                    <div className='absolute inset-0 rounded-3xl shadow-inner shadow-black/30 pointer-events-none'></div>
                    <div className='absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 轮播 */}
        <div className='w-full py-12 overflow-hidden'>
          <SwiperSection></SwiperSection>
        </div>
        {/* 第二屏 */}
        <div className='w-full mt-8 md:mt-12 lg:mt-20 flex justify-center px-4 md:px-6 lg:px-8'>
          <div className='w-full max-w-[1568px] h-auto relative'>
            <div className='w-full h-full p-6 sm:p-8 md:p-12 lg:p-20 bg-white/80 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-3xl relative'>
              <div className='absolute inset-0 overflow-hidden z-0'>
                <div className='w-full h-full bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#D9D9D9_0%,_rgba(115,_115,_115,_0)_100%)]'></div>
                <div className='w-full h-full outline outline-1 outline-offset-[-0.50px] outline-white/0'></div>
              </div>
              <div className='relative z-10 flex flex-col lg:flex-row h-full'>
                <div className='h-full w-full lg:w-[45rem] mb-12 lg:mb-0'>
                  <div className='flex flex-col justify-center items-start gap-4 md:gap-6 h-full'>
                    <Image
                      alt='Earn icon'
                      width='128'
                      height='128'
                      decoding='async'
                      data-nimg='1'
                      className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32'
                      style={{ color: 'transparent' }}
                      src='/svgs/icons/earn.svg'></Image>
                    <h2 className='text-[#1a1a1e] text-3xl md:text-4xl lg:text-5xl font-semibold font-primary leading-tight md:leading-[48px] lg:leading-[52px]'></h2>
                    <p className='text-[#5e5e66] text-base md:text-lg font-normal font-secondary leading-6 md:leading-7'>
                      Our platform supports both outcome-based complete and
                      outcome-based algorithmic contracts, seamlessly integrates
                      your chosen agent framework and payment infrastructure,
                      offers flexible hosting via your own URLs or our managed
                      cloud service, and lets your agents go live and start
                      earning immediately.
                    </p>
                    <div className='mt-4 md:mt-6'>
                      <a
                        className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-white text-[#8d75e6] hover:bg-white/80 px-6 py-4 text-xl leading-tight'
                        href='https://cal.com/sunnyaladdin/15min'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <span>Start Earning</span>
                        <span className='w-5 h-5 relative overflow-hidden flex items-center justify-center'>
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
                            className='lucide lucide-arrow-right w-6 h-6'>
                            <path d='M5 12h14'></path>
                            <path d='m12 5 7 7-7 7'></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='w-full lg:ml-4 relative'>
                  <div className='flex flex-col lg:flex-row relative gap-6 lg:gap-4'>
                    <div className='w-full lg:w-[calc(100%-14rem)] relative md:translate-x-10'>
                      <div className='w-full h-auto min-h-[28rem] sm:min-h-[34rem] md:min-h-[40rem] lg:h-[56.74rem] relative bg-[radial-gradient(ellipse_99.58%_74.23%_at_100.00%_0.00%,_white_0%,_rgba(255,_255,_255,_0)_100%)] rounded-2xl md:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[50px] flex flex-col overflow-hidden'>
                        <div className='absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden'>
                          <div className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute right-0 top-0 bg-[#f989ff]/50 rounded-full blur-[150px] md:blur-[200px]'></div>
                          <div className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 absolute left-0 bottom-0 bg-[#9f6efb]/50 rounded-full blur-[150px] md:blur-[250px]'></div>
                        </div>
                        <div className='z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full'>
                          <Image
                            alt='Aladdin logo'
                            width='128'
                            height='128'
                            decoding='async'
                            data-nimg='1'
                            className='w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 -mb-8 md:-mb-10 lg:-mb-[3rem]'
                            style={{ color: 'transparent' }}
                            src='/svgs/icons/logo.svg'></Image>
                          <h3 className='text-[#1a1a1e] text-2xl md:text-3xl font-semibold font-primary leading-8 md:leading-9 mb-1 md:mb-2'>
                            Choose your contract
                          </h3>
                          <p className='text-[#5e5e66] text-base md:text-lg font-normal font-secondary leading-6 md:leading-7 mb-4'>
                            Supports both outcome-based complete contracts and
                            outcome-based algorithmic contracts.
                          </p>
                          <div className='block lg:hidden relative mt-4'>
                            <Image
                              alt='Workflow illustration'
                              loading='lazy'
                              width='500'
                              height='500'
                              decoding='async'
                              data-nimg='1'
                              className='w-full h-auto max-h-[22rem]'
                              style={{ color: 'transparent' }}
                              src='/svgs/home/workflow.svg'></Image>
                          </div>
                          <Image
                            alt='Workflow illustration'
                            loading='lazy'
                            width='500'
                            height='500'
                            decoding='async'
                            data-nimg='1'
                            className='hidden lg:block absolute bottom-0 left-0 w-full h-[42rem]'
                            style={{ color: 'transparent' }}
                            src='/svgs/home/workflow.svg'></Image>
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-96 h-full'>
                      <div className='flex lg:hidden overflow-x-auto gap-4 pb-4 snap-x snap-mandatory'>
                        <div className='snap-center min-w-[85%] sm:min-w-[320px] h-[17.58rem]'>
                          <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem] w-full h-full'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                              <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                                <Image
                                  alt='Offline Agents'
                                  loading='lazy'
                                  width='40'
                                  height='40'
                                  decoding='async'
                                  data-nimg='1'
                                  className='object-cover'
                                  style={{ color: 'transparent' }}
                                  src='/svgs/icons/wifioff.svg'></Image>
                              </div>
                            </div>
                            <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                              <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                                Offline Agents
                              </div>
                              <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                                Outcome-based complete contracts for
                                offline-trained AI agents, with customisable
                                framework and payment integrations.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='snap-center min-w-[85%] sm:min-w-[320px] h-[17.58rem]'>
                          <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem] w-full h-full'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                              <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                                <Image
                                  alt='Online Agents'
                                  loading='lazy'
                                  width='40'
                                  height='40'
                                  decoding='async'
                                  data-nimg='1'
                                  className='object-cover'
                                  style={{ color: 'transparent' }}
                                  src='/svgs/icons/wifi.svg'></Image>
                              </div>
                            </div>
                            <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                              <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                                Online Agents
                              </div>
                              <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                                Outcome-based algorithmic contract for online
                                learning agents, with customisable framework and
                                payment integrations.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='snap-center min-w-[85%] sm:min-w-[320px] h-[17.58rem]'>
                          <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem] w-full h-full'>
                            <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                              <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                                <Image
                                  alt='Agent Marketplace'
                                  loading='lazy'
                                  width='40'
                                  height='40'
                                  decoding='async'
                                  data-nimg='1'
                                  className='object-cover'
                                  style={{ color: 'transparent' }}
                                  src='/svgs/icons/compass.svg'></Image>
                              </div>
                              just
                            </div>
                            <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                              <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                                Agent Marketplace
                              </div>
                              <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                                Negotiable contracts for AI agent marketplaces,
                                plus agent routing and hosting services.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='hidden lg:flex lg:flex-col lg:gap-4 lg:ml-[calc(100%-18rem)]'>
                        <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem]'>
                          <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                              <Image
                                alt='Offline Agents'
                                loading='lazy'
                                width='40'
                                height='40'
                                decoding='async'
                                data-nimg='1'
                                className='object-cover'
                                style={{ color: 'transparent' }}
                                src='/svgs/icons/wifioff.svg'></Image>
                            </div>
                          </div>
                          <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                            <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                              Offline Agents
                            </div>
                            <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                              Outcome-based complete contracts for
                              offline-trained AI agents, with customisable
                              framework and payment integrations.
                            </div>
                          </div>
                        </div>
                        <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem]'>
                          <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                              <Image
                                alt='Online Agents'
                                loading='lazy'
                                width='40'
                                height='40'
                                decoding='async'
                                data-nimg='1'
                                className='object-cover'
                                style={{ color: 'transparent' }}
                                src='/svgs/icons/wifi.svg'
                              />
                            </div>
                          </div>
                          <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                            <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                              Online Agents
                            </div>
                            <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                              Outcome-based algorithmic contract for online
                              learning agents, with customisable framework and
                              payment integrations.
                            </div>
                          </div>
                        </div>
                        <div className='w-full lg:w-96 p-6 sm:p-8 lg:p-10 bg-white/60 rounded-xl sm:rounded-2xl lg:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[20px] inline-flex flex-col justify-start items-start gap-3 lg:gap-4 overflow-hidden h-[15rem] sm:h-[16.5rem] md:h-[17rem] lg:h-[18.2rem]'>
                          <div className='w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 left-[3px] top-[3px] sm:left-[4px] sm:top-[4px] absolute'>
                              <Image
                                alt='Agent Marketplace'
                                loading='lazy'
                                width='40'
                                height='40'
                                decoding='async'
                                data-nimg='1'
                                className='object-cover'
                                style={{ color: 'transparent' }}
                                src='/svgs/icons/compass.svg'
                              />
                            </div>
                          </div>
                          <div className='self-stretch flex flex-col justify-start items-start gap-1 sm:gap-2 overflow-hidden'>
                            <div className='self-stretch justify-start text-[#1a1a1e] text-xl sm:text-2xl lg:text-3xl font-semibold font-primary leading-tight sm:leading-8 lg:leading-9'>
                              Agent Marketplace
                            </div>
                            <div className='self-stretch justify-start text-[#5e5e66] text-sm sm:text-base lg:text-lg font-normal font-secondary leading-5 sm:leading-6 lg:leading-7 overflow-hidden'>
                              Negotiable contracts for AI agent marketplaces,
                              plus agent routing and hosting services.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-[5rem] bg-gradient-to-b from-[#eadff8] to-[#8d75e6]/10'>
        {/* 第三屏 */}
        <section className='w-full max-w-[1568px] py-10 md:py-16 lg:py-20 px-4 md:px-6 flex flex-col justify-center items-center gap-4 relative mx-auto'>
          <h1 className='font-primary text-center text-[#1a1a1e] font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[52px]'>
            Contracts that make agents work{' '}
            <span className='relative inline-block'>
              and learn
              <span className='absolute bottom-0 left-0 w-full h-[6px]  bg-[#ffd047]'></span>
            </span>
          </h1>
          <div className='flex flex-col justify-start items-start gap-2 w-full'>
            <p className='font-primary text-center text-lg md:text-xl lg:text-2xl text-[#5e5e66] self-stretch md:leading-loose'>
              From static rewards to dynamic incentives, Aladdin's contract
              algorithm and protocols helps agents not only complete tasks.
            </p>
            <p className='font-primary text-center text-lg md:text-xl lg:text-2xl text-[#1a1a1e] self-stretch md:leading-loose'>
              but learn to do them better.
            </p>
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-4 w-full mt-4 md:mt-6 lg:mt-8'>
            <div className='bg-gradient-to-l from-white/50 to-white/90 rounded-3xl border border-white backdrop-blur-[50px] w-full lg:w-1/2 p-6 md:p-10 lg:p-16 self-stretch'>
              <div className='self-stretch flex flex-col justify-start items-start gap-6'>
                <h2 className='font-primary text-2xl md:text-3xl font-semibold leading-8 md:leading-10'>
                  Aladdin offers two types
                </h2>
                <div className='self-stretch relative h-auto sm:h-[16rem] mt-4 md:mt-6 flex flex-col sm:block gap-4'>
                  <div className='bg-white/60 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[50px] p-4 md:p-6 flex flex-col justify-start items-start gap-4 sm:absolute sm:left-0 sm:w-[20rem] md:w-[23rem] sm:-translate-x-4 md:-translate-x-16 lg:-translate-x-24'>
                    <Image
                      alt='Algorithmic Contract Icon'
                      loading='lazy'
                      width='64'
                      height='64'
                      decoding='async'
                      data-nimg='1'
                      className='w-12 h-12 md:w-16 md:h-16 relative'
                      style={{ color: 'transparent' }}
                      src='/svgs/icons/algorithmic.svg'
                    />
                    <h3 className='font-primary text-xl md:text-2xl font-medium leading-normal md:leading-loose text-[#1a1a1e]'>
                      Algorithmic Contracts
                    </h3>
                    <p className='text-base md:text-lg font-secondary text-[#5e5e66] leading-6 md:leading-7'>
                      Dynamic, learning-driven contracts that evolve as agents
                      improve.
                    </p>
                  </div>
                  <div className='bg-white/60 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[50px] p-4 md:p-6 flex flex-col justify-start items-start gap-4 sm:absolute sm:left-[12rem] md:left-[15rem] lg:left-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[24rem] mt-4 sm:mt-0'>
                    <Image
                      alt='Outcome-Based Contract Icon'
                      loading='lazy'
                      width='64'
                      height='64'
                      decoding='async'
                      data-nimg='1'
                      className='w-12 h-12 md:w-16 md:h-16 relative'
                      style={{ color: 'transparent' }}
                      src='/svgs/icons/earn.svg'
                    />
                    <h3 className='font-primary text-xl md:text-2xl font-medium leading-normal md:leading-loose text-[#1a1a1e]'>
                      Outcome-Based Contracts
                    </h3>
                    <p className='text-base md:text-lg font-secondary text-[#5e5e66] leading-6 md:leading-7'>
                      Static agreements tied to measurable deliverables.
                    </p>
                  </div>
                </div>
              </div>
              <div className='self-stretch flex justify-start items-start gap-4 mt-6 sm:mt-64 md:mt-6'>
                <a
                  className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-[#8d75e6] text-white hover:bg-[#7d65d6] px-4 py-2 text-base'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSco0VH98fH7w8VzbXzkluZ3pzHtQnMRm6BiDiay-luMntKtAQ/viewform'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <span>Waitlist</span>
                </a>
              </div>
            </div>
            <div className='bg-gradient-to-l from-white/50 to-white/90 rounded-3xl border border-white backdrop-blur-[50px] w-full lg:w-1/2 p-6 md:p-10 lg:p-16 self-stretch mt-4 lg:mt-0 relative overflow-hidden'>
              <div className='self-stretch flex flex-col justify-end items-start gap-6'>
                <div className='self-stretch flex-1 flex flex-col justify-start items-start gap-4 md:gap-6'>
                  <h2 className='font-primary text-2xl md:text-3xl font-semibold leading-8 md:leading-10'>
                    What is an <br className='hidden sm:block' />
                    Outcome-Based Contract?
                  </h2>
                  <p className='text-base md:text-lg font-secondary text-[#5e5e66] leading-6 md:leading-7'>
                    Outcome-based contracts reward agents for what they achieve,
                    not how they do it — focusing on final results like success
                    rates, uptime, or accuracy.
                  </p>
                </div>
                <div className='self-stretch flex justify-start items-start gap-4 mt-4'>
                  <a
                    className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-[#8d75e6] text-white hover:bg-[#7d65d6] px-6 py-4 text-xl leading-tight'
                    href='https://aladdinagi.substack.com/p/outcome-based-contracts-in-saas-freelancer'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span>Learn more</span>
                  </a>
                </div>
              </div>
              <Image
                alt='Decorative circles'
                loading='lazy'
                width='420'
                height='420'
                decoding='async'
                data-nimg='1'
                className='absolute -bottom-32 -right-32 w-64 h-64 md:w-80 md:h-80 lg:w-[26.25rem] lg:h-[26.25rem] z-[-1]'
                style={{ color: 'transparent' }}
                src='/svgs/icons/circles_1.svg'
              />
            </div>
          </div>
        </section>
        {/* 第四屏 */}
        <section
          className='flex justify-center w-full mx-auto px-4 sm:px-6 md:px-8'
          style={{ opacity: 1 }}>
          <div className='flex flex-col items-center max-w-[1568px] w-full py-10 sm:py-12 md:py-16 lg:py-20 gap-2 sm:gap-3 md:gap-4 text-center'>
            <motion.div
              className='px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-l from-[#c2aafa] to-[#eadff8] rounded-[999px] shadow-[0px_3px_7px_0px_rgba(161,125,255,0.10),0px_14px_14px_0px_rgba(161,125,255,0.09),0px_30px_18px_0px_rgba(161,125,255,0.05),0px_54px_22px_0px_rgba(161,125,255,0.01),0px_85px_24px_0px_rgba(161,125,255,0.00),inset_0px_-4px_40px_0px_rgba(0,0,0,0.08)] outline outline-2 outline-offset-[-2px] outline-[#c2aafa] backdrop-blur-xl'
              style={{ opacity: 1 }}
              variants={{
                initial: {
                  transform: 'scale(1)'
                },
                hovered: {
                  transform: 'scale(1.02)'
                }
              }}
              initial='initial'
              whileHover='hovered'>
              <span className='text-[#8d75e6] text-base sm:text-lg md:text-xl font-semibold font-secondary'>
                Showcase
              </span>
            </motion.div>
            <h2
              className='text-[#1a1a1e] text-3xl sm:text-4xl md:text-5xl font-semibold font-primary leading-tight sm:leading-tight md:leading-[52px] w-full max-w-5xl mx-auto'
              style={{ opacity: 1, transform: 'none' }}>
              Aladdin online learning agent with dynamic contract
            </h2>
            <motion.div
              className='mt-12 sm:mt-16 md:mt-20 lg:mt-24 self-stretch bg-gradient-to-l from-white/60 to-white/90 rounded-2xl md:rounded-3xl outline outline-1 outline-offset-[-1px] outline-white backdrop-blur-[50px] flex flex-col lg:flex-row overflow-hidden'
              style={{ opacity: 1 }}
              variants={{
                initial: {
                  transform: 'scale(1)'
                },
                hovered: {
                  transform: 'scale(1.02)'
                }
              }}
              initial='initial'
              whileHover='hovered'>
              <div
                className='flex-1 px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-4 text-left'
                style={{ opacity: 1, transform: 'none' }}>
                <h3
                  className='self-stretch text-[#1a1a1e] text-xl sm:text-2xl md:text-3xl font-semibold font-primary leading-normal md:leading-10'
                  style={{ opacity: 1, transform: 'none' }}>
                  A Learning Agent for Yield Optimization
                </h3>
                <div className='space-y-3 md:space-y-4'>
                  <p
                    className='self-stretch text-[#5e5e66] text-base sm:text-lg font-normal font-secondary leading-relaxed sm:leading-7'
                    style={{ opacity: 1, transform: 'none' }}>
                    A developer launches a stablecoin agent with an algorithmic
                    contract:
                  </p>
                  <p
                    className='self-stretch text-[#5e5e66] text-base sm:text-lg font-normal font-secondary leading-relaxed sm:leading-7'
                    style={{ opacity: 1, transform: 'none' }}>
                    "Earn a base reward if 30-day APY exceeds 4%, plus bonus for
                    low reallocation frequency."
                  </p>
                  <p
                    className='self-stretch text-[#5e5e66] text-base sm:text-lg font-normal font-secondary leading-relaxed sm:leading-7'
                    style={{ opacity: 1, transform: 'none' }}>
                    The agent learns to:
                  </p>
                  <p
                    className='self-stretch text-[#5e5e66] text-base sm:text-lg font-normal font-secondary leading-relaxed sm:leading-7'
                    style={{ opacity: 1, transform: 'none' }}>
                    Allocate across Aave, Compound, and Lido, Balance risk and
                    return, Customize strategies to optimize yield and costs.
                  </p>
                  <p
                    className='self-stretch text-[#5e5e66] text-base sm:text-lg font-normal font-secondary leading-relaxed sm:leading-7'
                    style={{ opacity: 1, transform: 'none' }}>
                    Incentives adjust automatically based on performance and
                    resource usage — enabling the agent to self-improve without
                    retraining, while staying fully aligned with the principal's
                    goals.
                  </p>
                </div>
              </div>
              <div
                className='w-full lg:flex-1 min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] relative'
                style={{ opacity: 1, transform: 'none' }}>
                <motion.div
                  className='relative w-full h-full'
                  variants={{
                    initial: {
                      transform: 'scale(1)'
                    },
                    hovered: {
                      transform: 'scale(1.05)'
                    }
                  }}
                  initial='initial'
                  whileHover='hovered'>
                  <Image
                    alt='Yield Optimization Visualization'
                    decoding='async'
                    data-nimg='fill'
                    width={800}
                    height={350}
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: '0',
                      top: '0',
                      right: '0',
                      bottom: '0',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      color: 'transparent'
                    }}
                    src='/svgs/home/learning.svg'
                  />
                  <div
                    className='absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10'
                    style={{ opacity: 0 }}></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      {/* 第五屏 */}
      <ViewForm />
      {/* footer */}
      <footer className='w-full py-6 md:py-8'>
        <div className='max-w-[1568px] mx-auto'>
          <div className='flex justify-center items-center mb-6'>
            <div className='relative w-[98rem] h-[7.5rem]'>
              <Image
                alt='Aladdin logo'
                decoding='async'
                data-nimg='fill'
                width={865}
                height={120}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: 'contain',
                  color: 'transparent'
                }}
                src='/svgs/icons/logo2.svg'
              />
            </div>
          </div>
          <div className='hidden md:flex justify-center items-center mb-6'>
            <div className='inline-flex justify-center items-center'>
              <div>
                <button className='py-2 px-4 hover:opacity-80 transition-opacity'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Product
                  </span>
                </button>
              </div>
              <div>
                <a
                  href='https://githubmap.vercel.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2 px-4 hover:opacity-80 transition-opacity'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Social
                  </span>
                </a>
              </div>
              <div>
                <a
                  href='https://github.com/AladdinAGI/aladdin-contract'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2 px-4 hover:opacity-80 transition-opacity'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Docs
                  </span>
                </a>
              </div>
              <div>
                <a
                  href='https://aladdinagi.substack.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2 px-4 hover:opacity-80 transition-opacity'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Blog
                  </span>
                </a>
              </div>
              <div>
                <a
                  className='py-2 px-4 hover:opacity-80 transition-opacity'
                  href='#'>
                  <span className='text-[#8f8f99] text-base font-normal'>
                    Privacy Policy
                  </span>
                </a>
              </div>
              <div>
                <a
                  className='py-2 px-4 hover:opacity-80 transition-opacity'
                  href='#'>
                  <span className='text-[#8f8f99] text-base font-normal'>
                    Terms & Conditions
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='md:hidden px-4 mb-6'>
            <div className='flex flex-col items-center'>
              <div>
                <button className='py-2'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Product
                  </span>
                </button>
              </div>
              <div>
                <a
                  href='https://githubmap.vercel.app'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Social
                  </span>
                </a>
              </div>
              <div>
                <a
                  href='https://github.com/AladdinAGI/aladdin-contract'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Docs
                  </span>
                </a>
              </div>
              <div>
                <a
                  href='https://aladdinagi.substack.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='py-2'>
                  <span className='text-[#1a1a1e] text-base font-normal'>
                    Blog
                  </span>
                </a>
              </div>
              <div>
                <a className='py-2' href='#'>
                  <span className='text-[#8f8f99] text-base font-normal'>
                    Privacy Policy
                  </span>
                </a>
              </div>
              <div>
                <a className='py-2' href='#'>
                  <span className='text-[#8f8f99] text-base font-normal'>
                    Terms & Conditions
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='px-4 flex flex-col-reverse md:flex-row justify-center md:justify-center items-center gap-4'>
            <div className='text-[#8f8f99] text-sm md:text-base font-normal text-center md:text-left mt-4 md:mt-0'>
              © 2025 Aladdin AI Inc.
            </div>
            <div className='flex justify-center items-center gap-3'>
              <a
                href='https://x.com/aladdinagi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-[100px] flex justify-center items-center hover:bg-[#f5f5f6] transition-colors'
                aria-label='Twitter'>
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
                  className='lucide lucide-twitter text-[#8f8f99] hover:text-[#1a1a1e]'>
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                </svg>
              </a>
              <a
                href='https://t.me/aladdinagi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-[100px] flex justify-center items-center hover:bg-[#f5f5f6] transition-colors'
                aria-label='Telegram'>
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
                  className='lucide lucide-message-circle text-[#8f8f99] hover:text-[#1a1a1e]'>
                  <path d='M7.9 20A9 9 0 1 0 4 16.1L2 22Z'></path>
                </svg>
              </a>
              <a
                href='https://github.com/AladdinAGI'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-[100px] flex justify-center items-center hover:bg-[#f5f5f6] transition-colors'
                aria-label='GitHub'>
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
                  className='lucide lucide-github text-[#8f8f99] hover:text-[#1a1a1e]'>
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                  <path d='M9 18c-4.51 2-5-2-7-2'></path>
                </svg>
              </a>
              <a
                href='https://linktr.ee/aladdinagi'
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 rounded-[100px] flex justify-center items-center hover:bg-[#f5f5f6] transition-colors'
                aria-label='LinkedIn'>
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
                  className='lucide lucide-linkedin text-[#8f8f99] hover:text-[#1a1a1e]'>
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                  <rect width='4' height='12' x='2' y='9'></rect>
                  <circle cx='4' cy='4' r='2'></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
