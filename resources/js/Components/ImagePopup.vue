<template>
    <div>
        <!-- Thumbnail or preview of the image -->
        <img :src="thumbnail" alt="Thumbnail" @click="showPopup = true" style="cursor: pointer; max-width: 100px;"/>

        <!-- Popup Modal -->
        <div v-if="showPopup" class="modal-overlay" @click.self="showPopup = false">
            <div class="modal-content">
                <span class="close-btn" @click="showPopup = false">&times;</span>
                <img :src="imageSrc" alt="Full Image" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    imageSrc: { type: String, required: true },  // Full image source
    thumbnail: { type: String, required: false },  // Thumbnail image source
});

const showPopup = ref(false);
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
}

.modal-content img {
    width: 100%;
    height: auto;
    max-height: 100vh;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    color: #ff2d20;
    cursor: pointer;
    border:1px #1a202c;
}
</style>
