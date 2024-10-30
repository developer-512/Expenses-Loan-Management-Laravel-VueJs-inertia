<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    pagination: Object
})
</script>

<template>
    <nav class="relative flex justify-center">
        <template v-for="link in pagination.links" :key="link.label">
            <Link
                preserve-scroll
                :href="link.url ?? ''"
                v-html="link.label"
                class="flex items-center justify-center px-3 py-2 text-sm rounded-lg text-gray-200"
                :class="{ 'bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700': link.active, '!text-gray-300': !link.url }"
            />
        </template>
    </nav>
</template>
<style scoped>

</style>
