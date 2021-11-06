<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/api">Photo Editor</router-link>
    </div>
    <div class="page">
      <div class="content">
        <router-view/>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/Ki11erRabbit/Creative-Project-3"> GitHub
      <p>Made by Alec Davis and Louisa Dayton</p></a>
    </div>
  </div>
</template>

<style>
body {
  background-color: #d8dce5; /* blueish light grey */
}
</style>

<style scoped>
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
  color: #3c4253; /* a nice dark bluish grey */
  text-decoration: none; 
}

#nav a.router-link-exact-active {
  color: #697dd7;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
* a {
  color: #3c4253; /* a nice dark bluish grey */
  text-decoration: none;
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
  color: #3c4253; /* a nice dark bluish grey */
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
