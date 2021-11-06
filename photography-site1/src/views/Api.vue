<template>
  <div class="api">
      <div class="api-content">
          <h1>Edit your own photos here!</h1>
          <h2>Click on the image below to edit it, or upload your own image.</h2>
          <input type="file" accept="image/jpeg" @change=uploadImage>

          <PixoImage id="pImg" v-bind:src="src" @edited="updateSrc" />
      </div> <!-- end of api-content -->
  
  </div>
</template>

<script>
import PixoImage from '../components/PixoImage.vue'

export default {
  name: 'Api',
  components: {
    PixoImage
  },
  data: () => ({
    src: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
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

<style scoped>

.api-content h1 {
  margin-top: 30px; 
  margin-bottom: 30px; 
}

.api-content img {
  padding-top: 1%;
  padding-left: 3%;
  padding-bottom: 1%;
  max-width: 60%;
  object-fit: cover;
  display: flex;
}


</style>
