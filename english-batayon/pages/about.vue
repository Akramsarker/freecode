<template>
  <div class="about-page-container">
    <section id="about-section">
      <h1>WHO WE ARE</h1>
      <div class="container">
        <div class="about-item">
          <div class="about-image">
            <img src="image/Rabbi.jpg" alt="" />
          </div>
          <div class="about-info">
            <div class="text-center">
              <h2>Take Self Assesment</h2>
              <p>
                From finding relevant media contacts to sending eye-catching
                visual press releases, Prowly has everything you need your PR
                work done
              </p>
            </div>
          </div>
        </div>
        <div class="about-item">
          <div class="about-info">
            <div class="text-center">
              <h2>Take Self Assesment</h2>
              <p>
                From finding relevant media contacts to sending eye-catching
                visual press releases, Prowly has everything you need your PR
                work done
              </p>
            </div>
          </div>
          <div class="about-image">
            <img src="image/Rabbi.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="team-member">
      <h1>Our Amazing Team</h1>

      <div class="container">
        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="card">
          <img src="image/Rabbi.jpg" alt="" />
          <h3>SM Rabbi Hossain</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/styles/style.scss';

#about-section {
  h1 {
    color: $main-heading-color;
    text-align: center;
    font-size: $main-font-size;
    padding: 7%;
  }

  .container {
    @extend .main-container;

    .about-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 7rem;
      margin-bottom: 10rem;

      .about-info {
        .text-center {
          padding: 20px 0 20px 20px;

          h2 {
            color: $main-heading-color;
            font-size: 2rem;
            margin-bottom: 2rem;
          }

          p {
            color: $main-paragraph-color;
            font-size: 1rem;
            line-height: 1.9rem;
          }
        }
      }
    }
  }
}

#team-member {
  max-width: 1200px;
  margin: auto;
  margin-bottom: 9rem;

  h1 {
    font-size: $main-font-size;
    color: $main-heading-color;
    text-align: center;
    padding: 6%;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    grid-gap: 30px;
    max-width: 800px;
    margin: auto;

    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      transition: 0.3s;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      h3 {
        color: $main-paragraph-color;
        padding-top: 20px;
        font-size: 1.1rem;
        text-align: center;
      }

      p {
        color: $main-paragraph-color;
        font-size: 0.9rem;
        line-height: 30px;
        margin-bottom: 15px;
        text-align: center;
      }
    }
  }
}
</style>
