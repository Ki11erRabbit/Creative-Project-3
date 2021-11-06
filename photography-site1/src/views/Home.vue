<template>
  <div class="home">

      <div class="home-content">

          <img alt="Japanese-Colonel-Sanders" src="../assets/JCS.jpg">
          <!--<img class="photo" src="images/photos/JCS.jpg" alt="Japanese-Colonel-Sanders">    to be added back in later-->

        <p>In need of a third or fith hand for all of those precious moments in
        life? Then allow me to be your photographer. I'll be there for your marriage.
      I'll be there for your first baby photos. I'll be there for your child's first day
    of school. Then when they are off to college I'll be there too. And when you are
    celebrating your 50th anniversary, I'll hopefully be there for you too.</p>
      </div>
    <!-- rick astley quote -->

  </div>
</template>



<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

/*export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}*/
</script>

<style scoped>

.home-content {
  background-color: #fff9ec; /* warm tan-white color */
  display: flex;
  flex-wrap: nowrap;
}

.home-content p{
  display: flex;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 10%;
  padding-bottom: 10%;
}
.home-content img {
  padding-top: 1%;
  padding-left: 3%;
  padding-bottom: 1%;
  max-width: 28%;
  object-fit: cover;
  display: flex;
}
</style>
