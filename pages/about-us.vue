<template>
    <div class="w-full">
        <BreadCrumb/>
        <div class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400">
            <div class="flex flex-wrap flex-col w-full items-center justify-center">
                <div class="flex flex-wrap w-full items-start justify-center md:justify-between">
                    <!--image of width 1/5 in tablet and large screen and 10/12 in mobile-->
                    <img src="/about-us.jpeg" alt="Contact us" class="md:rounded-xl w-full md:w-2/5  aspect-16/9 md:aspect-square object-cover">
                    <!--Other content-->
                    <div class="flex flex-wrap flex-col w-10/12 md:w-3/5 md:pl-8 md:pr-4 pl-0 pr-0 py-4">
                        <!--Name with the icon of user-->
                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'landmark']" class="mr-2 text-lg"/></span>
                            Who we are?
                        </h2>
                        <p class="info-content">
                            At the heart of the Politecnico di Milano (Polimi) Summer School, there's a vibrant community comprising both students and professors from Polimi who are dedicated to crafting a dynamic and enjoyable learning atmosphere. Together, we're on a mission to turn the summer school into an exciting adventure where education meets fun. Our professors bring their expertise to life with engaging teaching methods, while us students contribute our curiosity and diverse perspectives, creating an interactive and lively environment. Through collaborative projects, interactive workshops, and a shared passion for knowledge, we're not just learning – we're crafting memories and forging connections that make the summer school experience truly unforgettable.
                        </p>

                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'gears']" class="mr-2 text-lg"/></span>
                            What we do?
                        </h2>
                        <p class="info-content">
                            At the Politecnico di Milano (Polimi) Summer School, the learning journey takes an adventurous turn with an exciting lineup of workshops that delve into programming and data science. Participants get to immerse themselves in these cutting-edge fields, gaining practical skills and insights from expert instructors. But it's not just about the classroom – the summer school also offers captivating travel experiences and adventures, allowing students to explore the vibrant city of Milan and its surrounding cultural gems. This unique blend of academic growth and exploration ensures that every moment at the Polimi Summer School is filled with discovery and enrichment.
                        </p>

                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'calendar']" class="mr-2 text-lg"/></span>
                            When is the summer school?
                        </h2>
                        <p class="info-content">
                            15th - 30th July 2024
                        </p>

                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'money-bill']" class="mr-2 text-lg"/></span>
                            How much does it cost?
                        </h2>
                        <p class="info-content">
                            The cost for the Politecnico di Milano (Polimi) Summer School is 400 euros, and this fee includes all the activities offered throughout the program. This comprehensive package covers not only the academic workshops but also the exciting travel experiences, adventures, and cultural explorations that make the summer school experience so enriching and memorable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-label {
    @apply text-xl text-indigo-950;    
}
.info-content {
    @apply text-base text-gray-800 mb-4;
}
</style>

