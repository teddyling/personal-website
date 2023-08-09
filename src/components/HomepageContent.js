import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const HomepageContent = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Diligent and eager to learn.
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            I believe that when becoming a software engineer, diligence,
            curiosity, and lifelong learning are the three most crucial
            qualities. In order to constantly improve myself, I will persevere
            in my daily efforts, never stopping.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <div>
              <figure className="border-l border-sky-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Eager learning is akin to knowledge, diligent practice is
                    akin to benevolence, and being ashamed of one's shortcomings
                    is akin to courage.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                    src="/Confucius.jpg"
                    alt=""
                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Confucius</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="pt-96">
              <figure className="border-l border-sky-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>
                    “Wherever three people walk, they must have someone I can
                    learn from; choose the good ones to follow, and amend the
                    bad ones.”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img
                    src="/Confucius.jpg"
                    alt=""
                    className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Confucius</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              While pursuing a bachelor's degree in Mechanical Engineering at
              Rensselaer Polytechnic Institute, I once took a course on Python.
              It was my first introduction to programming. Perhaps due to the
              course's complexity or stemming from my laziness, my performance
              in that course was subpar, leading me to a strong aversion to
              programming during that time.
            </p>

            <p className="mt-8">
              Later, I went to Carnegie Mellon University to pursue a master's
              degree. Hearing about the immense popularity of JAVA as a
              programming language, I enrolled in a course titled "Java for
              Application Programmers." The professor's enthusiastic personality
              and passionate teaching style in this class resonated deeply with
              me. Not only did I excel in the course, but it also reintroduced
              me to programming and ignited a newfound passion for it.
            </p>

            <p className="mt-8">
              I began to enroll in more programming-related courses at CMU,
              while also utilizing my leisure time and holidays to self-learn
              programming. I dedicate over twelve hours every day to studying
              programming, completing more than ten courses on Udemy. During
              this period, I have acquired proficiency in widely-used
              programming languages such as HTML, CSS, JavaScript, and
              Typescript. I have also studied some of the currently popular
              frameworks, such as ReactJS, ExpressJS, and NextJS. Furthermore, I
              have learned crucial technologies like Docker, Kubernetes, and
              microservice principles.
            </p>
            <p className="mt-8">
              At the same time, I also made an effort to apply the theoretical
              knowledge I had acquired into practice by developing a
              microservice website that approaches industrial standards:
              recipe-ne.com. During this process, I gained a wealth of
              professional knowledge, such as how to handle identity
              authentication and authorization more effectively, and how to
              defend against attacks like DDoS and CSRF. The construction of
              this website allowed me to practically apply much of the knowledge
              I had learned and further made me aware of my own shortcomings and
              the urgency of continuing my learning journey.
            </p>
            <p className="mt-8">
              I am acutely aware that my lack of an undergraduate background in
              computer science might create a disparity in my professional
              knowledge compared to others. Consequently, I am exerting twice
              the effort to study, driven by a strong desire to bridge this gap
              through diligence. I am also fervently eager to initiate the
              development of industrial-standard applications and learn from a
              community of accomplished software engineers. I am committed to
              persistently exploring this field, with an unwavering commitment
              to continuous growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageContent;
