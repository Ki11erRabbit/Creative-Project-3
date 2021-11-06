<template>
  <div class="contact">

    <h1>About the photographer</h1>

  <p>Ever since man figured out how to draw, we have figured out better ways to draw.
    I use the latest drawing tools to preserve a moment and memento of your past for
    you and your kids to enjoy. I have been taking photographs since I learned and
  understood what a photo is. And since then photography has been my passion wherever
I find myself in the world. I set up this website so that I may lend my passion to others.</p>

<!-- TODO replace with someone from this person does not exist <img class="photo" src="/images/photos/Picture-of-me.jpg" alt="photographer">-->

  <h2>Put in Date and Time to reserve your free consultation</h2>
  <h3>All times that I am freely available</h3>
<template>
  <v-calendar
:attributes='attributes'
    />
</template>



  <div class="form">
    <p>Put date and time as MM/DD/YYYY h:mm xM</p>
      <input type="text">
    <div class="button">
      <input type="button" onclick="location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';" value="reserve time now" />
    </div>
  </div>
<<<<<<< HEAD


  </div>
=======
</div>


>>>>>>> 7b4eb457187f7cb0063d421ca6c96b71331627bd
</template>

<style scoped>
.content {
  align-content: center;
  display: block;
}
.content p{
  display: flex;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 7%;
  padding-bottom: 3%;
}

h2, h3 {
  padding-bottom: 2%;
}


.form {
  padding-top: 3%;
  padding-bottom: 3%;
}
.form p{
  text-align: center;
  display: block;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 0%;
  padding-bottom: 0%;
}
.button{
  padding-top: 1%;
}



</style>

<script>
const dateObject = new Date();
const thisMonth = dateObject.getMonth();
const thisYear = dateObject.getFullYear();

export default {
  data() {
    const todos = [
      {
        description: '7am - 8am',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'red',
      },
      {
        description: '9am - 10am',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'indigo',
      },
      {
        description: '1pm - 2pm',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'green',
      },
      {
        description: '2pm - 3pm',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'orange',
      },
      {
        description: '4pm - 5pm',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'yellow',
      },
      {
        description: '7pm - 8pm',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'purple',
      },
      {
        description: '9pm - 10pm',
        isComplete: false,
        dates: [
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
          new Date (thisYear, thisMonth, (Math.random()*31 +1)),
        ],
        color: 'pink',
      },
    ];
    return {
      incId: todos.length,
      todos,
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
      label: todo.description,
      visibility: 'click',
      hideIndicator: true,
          },
          customData: todo,
        })),
      ];
    },
  },
};




</script>
