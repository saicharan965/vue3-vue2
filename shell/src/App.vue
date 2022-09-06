

<template>


<div>

<vueButton />
<h1>Shell in vue3</h1>
<div id="HelloWorld"></div>
</div>

</template>

<script lang="ts">
import { vue2ToVue3 } from './utils';
//@ts-ignore
import HelloWorld from 'remote/HelloWorld';
export default {
  components: {
    vueButton: vue2ToVue3(HelloWorld, 'HelloWorld'),
  },
};
</script>
