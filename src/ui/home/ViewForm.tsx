'use client'
import { motion } from 'motion/react'
import Image from 'next/image'

export function ViewForm() {
  return (
    <motion.div
      className='mx-auto px-5 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-20'
      variants={{
        initial: {
          opacity: 0
        },
        visible: {
          opacity: 1
        }
      }}
      whileInView='visible'
      initial='initial'
      viewport={{
        amount: 0.4
      }}>
      <motion.div
        className="bg-[url('/svgs/home/bg3.svg')] bg-cover bg-center bg-no-repeat bg-[#c2aafa] rounded-[20px] md:rounded-[28px] lg:rounded-[32px] outline outline-offset-[-1px] outline-[#8d75e6] overflow-hidden flex justify-center items-center h-auto md:h-[30rem] lg:h-[36.5rem]"
        variants={{
          initial: {
            opacity: 0,
            transform: 'translateY(50px) scale(0.9)'
          },
          visible: {
            opacity: 1,
            transform: 'translateY(0px) scale(1)',
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 0px 0px',
            transition: {
              delayChildren: 0.1
            }
          }
        }}>
        <motion.div
          className='flex flex-col justify-start items-center gap-4 sm:gap-6 md:gap-8 px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 lg:py-32 text-center'
          variants={{
            initial: {
              opacity: 0,
              transform: 'translateY(30px)'
            },
            visible: {
              opacity: 1,
              transform: 'translateY(0px)',
              transition: {
                delayChildren: 0.1
              }
            }
          }}>
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                transform: 'scale(0) rotate(-90deg)'
              },
              visible: {
                opacity: 1,
                transform: 'scale(1) rotate(0deg)',
                transition: {
                  delayChildren: 0.1
                }
              }
            }}>
            <Image
              alt='Aladdin logo'
              width='128'
              height='128'
              decoding='async'
              data-nimg='1'
              className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 -mb-4 sm:-mb-6 md:-mb-10 lg:-mb-[3rem]'
              style={{ color: 'transparent' }}
              src='/svgs/icons/logo.svg'
            />
          </motion.div>
          <motion.h2
            className='text-[#f7f7f8] font-semibold font-primary text-3xl sm:text-4xl md:text-5xl leading-snug md:leading-[52px]'
            variants={{
              initial: {
                opacity: 0,
                transform: 'translateY(20px)'
              },
              visible: {
                opacity: 1,
                transform: 'translateY(0px)',
                transition: {
                  delayChildren: 0.1
                }
              }
            }}>
            Ready to Join the Agent Economy?
          </motion.h2>
          <motion.p
            className='text-white/60 font-medium font-primary text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose max-w-4xl mx-auto'
            variants={{
              initial: {
                opacity: 0,
                transform: 'translateY(20px)'
              },
              visible: {
                opacity: 1,
                transform: 'translateY(0px)',
                transition: {
                  delayChildren: 0.1
                }
              }
            }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Whether you're developing AI agents or looking to leverage them in
            your business, Aladdin provides the infrastructure you need.
          </motion.p>
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                transform: 'translateY(20px) scale(0.9)'
              },
              visible: {
                opacity: 1,
                transform: 'translateY(0px) scale(1)',
                transition: {
                  delayChildren: 0.1
                }
              }
            }}>
            <a
              className='rounded-[999px] flex items-center justify-center gap-1 font-semibold transition-colors duration-200 font-primary bg-white text-[#8d75e6] hover:bg-white/80 px-6 py-4 text-xl leading-tight mt-2 sm:mt-4 md:mt-6'
              href='https://docs.google.com/forms/d/e/1FAIpQLSco0VH98fH7w8VzbXzkluZ3pzHtQnMRm6BiDiay-luMntKtAQ/viewform'
              target='_blank'
              rel='noopener noreferrer'>
              <span>Get Started Now</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
