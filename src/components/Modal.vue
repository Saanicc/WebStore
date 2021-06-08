<template>
  <div class="modal" v-show="value">
    <transition name="slide" appear>
      <div class="modal-container">
        <h1>Tack för att du handlat hos oss!</h1>
        <form ref="form" class="modal-form">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          <label class="input-modal">Vad tycker du om våra webshop?</label
          ><br />
          <b-form-input
            class="slider"
            id="type-range"
            v-model="rating"
            type="range"
            min="1"
            max="5"
            step="1"
            @change="changeMsg()"
          >
          </b-form-input>
          <span>{{ msg }}</span>
        </form>
        <button class="modal-button" @click.prevent="close()">
          Fortsätt shoppa
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('input', !this.value)
        this.$router.push({ path: '/' })
      },
      changeMsg() {
        if (this.rating == 2) {
          return (this.msg = 'Sådär')
        } else if (this.rating == 4) {
          return (this.msg = 'Bra')
        } else if (this.rating == 5) {
          return (this.msg = 'Perfekt')
        } else if (this.rating == 1) {
          return (this.msg = 'Dåligt')
        } else {
          return (this.msg = 'Okej')
        }
      }
    },
    props: {
      value: {
        required: true
      }
    },
    data() {
      return {
        showModal: true,
        rating: 3,
        msg: 'Dra ovanför för att ge oss en rating'
      }
    }
  }
</script>

<style scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal-container {
    opacity: 1;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;

    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border-radius: 16px;

    padding: 25px;
  }
  .modal-button {
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;

    display: inline-block;
    padding: 15px 25px;
    background-image: linear-gradient(to right, #157a6e, #bfcc94);
    border-radius: 8px;

    color: #fff;
    font-size: 18px;
    font-weight: 700;

    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.4s ease-out;
  }
  .modal-button:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
  h1 {
    color: #222;
    font-size: 32px;
    font-weight: 900;
    margin-bottom: 15px;
  }

  p {
    color: #666;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  .success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;
  }
  .success-checkmark .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #bfcc94;
  }
  .success-checkmark .check-icon::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }
  .success-checkmark .check-icon::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: rotate-circle 4.25s ease-in;
  }
  .success-checkmark .check-icon::before,
  .success-checkmark .check-icon::after {
    content: '';
    height: 100px;
    position: absolute;
    background: #ffffff;
    transform: rotate(-45deg);
  }
  .success-checkmark .check-icon .icon-line {
    height: 5px;
    background-color: #bfcc94;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
  }
  .success-checkmark .check-icon .icon-line.line-tip {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: icon-line-tip 0.75s;
  }
  .success-checkmark .check-icon .icon-line.line-long {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: icon-line-long 0.75s;
  }
  .success-checkmark .check-icon .icon-circle {
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(255, 255, 255, 0.5);
  }
  .success-checkmark .check-icon .icon-fix {
    top: 8px;
    width: 5px;
    left: 26px;
    z-index: 1;
    height: 85px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: #ffffff;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }
  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
  }
</style>
