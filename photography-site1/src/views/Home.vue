<template>
  <div class="home">



      <div class="page">
      <div class="content">

          <!--<img class="photo" src="images/photos/JCS.jpg" alt="Japanese-Colonel-Sanders">    to be added back in later-->

        <p>In need of a third or fith hand for all of those precious moments in
        life? Then allow me to be your photographer. I'll be there for your marriage.
      I'll be there for your first baby photos. I'll be there for your child's first day
    of school. Then when they are off to college I'll be there too. And when you are
    celebrating your 50th anniversary, I'll hopefully be there for you too.</p>
      </div>
    <!-- rick astley quote -->

    </div>

    <div class="footer">

    <a href="https://github.com/Ki11erRabbit/Creative-Project-3"> GitHub
    <p>Made by Alec Davis and Louisa Dayton</p></a>
    </div>
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

<style>
* {
  margin: 0;
  padding: 0;
  color: #3c4253; /* a nice dark bluish grey */
  box-sizing: border-box;
}
body {
  background-color: #d8dce5; /* blueish light grey */
}

.page {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #d8dce5; /* blueish light grey */
}

.content {
  background-color: #fff9ec; /* warm tan-white color */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #3c4253; /* a nice dark bluish grey */
  border-radius: 5px;
}

.content {
  padding: 100px;
}
.footer {
  background-color: #fff9ec; /* warm tan-white color */
  border: 2px solid #3c4253 ; /* a nice dark bluish grey */
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
}


</style>
