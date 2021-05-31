<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div>
        <router-link to="/about">Om oss</router-link>
      </div>
      <div>
        <router-link to="/faq">FAQ</router-link>
      </div>
      <div class="social-media">
        <p>Kontakta oss</p>
        <a href="https://www.facebook.com">
          <img src="../assets/facebook.png" width="40px" height="40px" />
        </a>
        <a href="https://www.instagram.com">
          <img src="../assets/instagram.png" width="40px" height="40px" />
        </a>
        <a href="https://www.twitter.com">
          <img src="../assets/twitter.png" width="40px" height="40px" />
        </a>
        <a href="mailto:webstore.iths@gmail.com">
          <img src="../assets/mail.png" width="40px" height="40px" />
        </a>
      </div>
      <div id="copyright">
        <p>© 2021 Webstore, alla rättigheter reserverade</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    background-color: #284b63;
    color: #ffffff;
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    color: #ffffff;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
  }

  #copyright {
    font-size: 14px;
  }

  #copyright p {
    margin: 0;
  }

  .social-media {
    margin-bottom: 2em;
  }

  .social-media p {
    margin-bottom: 0.5em;
  }

  .social-media a {
    margin: 0 0.2em;
  }

  @media screen and (min-width: 768px) {
    .footer {
      height: 150px;
    }

    .footer-wrapper {
      width: 100%;
      display: grid;
      height: 100px;
      grid-template-columns: 250px 250px 250px;
    }

    #copyright {
      width: 100%;
      grid-area: 2 / span 3;
      margin: 1em 0 0 0;
    }

    .social-media {
      margin: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .footer-wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: 300px 300px 300px;
    }
  }
</style>
