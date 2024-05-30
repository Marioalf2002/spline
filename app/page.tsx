"use client";

import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <header
        id="home"
        className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
      >
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">Spline</h1>
            <h2 className="text-md md:text-2xl">Entra al mundo 3D</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500">
            Spline es una herramienta de diseño 3D que te permite crear escenas
            y animaciones en 3D de manera sencilla y rápida.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-4">
            <a href="https://spline.design/">
              <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
                Spline
              </button>
            </a>
            <a href="https://github.com/Marioalf2002">
              <button className="w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors">
                GitHub
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
          <Spline
            className="w-full flex scale-[.70] lg:scale-[1] items-center justify-center md:justify-start"
            scene="https://prod.spline.design/zrDbpTm6b8Xyml6n/scene.splinecode"
          />
        </div>
      </header>
    </main>
  );
}
