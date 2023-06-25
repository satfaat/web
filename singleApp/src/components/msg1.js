// my-component.js
export default {
  data() {
    return {
      count: 0,
      message: 'Hello Vue!'
    }
  },
  computed: {
    reversedMessage() {
      return
        this.message.split("").reverse().join("");
    }
  },
  template: `<div>
  <p>count is {{ count }}</p>
  <p>{{message}}</p>
  <p>{{reversedMessage}}</p>
  </div>`
}