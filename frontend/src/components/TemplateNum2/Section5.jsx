import React from 'react'
import AIR from "../../assets/images/téléchargement.png"
import GOOGLE from "../../assets/images/google.svg"
import GO from "../../assets/images/ge.svg"
import Netflix from "../../assets/images/netflix.svg"
import Microsoft from "../../assets/images/microsoft.svg"

export default function Section5() {
  return (
    <div>
        <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
                    <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
                        <h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">Start managing your company smarter today</h2>
                    </div>
                    <div class="mt-12 md:mt-20">
                        <div class="relative rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/20 transition duration-500 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
                            <div class="flex flex-col gap-12 divide-y p-12 dark:divide-gray-800 md:flex-row md:divide-y-0 md:divide-x">
                                <div class="text-center md:w-5/12">
                                    <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Suite Enterprise</h3>
                                    <p class="text-lg text-gray-600 dark:text-gray-300">For your company of any size</p>
                                    <span class="mb-6 mt-12 inline-block text-6xl font-bold text-gray-900 dark:text-white"><span class="text-4xl text-purple-500  dark:text-gray-200">$</span>234</span>

                                    <div class="flex justify-center">
                                        <a href="/pages/register.html" class="relative flex h-11 w-max items-center justify-center px-5 before:absolute before:inset-0 before:rounded-full before:bg-purple-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span class="relative w-max text-white"> Get started </span>
                                        </a>
                                    </div>

                                    <p class="mt-12 text-sm text-gray-500 dark:text-gray-400">Includes : Security, Unlimited Storage, Payment, Search engine, and all features</p>
                                </div>
                                <div class="relative md:w-7/12 md:pl-12">
                                    <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-gray-300">
                                        <li class="space-x-2">
                                            <span class="font-semibold text-primary text-purple-500">✓</span>
                                            <span>First premium advantage</span>
                                        </li>
                                        <li class="space-x-2">
                                            <span class="font-semibold text-primary text-purple-500">✓</span>
                                            <span>Second advantage weekly</span>
                                        </li>
                                        <li class="space-x-2">
                                            <span class="font-semibold text-primary text-purple-500">✓</span>
                                            <span>Third advantage donate to project</span>
                                        </li>
                                        <li class="space-x-2">
                                            <span class="font-semibold text-primary text-purple-500">✓</span>
                                            <span>Fourth, access to all components weekly</span>
                                        </li>
                                    </ul>
                                    <p class="text-gray-700 dark:text-white">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
                                    <div class="mt-12 flex flex-wrap items-center justify-between gap-6 grayscale">
                                        <img class="h-8 w-auto lg:h-12" src={AIR} width="100" alt="airbnb"/>
                                        <img class="h-6 w-auto lg:h-8" src={Netflix} width="100" alt="bissell"/>
                                        <img class="h-8 w-auto lg:h-10" src={GO} width="100" height="100" alt="ge"/>
                                        <img class="ww-auto h-8 lg:h-12" src={Microsoft} width="100" alt="microsoft"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20 flex flex-col gap-12 md:mt-32 lg:flex-row">
                        <div class="text-center lg:w-5/12 lg:pl-12 lg:text-left">
                            <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">Frequently Asqued Questions</h2>
                            <p class="mt-4 text-gray-600 dark:text-gray-300">piente optio repellendus atque illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
                        </div>

                        <div class="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12">
                            <div>
                                <dl class="faq mx-auto max-w-2xl">
                                    <dt class="text-lg sm:mb-0">
                                        <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-1" data-active="false">
                                            <span class="text-lg font-normal text-gray-900 dark:text-white">How to customize the template</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-1">
                                        <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
                                    </dd>
                                </dl>
                            </div>

                            <div>
                                <dl class="faq mx-auto max-w-2xl">
                                    <dt class="text-lg sm:mb-0">
                                        <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-2" data-active="false">
                                            <span class="text-lg font-normal text-gray-900 dark:text-white">How many times can I use the template ?</span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-2">
                                        <div class="pb-6 text-base text-gray-600 dark:text-gray-400">
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
                                            <ul class="mt-4 list-outside list-disc pl-4">
                                                <li>Item 1</li>
                                                <li>Item 2</li>
                                                <li>Item 3</li>
                                                <li>Item 4</li>
                                            </ul>
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            <div>
                                <dl class="faq mx-auto max-w-2xl">
                                    <dt class="text-lg sm:mb-0">
                                        <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-3" data-active="false">
                                            <span class="text-lg font-normal text-gray-900 dark:text-white"> How to customize the template ? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-3">
                                        <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
                                    </dd>
                                </dl>
                            </div>

                            <div>
                                <dl class="faq mx-auto max-w-2xl">
                                    <dt class="text-lg sm:mb-0">
                                        <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-4" data-active="false">
                                            <span class="text-lg font-normal text-gray-900 dark:text-white"> How to customize the template ? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <div class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-4">
                                        <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
                                    </div>
                                </dl>
                            </div>

                            <div>
                                <dl class="faq mx-auto max-w-2xl">
                                    <dt class="text-lg sm:mb-0">
                                        <button type="button" class="flex w-full items-start justify-between py-6 text-left text-gray-400" aria-controls="faq-5" data-active="false">
                                            <span class="text-lg font-normal text-gray-900 dark:text-white"> How to customize the template ? </span>
                                            <span class="ml-6 flex h-7 items-center">
                                                <svg class="arrow-down h-6 w-6 rotate-0 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </dt>
                                    <dd class="faq-answer block max-h-0 overflow-hidden pr-12 duration-300 ease-in-out" id="faq-5">
                                        <p class="pb-6 text-base text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!</p>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
