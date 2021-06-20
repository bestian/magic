<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          變魔術
        </q-toolbar-title>

        <q-btn color = "secondary" @click="copy()">複製連結</q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          項目
        </q-item-label>
        <q-item to ="/">首頁</q-item>
        <q-item to ="/rule">魔術師三原則</q-item>
        <q-item to ="/band">橡皮筋魔術</q-item>
        <q-item to ="/great">神奇魔術</q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { copyToClipboard } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  methods: {
    copy() {
      copyToClipboard('https://bestian.github.io/magic/')
      .then(() => {
        window.alert('連結已複製')
        // success!
      })
      .catch(() => {
        // fail
      })
    }
  }
}
</script>
