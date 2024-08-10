import Main from "@/components/Main";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="relative w-96 h-48">
          <Image
            src="/RJlogo-vertical.png"
            alt="FlowBite Logo"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 60px"
            priority
          />
        </div>
        <div className="mt-5 text-2xl font-semibold">
          <p>~気まぐれな旅をしよう~</p>
        </div>
        <Main />
      </main>
    </>
  );
}
