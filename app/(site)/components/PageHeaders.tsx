"use client";

import { useUser } from "@/hooks/useUser";
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'

const PageHeaders = ({
}) => {
    const { user } = useUser();

  return ( 

    <div>
      {user ?  (
        <div>
        <Header>
          <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">
              Welcome back!
            </h1>
            <div className="grid grid-cols-1 sm:gird-cols-2 xl:gird-cols-3 2xl:grid-cols-4 gap-3 mt-4">
              <ListItem 
              image="/images/liked.png"
              name="Liked Songs"
              href="liked"
              />
            </div>
          </div>
        </Header>
       </div>
      ) : (
        <div>
        <Header>
        <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">
              A collective playlist of Brazilian Psychedelic music
            </h1>
            <h2 className="text-gray-500 text-xl">
              Sign up today and listen to the best of Brazil&apos;s psychedelic music.
            </h2>
            <h2 className="text-gray-500 text-xl">Our content is curated and powered by the community. 
            </h2>
          </div>
        </Header>
       </div>
      )}
    </div>

  );
}
 
export default PageHeaders;