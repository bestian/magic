<template>
  <q-page class="container">
    <h3>4A出現</h3>
    <br/>
    <video width="560" height="315" :src="'./4A出現.mp4'" title="4A出現" controls=""></video>
  	<h3>古典迫牌</h3>
  	<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yoaeKKNDW5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br/>
  	<h3>撥牌迫牌</h3>
  	<br/>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6M77IE4eiwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style type="text/css" scoped="">
	.container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
