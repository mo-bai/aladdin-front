'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Web3Provider } from '@/provider/Web3Provider'
import { ConnectKitButton } from 'connectkit'
import { usePathname } from 'next/navigation'

const navItems = [
  {
    label: 'Agents',
    href: '/agent'
  },
  {
    label: 'Jobs',
    href: '/job'
  },
  {
    label: 'Wallet',
    href: '/wallet'
  },
  {
    label: 'Dashboard',
    href: '/dashboard'
  },
  {
    label: 'Bills',
    href: '/bills'
  },
  {
    label: 'DAO',
    href: '/dao'
  }
]

export default function AgentLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  console.log('pathname', pathname)
  return (
    <Web3Provider>
      <div className='w-full min-h-screen bg-gradient-to-b from-[#f5f5f6] to-white'>
        <nav className='fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16 w-full'>
              <Link href='/' className=''>
                <Image
                  alt='Aladdin logo'
                  width={126}
                  height={20}
                  className='w-[70px] sm:w-[84px] md:w-[100px] lg:w-[126px] h-[11px] sm:h-[13px] md:h-[16px] lg:h-[20px] transition-opacity duration-300'
                  style={{ color: 'transparent' }}
                  src='/svgs/icons/logo4.svg'
                  priority
                />
              </Link>
              <div className='flex items-center flex-grow'>
                <div className='hidden md:flex items-center space-x-8 mx-auto px-8 py-2 border border-gray-100 rounded-full'>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`hover:text-[#3e63dd] ${
                        pathname === item.href
                          ? 'text-[#3e63dd]'
                          : 'text-gray-500'
                      }`}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='w-[170px] flex-shrink-0 flex justify-end'>
                <ConnectKitButton />
              </div>
            </div>
          </div>
        </nav>
        <main className='pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
          {children}
        </main>
      </div>
    </Web3Provider>
  )
}
