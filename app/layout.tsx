import Sidebar from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import { Song } from "@/types";

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brazilian Psychedelic Playlist',
  description: 'A selection of Brazilian Psychedelic Music by Sabrina Bertol',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
  songs
}: {
  children: React.ReactNode,
  songs: Song[];
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={songs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
