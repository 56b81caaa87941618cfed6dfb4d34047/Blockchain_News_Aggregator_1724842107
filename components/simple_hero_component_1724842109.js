<!--
INSTRUCTION: Summary: The hero component contains the following two parts:
INSTRUCTION: - To the left: There is a hero title text in h1 heading. Underneath it, a hero subtitle line of text. All this text is left-aligned. Underneath this, there are two white buttons in the same line, both justified in alignment.
INSTRUCTION: - To the right: There is an image relevant to the app.
-->

<template>
    <section id="hero-section" class="bg-gradient-to-br from-pink-500 to-purple-600 flex-1 flex min-h-screen">
        <div id="sidebar" class="w-64 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 shadow-lg rounded-r-lg">
            <nav>
                <ul class="space-y-2">
                    <li><a href="#" class="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-30 rounded transition duration-150 ease-in-out"><i class='bx bxs-home mr-2'></i>Home</a></li>
                    <li><a href="#" class="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-30 rounded transition duration-150 ease-in-out"><i class='bx bxs-info-circle mr-2'></i>About</a></li>
                    <li><a href="#" class="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-30 rounded transition duration-150 ease-in-out"><i class='bx bxs-contact mr-2'></i>Contact</a></li>
                </ul>
            </nav>
        </div>
        <div id="hero-container" class="flex-1 grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <!-- Left section containing title and buttons -->
            <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                <div id="hero-title-container-text" class="flex">
                    <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Discover the Future of Blockchain</h1>
                </div>
                <div id="hero-subtitle-container" class="flex">
                    <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-pink-200 lg:mb-8 md:text-lg lg:text-xl">Stay Ahead with Real-Time Blockchain Insights</p>
                </div>
                <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div id="hero-button-1-container" class="flex">
                        <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1 items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-purple-700 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg sm:w-auto hover:bg-opacity-30 focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out">Start Exploring</a>
                    </div>
                    <div id="hero-button-2-container" class="flex">
                        <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1 items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-white bg-purple-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg sm:w-auto focus:outline-none hover:bg-opacity-70 focus:ring-4 focus:ring-pink-300 transition duration-300 ease-in-out">Learn More</a>
                    </div>
                </div>
            </div>
            <!-- Right section containing image -->
            <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img id="hero-image" src="./images/hero.png" alt="hero image" class="rounded-lg shadow-lg">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SimpleHeroComponent",
    data() {
        return {
            expanded: false,
            tab: null
        };
    }
};
</script>
