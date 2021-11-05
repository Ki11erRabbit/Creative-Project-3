<template>
  <div class="api">
    <div class="page">
      <div class="content">
          <h1>Upload an image to edit or edit the image below</h1>
          <input type="file" accept="image/jpeg" @change=uploadImage>

          <PixoImage id="pImg" v-bind:src="src" @edited="updateSrc" />
      </div> <!-- end of api-content -->
    </div> <!-- end of page -->

<div class="footer">
  <a href="https://github.com/Ki11erRabbit/Creative-Project-3"> GitHub
    <p>Made by Alec Davis and Louisa Dayton</p></a>
</div>

  </div>
</template>

<script>
import PixoImage from '../components/PixoImage.vue'

export default {
  name: 'App',
  components: {
    PixoImage
  },
  data: () => ({
    src: 'https://www.peanuts.com/sites/default/files/cb-color.jpg',
  }),
  methods: {
    updateSrc(src) {
      this.src = src;
    }, 
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.src = e.target.result; 
      };
    }
  }
}
</script>

<style>
#pImg {
  margin: auto; 
  margin-top: 30px; 
  width: 90%;  
}

.content h1 {
  margin-top: 30px; 
  margin-bottom: 30px; 
}


</style>
