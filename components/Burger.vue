<template>
  <div class="burger" @click="onclick"></div>
</template>

<script>
export default {
  name: 'Burger',
  props: {
    onclick: {
      type: Function
    }
  }
}
</script>

<style>
.burger {
  cursor: pointer;
  margin: 6px 0;
  position: relative;
  user-select: none;
  display: block;
}

.burger,
.burger:before,
.burger:after {
  background-color: #6f6f6f;
  display: block;
  height: 2px;
  outline: 1px solid transparent;
  transition-duration: 0.3s;
  transition-property: background-color, transform;
  width: 20px;
}

.burger:before,
.burger:after {
  content: '';
  position: absolute;
}

.burger:before {
  top: -5px;
}

.burger:after {
  top: 5px;
}

.burger.active {
  background-color: transparent;
}

.burger.active:before {
  transform: translateY(5px) rotate(45deg);
}

.burger.active:after {
  transform: translateY(-5px) rotate(-45deg);
}
</style>