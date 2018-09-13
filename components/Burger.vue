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
  margin: 8px 0;
  position: relative;
  user-select: none;
  display: block;
}

.burger,
.burger:before,
.burger:after {
  background-color: #000000;
  display: block;
  height: 5px;
  outline: 1px solid transparent;
  transition-duration: 0.3s;
  transition-property: background-color, transform;
  width: 30px;
}

.burger:before,
.burger:after {
  content: '';
  position: absolute;
}

.burger:before {
  top: -8px;
}

.burger:after {
  top: 8px;
}

.burger.active {
  background-color: transparent;
}

.burger.active:before {
  transform: translateY(8px) rotate(45deg);
}

.burger.active:after {
  transform: translateY(-8px) rotate(-45deg);
}
</style>