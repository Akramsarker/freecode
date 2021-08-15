<template>
  <footer>
    <div id="footer-section">
      <div class="container">
        <div class="footer-logo">
          <h1>English Batayon</h1>
          <p><span class="material-icons"> call </span> &nbsp;+8801790825863</p>
          <p><i class="fas fa-envelope"> </i> &nbsp;team@englishba.tech</p>
          <i class="fas fa-globe"> </i> &nbsp;<a href="">www.englishba.tech</a>
        </div>
        <div class="footer-info">
          <h2>Product</h2>
          <li><a href="#">Careere</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Insights</a></li>
          <li><a href="#">PCI Compliance</a></li>
          <li><a href="#">Integratlons</a></li>
          <li><a href="#">Pricing</a></li>
        </div>
        <div class="footer-info">
          <h2>For Developers</h2>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Knowledge Base</a></li>
          <li><a href="#">System Status</a></li>
          <li><a href="#">Turorials</a></li>
          <li><a href="#">Security</a></li>
        </div>
        <div class="footer-info">
          <h2>Resource</h2>
          <li><a href="#">About</a></li>
          <li><a href="#">Leadership</a></li>
          <li><a href="#">Press/News</a></li>
          <li><a href="#">Careers/Team</a></li>
          <li><a href="#">Contact Us</a></li>
        </div>
        <div class="footer-info">
          <h2>Follow Us</h2>
          <div class="icons-items">
            <div class="icon-bg">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="icon-bg">
              <i class="fab fa-youtube"></i>
            </div>
            <div class="icon-bg">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="icon-bg">
              <i class="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-buttom">
        <div class="list-items">
          <div class="item">
            <li><a href="#">Platform</a></li>
          </div>
          <div class="item">
            <li><a href="#">Products</a></li>
          </div>
          <div class="item">
            <li><a href="#">Resources</a></li>
          </div>
        </div>
        <div class="right-side">
          <p>&copy; 2021 Conneckt.com | All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/styles/style.scss';

#footer-section {
  .container {
    @extend .main-container;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    border-bottom: 1px solid #cccccc;
    padding-bottom: 4rem;

    .footer-logo {
      h1 {
        margin-bottom: 1.5rem;
        @extend .logo-style;
      }

      p {
        margin-bottom: 1rem;
        color: $a-text-color;
      }

      i {
        color: $a-text-color;
      }
    }

    .footer-info {
      h2 {
        color: $main-heading-color;
        font-size: 1.1rem;
        margin-bottom: 2rem;
      }

      li {
        list-style: none;
        font-size: 1rem;
        margin-bottom: 20px;

        a {
          color: $a-text-color;
          transition: 0.3s;

          &:hover {
            color: #3f3c3c;
            text-decoration: underline;
          }
        }
      }

      .icons-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        justify-items: center;
        align-items: center;

        .icon-bg {
          @extend .flex;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid #eaebed;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background-color: #eeeeee;
          }

          i {
            font-size: 1.2rem;
          }

          &:nth-child(1) {
            color: #068ad3;
          }

          &:nth-child(2) {
            color: #f34a38;
          }

          &:nth-child(3) {
            color: #55adee;
          }

          &:nth-child(4) {
            color: #da1657;
          }
        }
      }
    }
  }

  .footer-buttom {
    @extend .main-container;
    display: flex;
    padding: 3rem 0 3rem 0;
    justify-content: space-between;
    align-items: center;

    .list-items {
      display: flex;

      .item {
        margin-right: 20px;

        &:nth-child(3) {
          margin-right: auto;
        }

        li {
          a {
            font-size: 0.8rem;
            color: #4e5259;
            transition: 0.3s;

            font-size: 15px;

            &:hover {
              text-decoration: underline;
              color: #7188f9;
            }
          }
        }
      }
    }

    .right-side {
      p {
        color: #4e5259;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
