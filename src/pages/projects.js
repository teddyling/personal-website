import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const ProjectPage = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Selected Personal Projects
          </h1>
          <div>
            <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
              RecipeNE (
              <a
                href="https://www.recipe-ne.com/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                recipe-ne.com
              </a>
              )
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-700">
              A dynamic and responsive recipe website adhering to REST API and
              Microservice principles, showcasing advanced functionalities
              including user authentication, email verification, credential
              management, and interactive commenting.
            </p>
            <p className="mt-4 font-semibold text-lg leading-8 text-gray-700">
              Technology Utilized:
            </p>
            <ul className="list-disc font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>Frontend: Next.js, React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express, NATS Streaming Server</li>
              <li>Database and Storage: MongoDB, Redis, Amazon S3</li>
              <li>Deployment: Docker, DigitalOcean Managed Kubernetes</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
            <p className="mt-4 font-semibold text-lg leading-8 text-gray-700">
              Key Features:
            </p>
            <ul className="list-disc font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>
                Designed and implemented a microservices architecture utilizing
                an event broker (NATS Streaming Server) for efficient
                inter-service communication, resulting in enhanced modularity
                and scalability.
              </li>
              <li>
                Ensured robust security using a combination of HTTP-only cookies
                and JSON Web Tokens (JWT) for authentication and authorization,
                safeguarding user data and platform integrity.
              </li>
              <li>
                Implemented a seamless silent token refresh mechanism, enhancing
                user sessions and reducing authentication interruptions,
                resulting in improved user satisfaction.
              </li>
              <li>
                Developed and integrated defensive mechanisms against potential
                attacks, including Distributed Denial-of-Service (DDoS),
                Cross-Site Scripting (XSS), and Cross-Site Request Forgery
                (CSRF), fortifying the platform's security posture.
              </li>
              <li>
                Employed GitHub Actions to orchestrate automated deployment,
                allowing for efficient and consistent deployment of code changes
                to production, enhancing the development workflow.
              </li>
            </ul>
          </div>

          <div>
            <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
              TM-Notebook (
              <a
                href="https://tm-notebook.com/"
                target="_blank"
                className="text-cyan-700 cursor-pointer hover:underline"
              >
                tm-notebook.com
              </a>
              )
            </p>
            <p className="mt-2 text-lg leading-8 text-gray-700">
              TM-Notebook is an interactive code editor that offers dynamic
              compilation and live output for JavaScript code and Markdown
              language.
            </p>
            <p className="mt-4 font-semibold text-lg leading-8 text-gray-700">
              Technology Utilized:
            </p>
            <ul className="list-disc font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>Frontend: React.js, Redux, CSS</li>
              <li>Backend: Node.js, Express</li>
              <li>Deployment: Docker, GCP Container Registry</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
            <p className="mt-4 font-semibold text-lg leading-8 text-gray-700">
              Key Features:
            </p>
            <ul className="list-disc font-normal text-lg leading-8 text-gray-700 ml-6">
              <li>
                Engineered an interactive code editor that provides developers
                with the ability to seamlessly compile and execute JavaScript
                and Markdown code snippets, enabling instant observation of
                real-time output and results.
              </li>
              <li>
                Facilitated effortless npm package imports and rendered JSX
                code, enriching coding capabilities and promoting versatile
                development practices.
              </li>
              <li>
                Enabled users to access the editor via web browsers for online
                coding convenience, while also integrating a Command Line
                Interface (CLI) for local usage,
              </li>
              <li>
                Empowered developers to customize their local environment by
                specifying the desired file to open and port number for
                execution, enhancing flexibility and adaptability.
              </li>
              <li>
                Improved user satisfaction by introducing the option to modify
                editor block size and format code snippets, tailoring the
                environment to individual preferences.
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-2xl lg:mx-0 mt-16">
          <div>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Relevant School Projects
            </h1>
            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Cache Lab: Understanding Cache Memories
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Developed a cache simulator written in C, capable of executing
                from the Unix command line. The simulator accurately emulates
                the behavior of a hardware cache based on a sequence of memory
                operation.
              </p>
            </div>
            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Malloc Lab: Writing a Dynamic Storage Allocator
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Developed a dynamic memory allocator that simulates the behavior
                of C's memory management functions, including malloc, calloc,
                realloc, and free.
              </p>
            </div>
            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Shell Lab: Writing Your Own Linux Shell
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                A Linux shell program that supports job control and I/O
                redirection
              </p>
            </div>
            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Proxy Lab: Writing a Caching Web Proxy
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Developed a web proxy capable of handling concurrent incoming
                connections, reading and writing requests and responses, and
                forwarding data to the appropriate destinations.
              </p>
            </div>

            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Proxy Lab: Writing a Caching Web Proxy
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Developed a web proxy capable of handling concurrent incoming
                connections, reading and writing requests and responses, and
                forwarding data to the appropriate destinations.
              </p>
            </div>
            <div>
              <p className="mt-10 font-semibold text-2xl leading-8 text-gray-700">
                Team Project: Paint or Die
              </p>
              <p className="text-lg italic leading-8 text-gray-500">
                Introduction to Computer Systems | Carnegie Mellon University
              </p>
              <p className="mt-2 text-lg leading-8 text-gray-700">
                Collaborated within a student team of 4 to create a local
                two-player competitive game utilizing C++, employing OpenGL for
                graphics rendering, and adhering to the principles of
                Object-Oriented Programming (OOP).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
