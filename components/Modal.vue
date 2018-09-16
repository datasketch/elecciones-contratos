<template>
  <div class="modal__wrapper">
    <div class="modal column">
      <div class="modal__header">
        <div class="line v-centered justify-between">
          <slot name="header"></slot>
          <svg width="20" height="20" viewBox="0 0 20 20" @click="$emit('close')">
            <line x1="0" y1="0" x2="20" y2="20" stroke="black" stroke-width="2"></line>
            <line x1="20" y1="0" x2="0" y2="20" stroke="black" stroke-width="2"></line>
          </svg>
        </div>
      </div>
      <div class="modal__body item-fill">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
svg {
  cursor: pointer;
}

.modal__wrapper {
  align-items: center;
  background: rgba(0, 0, 0,0.85);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

.modal {
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  max-height: 95%;
  overflow: auto;
  width: 90%;
}

.modal__header {
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.21);
  font-family: 'Nixie One Regular', cursive;
  font-weight: 400;
  padding: 20px;
  position: sticky;
  text-align: left;
  top: 0;
}

.modal__body {
  padding: 20px;
}

.modal::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
}

.modal::-webkit-scrollbar-thumb {
  background-color: #B1C2DE;
  border: 2px solid #B1C2DE;
}

.modal::-webkit-scrollbar-track {
  background-color: #ffffff;
}
</style>
