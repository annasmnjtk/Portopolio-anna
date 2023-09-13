import clsx from "clsx";
import { useState } from "react";

const Home = () => {
  const [mode, setMode] = useState("light");
  return (
    <div className={mode === "dark" && `dark`}>
      <div className="dark:bg-pink-500 ">
        <div className="flex items-center justify-end p-4 space-x-3 dark:text-white">
          <label
            className={clsx({
              ["inline-block pl-[0.15rem] hover:cursor-pointer"]: true,
              ["font-bold"]: mode !== "dark",
            })}
            for="flexSwitchCheckDefault"
          >
            Light
          </label>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-pink-100 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-pink-300 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={() =>
              setMode((prev) => (prev === "dark" ? "light" : "dark"))
            }
          />
          {/* <span class="slideBtnTg round z-0"></span> */}
          <label
            className={clsx({
              ["inline-block pl-[0.15rem] hover:cursor-pointer"]: true,
              ["font-bold"]: mode === "dark",
            })}
            for="flexSwitchCheckDefault"
          >
            Pink
          </label>
        </div>
        <div
          className={clsx({
            ["w-full flex justify-end items-center mt-5 space-x-3 pr-5 "]: true,
          })}
        >
          <div class="max-w-lg mx-auto my-10 rounded-lg shadow-md p-5 bg-pink-100 dark:bg-pink-200">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src="anna.png"
              alt="Profile picture"
            />
            <h2 class="text-center text-2xl font-semibold mt-3">
              Anna Simanjuntak
            </h2>
            <p class="text-center text-gray-600 mt-1">Software Engineer</p>
            <div class="flex justify-center mt-5">
              <a
                href="https://www.linkedin.com/in/anna-sulastri-simanjuntak-192863193/"
                class="text-blue-500 hover:text-blue-700 mx-3"
                target="_blank"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/anna-sulastri-simanjuntak-192863193/"
                class="text-blue-500 hover:text-blue-700 mx-3"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/annasmnjtk?tab=repositories"
                class="text-blue-500 hover:text-blue-700 mx-3"
                target="_blank"
              >
                GitHub
              </a>
            </div>
            <div class="mt-5">
              <h3 class="text-xl font-semibold text-center">Bio</h3>
              <p class="text-gray-600 mt-2 text-center">
                Anna Sulastri Simanjuntak received the Bachelor of Applied
                Science degree in informatics engineering from Del Institute of
                Technology, Indonesia in 2022. She has experience working as a
                software developer at PT. Peruri Digital Security. Her research
                interest is related to software engineering, requirements
                engineering, user interface and user experience..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
