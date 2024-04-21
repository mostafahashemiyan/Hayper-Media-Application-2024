<template>
    <div class="w-full">
        <div class="w-full">
            <!-- add cover image here then put a div on the cover image-->
            <div class="flex flex-wrap justify-center items-center bg-cover-image p-4" >
                <div class="max-w-screen-xl w-full">
                    <div class="flex flex-wrap flex-col bg-black/40 p-4 rounded w-fit text-white">
                        <h1 class="text-4xl">Polimi Summer School</h1>
                        <h2 class="text-2xl">Enjoy and Learn in the Summer</h2>
                        <nav class="mt-4 flex flex-wrap text-center">
                            <!--link to the schedule -->
                            <nuxt-link to="/schedule" class="border-white cta-btn w-1/2">Schedule</nuxt-link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

        <!-- Summary about summer school -->
        <div class="flex flex-wrap justify-center items-center bg-white p-4 mt-8">
            <div class="max-w-screen-xl w-full flex flex-wrap">
                <!--add image with width 1/3 in tablet and large screen and remove it in mobile version-->
                <div class="hidden md:block md:w-1/3">
                    <img src="/summary.jpg" alt="Summer school picture" class="rounded-xl w-full aspect-square object-cover"/>
                </div>
                <div class="flex flex-wrap flex-col p-4 md:pl-8 rounded w-10/12 md:w-2/3">
                    <h1 class="text-4xl"><span class="border-b-2 border-cyan-400 pb-2">Our Program</span></h1>
                    <!-- add start and end time-->
                    <div class="text-sm text-gray-500 mt-4">
                        <span> <font-awesome-icon icon="fa-solid fa-calendar" class="mr-2"/> </span>
                        <span>15 Jul 2024 - 30 Jul 2024</span>
                    </div>
                    <p class="text-lg mt-4">
                        Hey there! Get ready for an awesome university summer school program happening from July 15th to July 30th. We've got something for everyone, whether you're a sports fanatic, an adventurer who loves both mountains and seas, a budding data and computer science guru, or someone who knows how to have a good time.
                    </p>
                    <p class="text-lg mb-2">
                        Picture this: two weeks filled with heart-pounding sports events that cater to all levels, exciting mountain and sea escapades that let you soak in nature's beauty, and courses on data and computer science that'll leave you with some serious skills. But that's not all – we've also ramped up the party scene to help you unwind, connect with others, and create memories that'll last a lifetime. And guess what? We're all ears for your ideas too – so if you have suggestions on how to improve our social activities, we're all about making this summer school the best it can be. Join us from July 15th to July 30th for an unforgettable summer adventure packed with sports, learning, exploration, and tons of fun!
                    </p>
                </div>
            </div>
        </div>
        <nav class="flex flex-wrap text-center justify-center my-4">
            <!--link to the Contact us -->
            <nuxt-link to="/contact-us" class="cta-btn text-indigo-950 border-indigo-950 md:w-1/3 w-10/12">Contact us</nuxt-link>
        </nav>
        <!--List of speakers -->
        <!-- <list-cards :items="top_speakers" title="Top Speakers" :isBackgroundDark="false" /> -->
    </div>
</template>

<script>
import PostCard from "@/components/post-card.vue";

export default {
    components: {
        PostCard,
    },
};
</script>

<style scoped>
.bg-cover-image {
    background-image: url('/cover.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    width: 100vw;
}

.cta-btn {
    @apply text-lg border-2 hover:border-cyan-400 hover:text-cyan-400 animate-item rounded-lg px-8 py-2;
}
</style>