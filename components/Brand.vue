<template>
  <div>
    <section class="section">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2 register box">
          <div class="card">
            <div class="card-image">
              <figure class="image ">
                <img src="../assets/logos.png" alt="Placeholder image" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-2 register box">
          <div class="columns">
            <div class="column left is-hidden-mobile has-text-centered">
              <img
                src="https://www.aaaimx.org/img/sections-background/community.jpg"
              />
              <h2 class="title colored is-4">AAAIMX Student Chapter</h2>
              <p>
                We are a group of students and researchers from the ITM along
                with researchers from the Center for Mathematical Research
                (CIMAT) and CentroGeo. <br />
              </p>
              <br />
              <img
                src="https://www.aaaimx.org/img/sprites/aaai-transpeps.png"
                width="90px"
                alt=""
              />
              <img src="../assets/logo.png" width="90px" alt="" />
              <br />
              <small>
                Contributing to more students having knowledge of Artificial
                Intelligence and other increasingly popular related fields.
              </small>
            </div>
            <div class="column right">
              <slot />
              <br>
              <small
                ><em
                  >We appreciate your interest in helping this community that
                  strives every day to be better especially for you.</em
                ></small
              >
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  </div>
</template>

<style>
:root {
  --background: #f9f3de;
  --textDark: hsla(0, 0%, 0%, 0.66);
  --textLight: hsla(0, 0%, 0%, 0.33);
}

body {
  background: var(--background) !important;
  color: var(--textDark) !important;
}

.field:not(:last-child) {
  margin-bottom: 1rem;
}

.register {
  background: white;
}

.left,
.right {
  padding: 2rem;
}

.left .title {
  font-weight: 800;
  letter-spacing: -2px;
}

.left .colored {
  font-weight: 700;
  margin-top: 1rem !important;
  letter-spacing: -1px;
}

.left p {
  color: var(--textLight);
  font-size: 1.15rem;
}

.right .title {
  font-weight: 800;
  letter-spacing: -1px;
}

.right .description {
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  color: var(--textLight);
  font-size: 1rem;
}

.right small {
  color: var(--textLight);
}

input:focus {
  border-color: var(--brandColor) !important;
  box-shadow: 0 0 0 1px var(--brandColor) !important;
}
</style>
