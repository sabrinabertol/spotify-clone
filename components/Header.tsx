'use client';

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft } from 'react-icons/rx';
import { RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className,
}) => {
  const handleLogout = () => {
  }
  const router = useRouter()
  return (

  <div className={twMerge("h-fit bg-gradient-to-fit from-emerald-800 p-6", className)}>
    <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                <RxCaretLeft className="text-white" size={35} onClick={() => router.back()} />
            </button>
            <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
                <RxCaretRight className="text-white" size={35} onClick={() => router.forward()} />
            </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
            <button className="rounded-full bg-black flex p-2 items-center justify-center hover:opacity-75 transition">
                <HiHome className="text-white" size={26} onClick={() => router.push('/')} />
            </button>
            <button className="rounded-full bg-black flex p-2 items-center justify-center hover:opacity-75 transition">
                <BiSearch className="text-white" size={26} onClick={() => router.push('/search')} />
            </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
            <>
                <div>
                    <Button onClick={() => {}} className="bg-transparent text-neutral-300 font-medium">
                        Sign up
                    </Button>
                </div>
                <div>
                    <Button onClick={() => {}} className="bg-white px-6 py-2">
                        Log in
                    </Button>
                </div>
            </>
        </div>
    </div>
    {children}
  </div>
  
  )};

export default Header;
