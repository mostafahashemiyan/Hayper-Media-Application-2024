<template>
    <div v-if="!loading">
        <BreadCrumb />
        <!-- adding max screen-->
        <list-cards v-for="(value, key) in items" :key="key" :title="key" :items="value" class="py-4"/>
    </div>
</template>

<script setup>
const client = useSupabaseClient()
const loading = ref(true)

async function fetchLectures() {
    const { data, error } = await client
        .from('Lecture')
        .select('id, title, start, end, location, picture')
        .order('start', { ascending: true })
    if (error) {
        console.log(error)
        return []
    }
    // for each data add a t and tell is a lecture
    data.forEach((item) => {
        item.t = 'lectures'
    })
    return data
}

async function fetchActivities() {
    const { data, error } = await client
        .from('SocialActivity')
        .select('id, title, start, end, location, picture')
        .order('start', { ascending: true })
    if (error) {
        console.log(error)
        return []
    }
    // for each data add a t and tell is a social activity
    data.forEach((item) => {
        item.t = 'social-activities'
    })
    return data
}
let result = []
result = result.concat(await fetchLectures())
result = result.concat(await fetchActivities())

// order result based on start time
result.sort((a, b) => {
    return new Date(a.start) - new Date(b.start)
})

console.log(result)

let items = {}
// group result by date dd/MM/yyyy of start and make sure order is correct
result.forEach((item) => {
    const date = new Date(item.start).toLocaleDateString('en-GB')
    if (!items[date]) {
        items[date] = []
    }
    // for each item
    //title->title 
    //subtitle-> start(hh:mm) - end(hh:mm) | location
    //image_url->picture 
    //link->{item.t}/{item.id}
    
    items[date].push({
        title: item.title,
        subtitle: `${new Date(item.start).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} - ${new Date(item.end).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} | ${item.location}`,
        image_url: item.picture,
        link: `/${item.t}/${item.id}`
    })
})

console.log(items)
loading.value = false
</script>