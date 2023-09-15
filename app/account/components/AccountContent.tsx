"use client";

const AccountContent = () => {

  return ( 
    <div className="mb-7 px-6">
        <div className="flex flex-col gap-y-4">
          <p>Hello! There's actually nothing to change here.
          </p>
          <p>Thank you for signing up. Right now, any users can download any songs, so please keep in mind the purpose of the project and that this is a demo site. If you want to get to know my other works, you can visit my 
          <a href="https://www.linkedin.com/in/sabrinabertol/" target="_blank" className="text-neutral-400  cursor-pointer  hover:text-white  transition"> LinkedIn</a> or my <a href="hhttps://github.com/sabrinabertol" target="_blank" className="text-neutral-400  cursor-pointer  hover:text-white  transition"> GitHub</a> accounts.
          </p>
          <p>This is a free project, but if you would like to support me, you can <a href="https://www.buymeacoffee.com/sabrinabertol" target="_blank" className="text-neutral-400  cursor-pointer  hover:text-white  transition">buy me a coffee</a>!
          </p>
        </div>
    </div>
  );
}
 
export default AccountContent;

