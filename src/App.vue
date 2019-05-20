<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-icon>home</v-icon>
        <span>Outbreak Perfected</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <App2/>
    </v-content>
  </v-app>
</template>

<script>
import App2 from './App2'

export default {
  name: 'App',
  components: {
    App2
  },
  data () {
    return {
      //
    }
  }
}
</script>
