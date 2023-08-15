import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home min-h-screen"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" />
                DO IT
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-col gap-10"
              {...headContentAnimation}
            >
              <motion.div className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style
                </p>

                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
              <motion.div className=" flex flex-col justify-center items-center gap-2">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  Made by{" "}
                  <a
                    className="font-bold "
                    href="https://github.com/Md-Musfikur-Rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MMR
                  </a>{" "}
                  with
                </p>

                <motion.div
                  {...headTextAnimation}
                  className=" flex flex-row gap-1 justify-center items-center"
                >
                  <a
                    href="https://legacy.reactjs.org/docs/getting-started.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                      alt="react"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a
                    href="https://tailwindcss.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                      alt="tailwind css"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a
                    href="https://threejs.org/docs/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg"
                      alt="threejs "
                      width={25}
                      height={25}
                    />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
