import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import * as React from "react";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: {
    regular: string;
    gradient: string;
  };
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  bottomImage?: {
    light: string;
    dark: string;
  };
  gridOptions?: {
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lightLineColor?: string;
    darkLineColor?: string;
  };
  backgroundImage?: string;
  overlayOpacity?: number;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",

      overlayOpacity = 0.3,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn("relative", className)}
        ref={ref}
        {...props}
        style={
          {
            /*
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        */
          }
        }
      >
        {/* Overlay for light/dark mode */}
        <div
          className={cn("absolute inset-0 z-[1]", "")}
          style={{ opacity: overlayOpacity }}
        />

        <section className="relative max-w-full mx-auto z-[3]">
          <div className="max-w-screen-xl  h-[100vh]  z-10 mx-auto px-4 py-28 gap-12 md:px-8">
            <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-600 dark:text-gray-400  group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[5px] border-gray-100 dark:border-white/5 rounded-3xl w-fit"
              >
                <p className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-900 animate-ping" />
                  {title}
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-7xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
              >
                <div className="text-transparent bg-clip-text font-normal font-sans pb-2 text-6xl sm:text-5xl md:text-6xl lg:text-8xl text-unwrap">
                  <p>
                    Take Control of Your Hiring. <br />
                    <span className="text-green-600">
                      Simple. Smart. Results.
                    </span>{" "}
                  </p>
                  <p className="text-4xl font-light">
                    Hire Top Talent 2X Faster.
                  </p>
                </div>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
              >
                Streamline your hiring from start to finish. Find, track, and
                hire the best people .
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false }}
                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 -z-10 h-full  w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#FF5A00_100%)]"></div>
      </div>
    );
  }
);
HeroSection.displayName = "HeroSection";

export { HeroSection };
