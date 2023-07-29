import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <section className="flex h-[900px] w-full items-center justify-center bg-gradient-radial from-secondary-600 to-background font-heading">
        <div className="relative flex h-full flex-col items-center">
          <div className="flex-1" />

          <div className="flex flex-col items-center">
            <h1>Hey there, I'm</h1>
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

      <div className="flex w-full flex-col gap-48 px-16 xl:px-56 2xl:px-80">
        <section className="grid w-full gap-16 lg:grid-cols-[1fr_50%] 2xl:gap-32">
          <section className="flex flex-col gap-8">
            <h3 className="font-heading font-semibold text-primary ">
              Philosophy
            </h3>
            <p className="text-justify">
              <span className="text-2xl text-accent-green">Why?&nbsp;</span>
              Its just one word. The simplest yet most complex question there
              is. Yet I don’t think people ask it nearly enough. Yet I don’t
              think people ask it nearly enough.
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
                <p className="text-lg">I'm very serious.</p>
                <p className="text-md text-accent-green-600">
                  (maybe it's a bit hard to tell)
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
                product for creation and editing of cloud.google.com pages,
                similar to commercially available product like Wix. During the
                course of the internship, I worked mainly on two separate
                projects. <br /> <br />I was first assigned the task of
                designing and implementing a messaging system for iframe
                interaction with the page preview within the editor. Gained
                experience with multiple types of testing and quickly ramped up
                to conform to Google coding standards and practices.
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

        <section className="flex w-full flex-col">
          <h3 className="font-heading text-4xl font-semibold text-primary">
            Personal Projects
          </h3>
        </section>
      </div>
      <footer className="h-16"></footer>
    </main>
  );
}
