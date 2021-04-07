
const App = new Vue({

  el: "#root",

  data:{
    eMail: [],
  },

  mounted: function(){

    // METODO CON SELF = THIS

    // let self = this;
    //
    // for (var i = 0; i < 10; i++) {
    //   axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function (email) {
    //     self.eMail.push(email.data.response);
    //   });
    // };

    // METODO CON ARROW FUNCTION

    for (var i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then ((email) => {
        this.eMail.push(email.data.response);
      });
    };

  },

  methods:{

  },

});
