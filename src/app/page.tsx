import TypewriterEffect from "./typewriter_effect";
import { SparklesPreview } from "./sparkles";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <SparklesPreview />
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-2xl md:text-2xl font-bold text-white">
            this
          </span>
          <span className="text-8xl sm:text-8xl md:text-8xl font-bold text-white">
            &
          </span>
          <span className="inline-flex text-2xl sm:text-2xl md:text-2xl font-bold text-white">
            <TypewriterEffect />
          </span>
        </div>
      </div>
    </main>
  );
}
