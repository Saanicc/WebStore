<template>
  <div>
    <div id="wrapper">
      <div class="container">
        <h3>FAQ's</h3>
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-1 variant="dark-color"
                >Hur lång tid tar leveransen?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-1"
              visible
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Leveransen tar oftast mellan 3-5 arbetsdagar</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2 variant="dark-color"
                >Erbjuder ni öppet köp?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Vi erbjuder öppet köp i två månader på oöppnade
                  produkter</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3 variant="dark-color"
                >Hur lång garanti erbjuder ni på era produkter?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Vi erbjuder två års garanti på alla våra produkter, förutom
                  de kinesiska, där erbjuds inga garantier.</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4 variant="dark-color"
                >Följer skal med produkterna?</b-button
              >
            </b-card-header>
            <b-collapse
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text
                  >Ja, vi skickar med ett standard skal med alla våra
                  produkter</b-card-text
                >
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }

  #wrapper {
    min-height: 100vh;
  }

  .contact-container {
    padding-top: 100px;
  }

  .container {
    margin-top: 120px;
    display: block;
    text-align: center;
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 95%;
    padding: 20px;
  }

  label {
    float: left;
  }

  input[type='text'],
  [type='email'],
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type='submit'] {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type='submit']:hover {
    background-color: #45a049;
  }
</style>

<script>
  import Footer from '../components/Footer.vue'
  export default {
    components: { Footer },
    name: 'Faq'
  }
</script>
