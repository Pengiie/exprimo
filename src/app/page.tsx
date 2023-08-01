import Image from "next/image";
import { Bold } from "@/app/shared/util";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <section className="flex h-[900px] w-full items-center justify-center bg-gradient-radial from-secondary-600 to-background font-heading">
        <div className="relative flex h-full flex-col items-center">
          <div className="flex-1" />

          <div className="flex flex-col items-center">
            <h1>Hey there, I&apos;m</h1>
            <h1 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-6xl text-transparent">
              Nathan Sanchez
            </h1>
          </div>

          <div className="flex flex-1">
            <h2 className="pt-16 text-4xl text-accent-green">
              Software Engineer | Pianist | Graphics Enthusiast
            </h2>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col gap-28 px-16 lg:gap-48 xl:px-56 2xl:px-80">
        <section className="grid w-full gap-16 lg:grid-cols-[1fr_50%] 2xl:gap-32">
          <section className="flex flex-col gap-8">
            <h3 className="font-heading font-semibold text-primary ">
              Philosophy
            </h3>
            <p className="text-justify">
              <span className="text-2xl text-accent-green">Why?&nbsp;</span>
              Its just one word. The simplest yet most complex question there
              is. Yet I don&apos;t think people ask it nearly enough. Yet I
              don’t think people ask it nearly enough.
              <br />
              <br />
              That’s why I love learning. Why do certain frequencies work so
              well together to make our favorite music? Why do we think the way
              we do? There are so many unknowns in the world, and figuring them
              out is not only satisfying, but will only advance us as a society.
              <br />
              <br />I was hooked on coding since I was young, and have put
              countless hours into it since then. Being able to bring ideas to
              life is highly important to me, since I believe it takes that
              drive to push yourself and others forward. <br />
              <br />
              After experiencing the real world, I’ve figured out what my why
              is. I strive to use and share my knowledge to create applications
              and ideas that aid and push us forward as a society.
            </p>

            <div className="flex items-center gap-8 self-center py-8">
              <div className="relative">
                <Image
                  src="/crop_me.png"
                  width={140}
                  height={140}
                  alt="Picture of me"
                  className="rounded-full "
                />
                <div className="absolute left-0 top-0 h-full w-full bg-[#844A9F] opacity-70 mix-blend-multiply" />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg">I&apos;m very serious.</p>
                <p className="text-md text-accent-green-600">
                  (maybe it&apos;s a bit hard to tell)
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <h3 className="font-heading font-semibold text-primary">
              Experience
            </h3>
            <div className="flex items-center gap-4">
              <h4 className="font-heading text-accent-green">
                <span className="text-2xl font-semibold">
                  STEP Intern - Google
                </span>
              </h4>
              <hr className="flex-grow border-secondary-500" />
              <span className="text-xl text-neutral-500">Summer 2023</span>
            </div>
            <div className="grid grid-cols-[60%_1fr] gap-16">
              <p className="pt-2 text-justify">
                Worked on the Google Cloud Platform team developing an internal
                page editor application. During the course of the internship, I
                worked mainly on two separate projects. <br /> <br />I was first
                assigned the task of designing and implementing a messaging
                system for iframe interaction with the page preview within the
                editor. Gained experience with multiple types of testing and
                quickly ramped up to conform to Google coding standards and
                practices.
                <br /> <br />I was then tasked with designing, implementing, and
                preparing the launch of the dashboard migration from a legacy
                web framework to Angular. I created an extensive design document
                and broke down every task for the migration. I was able to
                execute this projects all within 6 weeks, and as of my leave, is
                being prepared for launch.
              </p>
              <div className="mx-auto flex flex-col gap-4">
                <h4 className="font-heading text-xl font-semibold text-accent">
                  Skills
                </h4>
                <ul className="list-inside list-disc font-body-light">
                  <li>Project Management</li>
                  <li>Task Breakdown</li>
                  <li>Angular</li>
                  <li>Typescript</li>
                  <li>Design Documents</li>
                  <li>RPCs</li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h3 className="font-heading text-4xl font-semibold text-primary">
            Personal Projects
          </h3>
          <div className="flex flex-col gap-4">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_50%] lg:gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-heading text-xl font-semibold text-accent">
                  <span className="text-2xl font-semibold">
                    <a
                      href="https://www.github.com/paratym/pyrite"
                      className="hover:underline">
                      Pyrite
                    </a>
                  </span>
                </h4>
                <p className="text-justify">
                  A 3D game engine written in <Bold>Rust</Bold> with multi-level
                  abstraction from modularity as the primary goal. The rendering
                  is done using <Bold>Vulkan</Bold> and the engine is designed
                  to eventually be cross platform. Spent a lot of time trying to
                  design the most intuitive way to interact with each
                  module&apos;s api. With this <Bold>intuitive mindset</Bold>,
                  it should ideally take less time to develop using the engine.
                  This project is still under development along with a personal
                  game called Raven.
                </p>
              </div>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="data:image/png;base64,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"
                  width={480}
                  height={420}
                  alt="Pyrite game engine logo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex items-baseline justify-center gap-2 p-8 text-lg text-primary">
        <a href="https://github.com/Pengiie" className="hover:underline">
          Github
        </a>
        <span className="text-text">&bull;</span>
        <a href="mailto:nathan@paratym.com" className="hover:underline">
          nathan@paratym.com
        </a>
      </footer>
    </main>
  );
}
