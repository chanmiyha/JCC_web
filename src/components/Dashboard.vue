<template>
  <v-main class="pt-2 pt-md-0">
    <h1 class="text-h3 font-weight-medium mb-5 text-middle"><br/>WELCOME</h1>
    <br/>
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <br/><br/>
    <h4 class="text-h4 font-weight-medium mb-5 text-middle">THE JAVA CREACRAFT</h4>
    <p class="subtitle-1 text-justify">
      The Java Creacraft, is a group of people who really understand 
      the meaning of art, the process of making, the process of sending 
      and trading art products.
    </p>
  </v-main>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/img_12.jpg'),
          },
          {
            src: require('@/assets/img_13.jpg'),
          },
          {
            src: require('@/assets/img_14.jpg'),
          },
          {
            src: require('@/assets/img_15.jpg'),
          },
        ],
      }
    },
  }
</script>