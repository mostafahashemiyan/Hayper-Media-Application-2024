<template>
  <div>
    <ul class="flex flex-wrap justify-around text-sm md:text-base">
      <!-- Each li element represents a navigation link -->
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/'),
          }"
          to="/"
          >Collabration</nuxt-link
        >
      </li>
      <li
        :class="{
          'border-b-2 border-cyan-400 cursor-default relative':
            isActive('/lectures'),
        }"
      >
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/Activity'),
          }"
          to="/Activity"
          >Activity</nuxt-link
        >
        <div class="dropdown-content absolute hidden bg-white shadow-lg">
          <nuxt-link
            class="block px-4 py-2 text-black hover:bg-gray-200"
            to="/Activity/Projects"
            >Projects</nuxt-link
          >
          <nuxt-link
            class="block px-4 py-2 text-black hover:bg-gray-200"
            to="/Activity/Services"
            >Services</nuxt-link
          >
        </div>
      </li>
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/speakers'),
          }"
          to="/speakers"
          >Speakers</nuxt-link
        >
      </li>
      <!-- Dropdown Menu Example for Lectures -->

      <li
        :class="{
          'border-b-2 border-cyan-400 cursor-default relative':
            isActive('/More information'),
        }"
      >
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/More information'),
          }"
          to="/More information"
          >More information</nuxt-link
        >
        <div class="dropdown-content absolute hidden bg-white shadow-lg">
          <nuxt-link
            class="block px-4 py-2 text-black hover:bg-gray-200"
            to="/More information/About Us"
            >About Us</nuxt-link
          >
          <nuxt-link
            class="block px-4 py-2 text-black hover:bg-gray-200"
            to="/More information/Contact Us"
            >Contact Us</nuxt-link
          >
        </div>
      </li>
      <!-- Add other navigation links as required -->
    </ul>
  </div>
</template>

<script>
// from url find which link is active
export default {
  computed: {
    activeLink() {
      return this.$route.path;
    },
  },
  // nuxt-link to is active if activeLink is eqaul to value of to attribute or it starts with value of to attribute except for the home page
  methods: {
    isActive(to) {
      if (to === "/" && this.activeLink === "/") {
        return true;
      } else if (to !== "/" && this.activeLink.startsWith(to)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind utility classes with additional hover styles */
.dropdown-content {
  display: none; /* Hidden by default */
  min-width: 160px; /* Set a min-width if necessary */
  z-index: 2; /* Positioned above other content */
}

li:hover .dropdown-content {
  display: block; /* Show dropdown when hovering over li element */
}
</style>
