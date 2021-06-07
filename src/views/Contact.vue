<template>
    <div class="contact-container">
      <div class="container">
        <p v-if="errors.length">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" v-bind:key="error" v-bind:error="error">{{ error }}</li>
          </ul>
        </p>
          <form @submit.prevent="sendEmail">
              <label>Name</label>
              <input
                type="text"
                v-model="name"
                name="name"
                placeholder="Your Name"
              >
              <label>Email</label>
              <input
                type="email"
                v-model="email"
                name="email"
                placeholder="Your Email"
                >
              <label>Message</label>
              <textarea
                name="message"
                v-model="message"
                cols="30" rows="5"
                placeholder="Message">
              </textarea>
              <input type="submit" value="Send">
          </form>
      </div>
      <notifications group="notification" />
      <Footer />
    </div>
</template>

<style scoped>

.contact-container {
    padding-top: 100px;
}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  width: 50%;
  padding: 20px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #BFCC94;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #b0c07a;
}
</style>

<script>
  import Vue from 'vue'
  import emailjs from 'emailjs-com'

  import { init } from 'emailjs-com'
  init('user_TiTSwezkNDuf6XB9cHtHU')

  import {
    required,
    minLength,
    email
  } from 'vuelidate/lib/validators'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Footer
  },
  name: 'ContactUs',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      message: null
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(2)
    },
    email: {
      required,
      email
    },
    message: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    sendEmail(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      } else if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.message) {
        this.errors.push('Message required.');
      } else {
        Vue.notify({
        group: 'notification',
        title: 'Success',
        text: 'Ditt meddelande har registrerats\nVi kommer att kontakta dig snarast'
      })

      this.name = ''
      this.email = ''
      this.message = ''

      emailjs
          .send('service_c3b8enq', 'template_35snhib', "Meddelandet har skickats")
          .then(
            function(response) {
              console.log('SUCCESS!', response.status, response.text)
            },
            function(error) {
              console.log('FAILED...', error)
            }
          )
      }
      e.preventDefault();
    },
  }
}
</script>
