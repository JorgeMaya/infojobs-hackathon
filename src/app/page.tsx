'use client';
import Image from "next/image";
import AccessToken from "./api/infoJobs";
import { GitHubComponent } from "./components/gitHubComponent";
const { getAccessToken } = AccessToken();
const handleClick = async () => {
  const auth2 = await getAccessToken();
  console.log(auth2);
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Pruebas
        </p>
      </div>
      <GitHubComponent></GitHubComponent>
      <button
        onClick={async (event) => {
          event.stopPropagation();
          await handleClick();
        }}
      >
        TRY IT!!
      </button>
    </main>
  );
}
