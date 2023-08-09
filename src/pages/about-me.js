import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const AboutMePage = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Education
          </h1>
          <div>
            <p className="mt-6 font-semibold text-lg leading-8 text-gray-700">
              Rensselaer Polytechnic Institute, 2017-2021
            </p>
            <p className="text-lg leading-8 text-gray-700 italic">
              Bachelor of Science in Mechanical Engineering (GPA: 3.5)
            </p>
            <p className="text-lg leading-8 text-gray-700">
              Honors: Dean's Honor List
            </p>
          </div>
          <div>
            <p className="mt-6 font-semibold text-lg leading-8 text-gray-700">
              Carnegie Mellon University, 2021-2023
            </p>
            <p className="text-lg leading-8 text-gray-700 italic">
              Master of Science in Computational Design and Manufacturing (GPA:
              3.83)
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0 mt-16">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Related Coursework
          </h1>
          <ul className="list-disc mt-6 font-normal text-lg leading-8 text-gray-700 ml-6">
            <li>Java for Application Programmers</li>
            <li>Data Structures for Application Programmers</li>
            <li>Introduction to Computer Systems</li>
            <li>Numerical Methods in Engineering</li>
            <li>Engineering Computation</li>
            <li>Computer Vision for Engineers</li>
          </ul>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900">
            Here are some courses I have taken on{" "}
            <a
              href="https://www.udemy.com/"
              target="_blank"
              className="text-cyan-700 cursor-pointer hover:underline"
            >
              Udemy
            </a>
            :
          </h2>
          <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
            <li>
              <a
                href="https://www.udemy.com/course/the-web-developer-bootcamp/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                The Web Developer Bootcamp
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Node.js, Express, MongoDB and More: The Complete Bootcamp
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/typescript-the-complete-developers-guide/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Typescript: The Complete Developer's Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                React and Typescript: Build a Portfolio Project
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/react-redux/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Modern React and Redux
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                The Ultimate MySQL Bootcamp
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Build Responsive Real-World Website with HTML and CSS
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Next.js and React: The Complete Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/git-and-github-bootcamp/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                The Git and Github Bootcamp
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Docker and Kubernetes: The Complete Guide
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/microservices-with-node-js-and-react/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                Microservices with Node.js and React
              </a>
            </li>
          </ul>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 mt-16">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience
          </h1>
          <div>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              <span className="font-semibold">
                CMU Computational Engineering and Robotics Lab{" "}
              </span>
              | Pittsburgh, PA
            </p>
            <p className="text-lg leading-8 text-gray-700 italic">
              Research assistant | 2022 - Present
            </p>
            <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>
                Pioneered the development of an innovative algorithm in
                JavaScript to decode intricate Engineering Drawing SVG files
                into human-readable content, facilitating seamless
                interpretation and analysis.
              </li>
              <li>
                Spearheaded the preprocessing of an extensive dataset exceeding
                100,000 Engineering Drawing SVG files into JSON format utilizing
                Node.js, establishing a robust foundation for subsequent machine
                learning training and predictive modeling.
              </li>
              <li>
                Engineered and fine-tuned a sophisticated Node.js algorithm
                dedicated to executing comprehensive view separation on complex
                engineering drawings (DXF files), systematically extracting and
                organizing pertinent data points to enable streamlined
                downstream data processing.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 mt-16">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills
          </h1>
          <div>
            <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
              Programming Languages
            </h2>
            <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
              Libraries and Frameworks
            </h2>
            <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>React</li>
              <li>React Redux</li>
              <li>Next.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
              Databases
            </h2>
            <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <h2 className="mt-4 text-xl font-bold tracking-tight text-gray-900">
              Development Tools
            </h2>
            <ul className="list-disc mt-2 font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
