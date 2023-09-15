"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import Image from "next/image";

import Button from "./Button";

import useAuthModal from "@/hooks/UseAuthModal";
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {

  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const player = usePlayer();
  const { user } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    player.reset();
    router.refresh();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div
      className={twMerge(
        "h-fit bg-gradient-to-b from-teal-950 p-6",
        className
      )}
    >
      <div className="w-full mb-[40px] flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <div className="flex items-center">
            <Image
              className="cursor-pointer"  
              src="/images/logo.png"
              width={48}
              height={48}
              alt="Logo"
              onClick={() => router.push('/')} 
            />
            <div className="ml-4 flex flex-col">
              <h1 className="text-2xl font-bold">SpotiFake</h1>
            </div>
          </div>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
        <Image
              className="cursor-pointer"  
              src="/images/logo.png"
              width={48}
              height={48}
              alt="Logo"
              onClick={() => router.push('/')} 
            />
          <button className="rounded-full bg-white flex p-2 items-center justify-center hover:opacity-75 transition">
            <BiSearch
              className="text-black"
              size={26}
              onClick={() => router.push("/search")}
            />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogout} className="bg-white px-6 py-2">
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="bg-transparent text-neutral-300 font-medium"
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button onClick={authModal.onOpen} className="bg-white px-6 py-2">
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
