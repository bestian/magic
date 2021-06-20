<template>
  <q-page class="container">
    <q-input type="text" name="s" v-model="s" placeholder="關鍵字查詢" />
    <div v-for="item in search(items, s)" :key="item.n">
      <h3>{{item.n}}</h3>
      <br/>
      <video v-if ="item.src" width="560" height="315" :src="item.src" :title="item.n" controls=""></video>
      <iframe v-if="item.iframe" width="560" height="315" :src="item.iframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      s: null,
      items: [
        {
          n: '4A出現',
          src: './4A出現.mp4'
        },
        {
          n: '古典迫牌',
          iframe: 'https://www.youtube.com/embed/yoaeKKNDW5Y'
        },
        {
          n: '撥牌迫牌',
          iframe: 'https://www.youtube.com/embed/6M77IE4eiwU'
        }
      ]
    }
  },
  methods: {
    search(list, k){
      return list.filter((o) => !k || o.n.indexOf(k) > -1)
    }
  }
}
</script>

<style type="text/css" scoped="">
	.container {
		max-width: 800px;
		margin: 0 auto;
	}
</style>
