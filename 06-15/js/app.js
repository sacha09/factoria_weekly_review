var app5 = new Vue({
  el: '#app',

  data: {
    message: 'Hello!'
  },
  // metodo para cambiar el orden de las letras
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
