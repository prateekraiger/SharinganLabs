import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.from(".letter", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "power4.out",
      duration: 1,
    });
  });

  return (
    <div className="w-full min-h-screen bg-black text-white font-['Neue_Montreal']">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold tracking-tighter">
            <span className="letter">S</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
            <span className="letter">r</span>
            <span className="letter">i</span>
            <span className="letter">n</span>
            <span className="letter">g</span>
            <span className="letter">a</span>
            <span className="letter">n</span>
            <span className="letter">&nbsp;</span>
            <span className="letter">L</span>
            <span className="letter">a</span>
            <span className="letter">b</span>
            <span className="letter">s</span>
          </h1>
          <p className="text-2xl mt-4">
            Weaving illusions into reality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;