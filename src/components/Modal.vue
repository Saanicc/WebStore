<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Tack för att du handlade hos oss!
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>

      <section>
        <slot name="body">
          <form ref="form" class="modal-form">
            <label class="input-modal">Vad tyckte om våra webshop?</label>
            <b-form-input
              id="type-range"
              v-model="value"
              type="range"
              min="0"
              max="100"
              step="1"
            >
            </b-form-input>
            <div class="div-modal">Ditt betyg: {{ value }}/100</div>
          </form>
        </slot>
      </section>

      <footer>
        <slot name="footer">
          <button type="button" class="btn-green" @click="close">
            Close Modal
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close')
      }
    },
    data() {
      return {
        value: 50
      }
    }
  }
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index: 9;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4aae9b;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4aae9b;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }
</style>
