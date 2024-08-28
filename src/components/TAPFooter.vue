<script setup>
// Import AgnosticUI global common & component CSS
import "agnostic-vue/dist/common.min.css";
import "agnostic-vue/dist/index.css";
import '../styles/global.css';


import { ref } from 'vue';

const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;
const year = ref(new Date().getFullYear());

</script>

<template>
  <!-- why no spread?!?!?!?! -->
  <footer class="footer-container ">
    <div>
      <div class="footer-columns flex flex-row flex-grow-1 flex-shrink-1 flex-wrap flex-fill">

        <!--- col 1 --->
        <div class="footer-column"> 
          <div class="tap-logo">
            <p>
              <a href="https://www.tapggc.org/" target="_blank" rel="noopener noreferrer"><img :src="`${base}/logos/TAPInvisible2.png`" alt="TAP Logo"></a>
            </p>      
            <h4>
              <a href="https://www.ggc.edu/academics/school-of-science-and-technology/research-internships-service-learning/technology-ambassador-program/tap-application" target="_blank">Apply</a>
            </h4>
          </div>
        </div> 

        <!--- col 2 --->
        <div class="footer-column"> 
          <div class="nsf-statement">
            <p>
              <a href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer"><img :src="`${base}/logos/NSF_Official_logo.png`" alt="NSF Logo"></a>
            </p>
            Supported by National Science Foundation Broadening Participation in Computing (BPC) 
            Demo Project #2315804        
          </div>
        </div> 

        <!--- col 3 --->
        <div class="footer-column" style="text-align: left;"> 
          <h4>Contact Us</h4>
          <ul>
            <li>Email: <a href="mailto:admin@tapggc.org" target="_blank">admin@tapggc.org</a></li>
            <li>Address: 1000 University Center Ln, Lawrenceville, GA 30043</li>
          </ul>
          
          <h4>Follow Us</h4>
          <ul class="social-media-icons">
            <li><a href="#" target="_blank" rel="noopener noreferrer"><img :src= "`${base}/logos/facebook-logo.svg`" alt="Facebook Logo"></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><img :src= "`${base}/logos/instagram-logo.svg`" alt="Instagram Logo"></a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><img :src= "`${base}/logos/linkedin-logo.svg`" alt="LinkedIn Logo"></a></li>
          </ul>
        </div> 
      </div> 
      <!--end of footer colums -->
        
      <div class="copyright">
          <p>&copy; {{year}} Technology Ambassador Program. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container{
    /* display: flex;
    flex-direction: row;
    align-items: center;   
    bottom: 0;
    justify-content: space-between;
    padding: 1em;
    width: 100%;
    flex-flow: row wrap;

    margin-top: 0.25em; */
    
}

.footer-columns {
  align-items: center;
  justify-content: center;

}

.footer-column {
  flex: 1;
  padding: 1em;
  /* min-width: 250px; */
  box-sizing: border-box;
  text-align: center;
  min-width: 35rem !important;
  max-width: 40rem;
}

h4 {
  margin-bottom: 1em;
  font-size: 1.25em;
}

ul {
  list-style-type: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 1em;
  /* justify-content: space-evenly; */
}

.social-media-icons li {
  display: inline-block;
  margin-right: 7px;
}

.social-media-icons li a img{
  height: 32px;
}

/* .nsf-statement {
  font-size: 12px;
} */

.nsf-statement p {
  margin-bottom: 4px;
}

.nsf-statement a img{
  height: 52px;
}
.tap-logo a img{
  height: 250px;
}

.copyright {
  text-align: center;
  margin-top: 1em;
}

/* Responsive Design */
/* @media (max-width: 768px) {
  .footer-columns {
    flex-direction: column;
  }

  .footer-column {
    flex: 1 0 100%;
    max-width: 100%;
    margin-bottom: 1em;
    text-align: center;
    
  } */
/* } */

</style>
