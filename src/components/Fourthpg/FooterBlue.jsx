import React from 'react'

const FooterBlue = () => {
  return (
    <section class="w-full rounded-xl overflow-hidden">
  <div class="relative bg-blue-600 text-white">

    <div class="absolute inset-0">
      <div class="absolute right-0 top-0 h-full w-2/3 bg-blue-700 clip-path-banner"></div>
    </div>

    <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 py-8">

      <div>
        <h2 class="text-xl sm:text-2xl font-bold">
          Super discount on more than 100 USD
        </h2>
        <p class="text-blue-100 text-sm sm:text-base">
          Have you ever finally just write dummy info
        </p>
      </div>

      <button class="bg-orange-400 hover:bg-orange-500 transition 
                     text-white font-medium px-5 py-2 rounded-lg shadow">
        Shop now
      </button>

    </div>
  </div>
</section>
  )
}

export default FooterBlue
