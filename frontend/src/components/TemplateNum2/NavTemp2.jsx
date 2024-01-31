import React from 'react'

export default function NavTemp2() {
  return (
    <div>
<header class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex-1 md:flex md:items-center md:gap-12">
      <a href="#home" aria-label="logo" class="flex items-center space-x-2 px-0">
        <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
        <div class="h-6 w-2 bg-purple-500"></div>
        <span class="text-2xl font-bold text-gray-900 dark:text-white">Astrolus</span>
      </a>
            
      </div>

      <div class="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" class="hidden lg:block">
          <ul class="flex items-center gap-6 text-sm">
            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Features </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Solution </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/">Reviews</a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Pricing </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
            </li>

            <li>
              <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Login </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-3xl bg-purple-500 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Get started
            </a>

    
          </div>

          <div class="block lg:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    </div>
  )
}










