import { CameraIcon } from "@heroicons/react/solid";
import picture from "../../assets/images/pic.jpeg";
import { useHistory } from "react-router-dom";

export default function DocumentationPage() {
  const history = useHistory();
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="inline-flex items-center px-4 py-2 mb-5 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go Back
        </button>
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Documenation of the challenge.
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Pokedex
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={picture}
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Jaime Rueda</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500"></p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                The project had some challenges that it had to face and I would
                like to share it with you, although it is not completely
                finished, some details are missing, the functionality works
                well.
              </p>
              <p>
                the time was not enough to finish it as I wanted, I could have
                detailed the ux and ui to make it look better, also the biggest
                challenge was testing, to be honest I did not reach the goal
                with the given time since I had problems converting the data
                from the poke api for the unit testing of the components,
                specifically with a jest method called jest.mock, I would need
                more time to study and solve it but I needed to deliver the mvp.
              </p>
              <p>Some of the interesting technologies that I used:</p>
              <ul>
                <li>React, i used local state with hooks.</li>
                <li>Poke api for the data and Tailwind CSS for styles.</li>
                <li>
                  some libraries that helped me for the project such as react
                  router, recharts, react toastify ...
                </li>
              </ul>
              <p>
                It is important for me to mention that when reading the code,
                tailwind can be a bit confusing if you are not familiar, but
                once you understand it it is very easy to understand and work
                quickly.
              </p>
              <h3>Notes</h3>
              <p>
                Without more to say I hope you like my work and can consider me
                otherwise I would greatly appreciate your feedback for my growth
                as a professional, I am not a person who gives up so you can
                expect from my hard and honest work in addition to continuous
                learning for tomorrow's troubles.
              </p>
              <p>
                Have a good day and thank you for the chance regardless of the
                result. -Be Always grateful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
