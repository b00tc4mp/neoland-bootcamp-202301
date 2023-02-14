function App() {

    return <div>
        {/* Avatar */}
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-full w-32" alt="Avatar" />

        {/* Badges */}
        <div class="flex space-x-2 justify-center">
            <h2 class="text-4xl font-medium leading-tight text-gray-800">
                Example heading
                <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">New</span>
            </h2>
        </div>

        {/* Alerts */}
        <div class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">A simple primary alert - check it out!</div>
        <div class="bg-purple-100 rounded-lg py-5 px-6 mb-4 text-base text-purple-700 mb-3" role="alert">A simple secondary alert - check it out!</div>
        <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">A simple success alert - check it out!</div>
        <div class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3" role="alert">A simple danger alert - check it out!</div>
        <div class="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700 mb-3" role="alert">A simple warning alert - check it out!</div>
        <div class="bg-indigo-100 rounded-lg py-5 px-6 mb-4 text-base text-indigo-700 mb-3" role="alert">A simple indigo alert - check it out!</div>
        <div class="bg-gray-50 rounded-lg py-5 px-6 mb-4 text-base text-gray-500 mb-3" role="alert">A simple light alert - check it out!</div>
        <div class="bg-gray-300 rounded-lg py-5 px-6 mb-4 text-base text-gray-800 mb-3" role="alert">A simple dark alert - check it out!</div>

        {/* Button group */}
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                <button type="button" class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Left</button>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Middle</button>
                <button type="button" class=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Right</button>
            </div>
        </div>

        {/* Button */}
        <div class="flex space-x-2 justify-center">
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>

        {/* Cards */}
        <div class="flex justify-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
                <p class="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p class="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>

        {/* Gallery */}
        <section class="overflow-hidden text-gray-700 ">
            <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div class="flex flex-wrap -m-1 md:-m-2">
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"></img>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"></img>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></img>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"></img>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"></img>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/3">
                        <div class="w-full p-1 md:p-2">
                            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
}