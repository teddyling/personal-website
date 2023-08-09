import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Welcome to my website!
                </h1>
                <p className="mt-6 text-2xl leading-8 text-gray-800">
                  I am <span className="font-semibold">Taichen Ling</span>, an
                  enthusiastic and passionate{" "}
                  <span className="font-semibold">full-stack developer</span>.
                </p>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  I have a deep love for coding and eagerly anticipate the
                  opportunity to learn new knowledge and technologies each day.
                  I actively seek out challenges, and I'm excited about the
                  prospect of applying my acquired skills to tackle
                  sophisticated industrial-level problems.
                </p>

                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/projects"
                    className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Projects
                  </Link>
                  <Link
                    href="Taichen_Ling_Resume.pdf"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    View Résumé <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-sky-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            WorkHard.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            LearnNewStuff.ts
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            StayEnthusiastic.java
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6">
                        <pre
                          className="text-[0.8125rem] leading-6 text-gray-300"
                          style={{ ["tab-size"]: 4 }}
                        >
                          <code>
                            {"import {"}{" "}
                            {<span className="text-[#7dd3fc]">useState</span>}
                            {" } "}
                            from{" "}
                            <span className="text-emerald-300">"react"</span>;
                            {"\n"}
                            {"\n"}
                            <span className="text-blue-400">const </span>
                            <span className="text-yellow-100">WorkHard</span>
                            {" = () => {"}
                            {"\n"}
                            {"\t\t\t"}
                            <span className="text-blue-400">const </span>
                            {"["}
                            <span className="text-[#7dd3fc]">
                              workHard
                            </span>,{" "}
                            <span className="text-yellow-100">setWorkHard</span>
                            {"] = "}
                            <span className="text-yellow-100">useState</span>
                            {"("}
                            <span className="text-green-100">8</span>
                            {");"}
                            {"\n"}
                            {"\t\t\t"}
                            <span className="text-blue-400">const </span>
                            <span className="text-yellow-100">
                              handleButtonClick
                            </span>
                            {" = () => {"}
                            {"\n"}
                            {"\t\t\t\t\t\t"}
                            <span className="text-yellow-100">setWorkHard</span>
                            {"("}
                            <span className="text-[#7dd3fc]">prev</span>
                            {" => "}
                            <span className="text-[#7dd3fc]">prev</span> +{" "}
                            <span className="text-green-100">1</span>
                            {");"}
                            {"\n"}
                            {"\t\t\t"}
                            {"}"}
                            {"\n"}
                            {"\n"}
                            {"\t\t\t"}
                            <span className="text-pink-300">return </span>
                            {"("}
                            {"\n"}
                            {"\t\t\t\t\t\t"}
                            {"<>"}
                            {"\n"}
                            {"\t\t\t\t\t\t\t\t\t"}
                            {"<"}
                            <span className="text-blue-400">p</span>
                            {"> "}
                            Today I worked hard{" "}
                            <span className="text-blue-400">{"{"}</span>
                            <span className="text-[#7dd3fc]">workHard</span>
                            <span className="text-blue-400">{"} "}</span>
                            hours
                            {" <"}
                            <span className="text-blue-400">/p</span>
                            {"> "}
                            {"\n"}
                            {"\t\t\t\t\t\t\t"}
                            {" <"}
                            <span className="text-blue-400">button</span>
                            <span className="text-[#7dd3fc]"> onClick</span>
                            {"={"}
                            <span className="text-yellow-100">
                              handleButtonClick
                            </span>
                            {"}"}
                            {">"} Increase{" <"}
                            <span className="text-blue-400">/button</span>
                            {">"}
                            {"\n"}
                            {"\t\t\t\t\t\t"}
                            {"</>"}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
};

export default HeroSection;
