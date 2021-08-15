<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-logo">
        <a href="/">English Batayon</a>
      </div>
      <ul class="nav_list">
        <li><a href="#landing">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#company-section">Company</a></li>
        <li><a href="#pricing-cards">Pricing</a></li>
        <li><a href="#contact-section">Contact</a></li>
        <button class="btn">Login</button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/styles/style.scss';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: $nav-background-color;
  z-index: 9;

  .container {
    @extend .grid;
    @extend .main-container;
    padding: 25px 0 0 0;

    .nav-logo {
      a {
        @extend .logo-style;
      }
    }

    .nav_list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li {
        a {
          @extend a;
          font-size: 17px;
          font-weight: 400;
          padding: 10px;

          &:hover {
            color: #16171a;
          }
        }
      }

      .btn {
        @extend .btn-primary;
        padding: 10px 20px;
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
}
</style>
