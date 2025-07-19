'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'

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

export function SwiperSection() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      loop={true}
      speed={2000}
      effect='slide'
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }}>
      {icons.map((icon, index) => (
        <SwiperSlide
          key={`${icon.name}-${index}`}
          className='flex justify-center items-center'>
          <Image
            alt={icon.name}
            loading='lazy'
            width='32'
            height='32'
            decoding='async'
            data-nimg='1'
            className='h-8 w-auto transition-transform duration-300 hover:scale-110'
            style={{ color: 'transparent' }}
            src={icon.src}></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
