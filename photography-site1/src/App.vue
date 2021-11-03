<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
  background-color: #fff9ec; /* warm tan-white color */
  border: 2px solid #3c4253; /* a nice dark bluish grey */
  border-radius: 5px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983; /*TODO change to different color*/
}


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
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
}


.content h1 {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
}

.content p{
  display: flex;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 10%;
  padding-bottom: 10%;
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
