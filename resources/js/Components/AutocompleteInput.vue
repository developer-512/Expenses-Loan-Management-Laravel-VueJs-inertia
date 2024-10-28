<script setup>
import axios  from "axios";
import {onBeforeUnmount, onMounted, ref, watch, watchEffect} from "vue";
const props = defineProps({
    modelValue: {
        type: String,
        default: () => null,
    }
})
const search = ref(props.modelValue);
const suggestions = ref([]);
const emit = defineEmits(['update:modelValue'])
const onInput = async () => {
    if (search.value.length < 2) {
        suggestions.value = [];
        return;
    }
    console.log(search.value);
    try {
        const response = await axios.get(route('autocomplete'), {
            params: { query: search.value },
        });
        suggestions.value = response.data;
        // console.log(suggestions);
    } catch (error) {
        console.error(error);
    }
};
// Watch for changes to modelValue from the parent component
watch(() => props.modelValue, (newValue) => {
    search.value = newValue;
});
// Update the parent whenever `search` changes
watchEffect(() => {
    emit('update:modelValue', search.value);
});
const selectSuggestion = (item) => {
    search.value = item;
    emit('update:modelValue', item);
    suggestions.value = [];
};
// Detect click outside suggestions
const handleClickOutside = (event) => {
    if (!event.target.closest(".autocomplete-area")) {
        suggestions.value = [];
    }
};

// Set up event listener for clicks outside
onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
// console.log(suggestions);
</script>

<template>
    <div class="w-full autocomplete-area">
        <input type="text" id="title"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
               v-model="search" @input="onInput"

        />
            <ul v-if="suggestions.length" class="absolute bg-white rounded-lg block w-full max-w-80">
                <li v-for="(item, index) in suggestions" :key="index" @click="selectSuggestion(item)">
                    {{ item }}
                </li>
            </ul>
    </div>
</template>

<style scoped>
ul {
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
li {
    padding: 8px;
    cursor: pointer;
}
li:hover {
    background-color: #f0f0f0;
}
</style>
