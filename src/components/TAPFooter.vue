<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import { Header, HeaderNav, HeaderNavItem, Menu } from "agnostic-vue";
import { Icon } from "agnostic-vue";
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>
<template>
  <footer class="footer-container">
    <div>
      <div class="footer-columns">
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: admin@tapggc.org</li>
            <li>Address: 1000 University Center Ln, Lawrenceville, GA 30043</li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Follow Us</h4>
          <ul class="social-media-icons">
            <li><a href="#"><img src="/logos/facebook-logo.svg"></a></li>
            <li><a href="#"><img src="/logos/instagram-logo.svg"></a></li>
            <li><a href="#"><img src="/logos/linkedin-logo.svg"></a></li>
          </ul>
        </div>
      </div>
      <div class="nsf-statement">
        <div cols="12">
          <p>Supported by National Science Foundation Broadening Participation in Computing (BPC) Demo Project #2315804</p>
          <a href="https://www.nsf.gov/"><img src="/public/logos/NSF_Official_logo.png" alt="NSF Logo"></a>
        </div>
      </div>
      <div class="copyright">
        <div cols="12">
          <p>&copy; {{year}} Technology Ambassador Program. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container{
    display: flex;
    position: relative;
    flex-direction: column;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding:  25px 0;
    background-color: var(--agnostic-gray-mid);
    font-weight: 300;
    margin-top: 20px;
    
}

.footer-columns {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: flex-start;

}

.footer-column {
  flex: 1;
}

h4 {
  margin-bottom: 10px;
  font-size: 18px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 5px;
}

.social-media-icons li {
  display: inline-block;
  margin-right: 10px;
}

.nsf-statement {
  margin-top: 20px;
  text-align: center;
}

.nsf-statement p {
  margin-bottom: 10px;
}

.nsf-statement a img{
  height: 80px;
}

.copyright {
  text-align: center;
}
</style>