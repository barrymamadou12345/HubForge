import React from 'react';
import AV from "../../assets/images/avatar.webp";
import AB from "../../assets/images/avatar-1.webp";
import AC from "../../assets/images/avatar-3.webp";
import AD from "../../assets/images/avatar-2.webp";
import AE from "../../assets/images/avatar-4.webp";

export default function Section4({ sec4 }) {
  return (
    <div
      id={sec4}
      className="max-w-screen-xl mt-10 mx-auto px-4 py-6 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="text-center">
        <h2 className="text-5xl font-bold pb-5">Trusted by thousands</h2>
        <p className="text-xl">
          Repellendus atque illum odio! Fugiat at expedita deserunt dolorum
          molestias.
        </p>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
        <div class="space-y-6">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AV}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aliquid quo eum quae quos illo earum ipsa doloribus nostrum
                minus libero aspernatur laborum cum, a suscipit, ratione ea
                totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Architecto laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AB}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam
                ab veniam sint non cumque quis tempore cupiditate. Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AB}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p>
                Nostrum minus libero sit amet consectetur, adipisicing elit ab
                veniam sint non cumque quis tempore cupiditate. Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AC}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p>
                Nostrum minus libero sit amet consectetur, adipisicing elit ab
                veniam sint non cumque quis tempore cupiditate. Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AD}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo eum quae quos illo laboriosam deleniti aperiam
                ab veniam sint non cumque quis tempore cupiditate. Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-6 sm:hidden lg:block">
          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AV}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p>
                Architecto laboriosam. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AE}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-200 to-white p-px dark:from-gray-700 dark:via-gray-800 dark:to-darker">
            <div class="relative flex h-full flex-col gap-6 rounded-2xl bg-gray-100 p-8 dark:bg-gray-900">
              <div class="flex gap-4">
                <img
                  class="h-12 w-12 rounded-full"
                  src={AV}
                  alt="user avatar"
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h3 class="text-lg font-medium text-gray-700 dark:text-white">
                    Daniella Doe
                  </h3>
                  <p class="text-sm text-gray-500 dark:text-gray-300">
                    @hundler
                  </p>
                </div>
              </div>
              <p>
                Illum aliquid quo deleniti aperiam ab veniam Sint libero
                voluptas veniam at reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
