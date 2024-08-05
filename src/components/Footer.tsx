import React from 'react'

function Footer() {
  return (
    

<footer className="bg-white dark:bg-gray-800">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex ">
          <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
          </div>
          <div className="flex-grow"></div>
          <div className="grid  gap-8 sm:gap-6 ">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Developer name</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">name1</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">name2</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline">name3</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">name4</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer