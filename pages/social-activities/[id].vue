<template>
    <div class="w-full" v-if="!loading">
        <BreadCrumb :crumbs="crumbs" v-if="!loading"/>
        <div class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400">
            <div class="flex flex-wrap flex-col w-full items-center justify-center">
                <div class="flex flex-wrap w-full items-start justify-center md:justify-between">
                    <!--image of width 1/5 in tablet and large screen and 10/12 in mobile-->
                    <img :src="activity.picture" :alt="activity.title" class="md:rounded-xl w-full md:w-2/5  aspect-16/9 md:aspect-square object-cover">
                    <!--Other content-->
                    <div class="flex flex-wrap flex-col w-10/12 md:w-3/5 md:pl-8 md:pr-4 pl-0 pr-0 py-4">
                        <!--Name with the icon of user-->
                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'mountain']" class="mr-2 text-lg"/></span>
                            Activity
                        </h2>
                        <h3 class="info-content">
                            <span class="font-bold text-2xl">{{ activity.title }}</span>
                        </h3>

                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'tags']" class="mr-2 text-lg"/></span>
                            Type
                        </h3>
                        <p class="info-content">
                            {{ activity.type }}
                        </p>

                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-lg"/></span>
                            Time
                        </h3>
                        <p class="info-content">
                            {{ activity.start.toLocaleString('en-Us') }} - {{ activity.end }}
                        </p>
                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'location-dot']" class="mr-2 text-lg"/></span>
                            Location
                        </h3>
                        <p class="info-content">
                            {{ activity.location }}
                        </p>
                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'circle-info']" class="mr-2 text-lg"/></span>
                            Activity Summary
                        </h3>
                        <p class="info-content">
                            {{ activity.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const client = useSupabaseClient()
const route = useRoute()
const loading = ref(true)

async function getItem() {
    const { data, error } = await client.from('SocialActivity').select('*').eq('id', route.params.id).single();
    if (error) {
        console.error('Error fetching data:', error.message);
        // send to not found page
        throw createError({
          statusCode: 404,
          message: 'not found',
          fatal: true
        })
        return;
    }
    data.start = new Date(data.start).toLocaleString('default', { month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' }) ;
    data.end = new Date(data.end).toLocaleString('default', { month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' }) ;
    return data;
}

const activity = await getItem();
console.log(activity)
function getBreadCrumb(route) {
    // split route path by '/' and remove empty string name is Home and link is '/'
    // make every name first letter uppercase
    // replace - with space
    
    let crumb = route.path.split('/').map((item) => {
        if (item == '') {
            return {
                name: 'Home',
                link: '/',
            };
        }
        return {
            name: item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' '),
            // link is cumulative of previous link and current item link joined by '/'
            link: route.path.split(item)[0] + item,
        };
    });

    // change last item name to title
    crumb[crumb.length - 1].name = activity.title;
    return crumb;
}
const crumbs = getBreadCrumb(route);

loading.value = false;
</script>

<style scoped>
.info-label {
    @apply text-xl text-indigo-950;    
}
.info-content {
    @apply text-base text-gray-800 mb-4;
}
</style>
