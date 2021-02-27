<template>
  <div>
    <nav class="navbar is-transparent is-fixed-top topNav">
      <div class="container">
        <div class="navbar-brand">
          <a href="https://www.aaaimx.org" class="navbar-item">
            <img
              src="https://www.aaaimx.org/img/sprites/aaai-transpeps.png"
              height="28"
            />
          </a>
          <div class="navbar-burger burger" data-target="topNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="topNav" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a
                    class="button is-small is-primary"
                    href="forms/become-a-member"
                  >
                    <b-icon icon="discord"></b-icon>&nbsp;
                    <span> Become a member </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <figure class="image is-128x128">
            <img
              src="https://www.aaaimx.org/img/sprites/aaaimx-transparent.png"
            />
          </figure>
        </div>
        <div class="columns">
          <div class="column is-9">
            <div class="box content">
              <template v-for="skeleton in 3">
                <article v-if="isLoading" class="post" :key="skeleton">
                  <div class="media">
                    <div class="media-left">
                      <p class="image is-48x48">
                        <b-skeleton
                          circle
                          width="48px"
                          height="48px"
                        ></b-skeleton>
                      </p>
                    </div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <b-skeleton active></b-skeleton>
                          <b-skeleton height="80px"></b-skeleton>
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item" v-for="i in 3" :key="i">
                            <span class="icon is-small">
                              <b-skeleton></b-skeleton>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </article>
              </template>

              <article v-for="member in list" :key="member.id" class="post">
                <div class="media">
                  <div class="media-left">
                    <p class="image is-48x48">
                      <img :src="member.avatar" />
                    </p>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <h4>{{ member.name }}</h4>
                      <a href="#">@{{ member.username }}</a> joined at
                      {{ member.dateJoined }} <br />
                      <b-tag
                        v-for="role in member.roles.filter(r => r !== '@everyone')"
                        :key="role"
                        rounded
                        type="is-link is-light"
                        ><a @click="listQuery.role = role">{{ role }}</a></b-tag
                      >
                    </div>
                  </div>
                  <div class="media-right is-hidden-mobile">
                    <span class="has-text-grey-light"
                      ><i class="fa fa-id-card"></i> {{ member.id }}</span
                    >
                  </div>
                </div>
              </article>
              <!-- <nav class="pagination" role="navigation" aria-label="pagination">
              <a
                class="pagination-previous"
                @click="listQuery.page--"
                title="This is the first page"
                >Previous</a
              >
              <a class="pagination-next" @click="listQuery.page++">Next page</a>
            </nav> -->
            </div>
          </div>
          <div class="column is-3">
            <a
              class="button is-primary is-rounded is-block is-alt is-small"
              href="#"
            >
              {{ list.length }} of {{ total }} members</a
            >
            <aside class="menu">
              <p class="menu-label">Tags</p>

              <ul class="menu-list">
                <b-tag
                  rounded
                  v-for="role in roles"
                  :key="role.name"
                  :style="{ border: 'solid 1px ' + role.color, margin: '2px' }"
                  :type="
                    listQuery.role === role.name
                      ? 'is-link'
                      : 'is-info is-light'
                  "
                  size="is-small"
                  ><a @click="listQuery.role = role.name"
                    ><b>{{ role.name }}</b></a
                  ></b-tag
                >
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <Footer />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get(
      'https://aaaimx-discord.herokuapp.com/api/members/'
    )
    return {
      members: data.members,
      list: data.members,
      roles: data.roles,
      total: data.members.length,
      isLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        offset: 0,
        role: null
      }
    }
  },
  head () {
    return {
      title: 'AAAIMX Community | Members',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'We are a group of students and researchers from the ITM along with researchers from the Center for Mathematical Research (CIMAT) and CentroGeo.'
        }
      ]
    }
  },
  watch: {
    listQuery: {
      handler (val) {
        this.filterMembers()
      },
      deep: true
    }
  },
  methods: {
    filterMembers () {
      this.isLoading = true
      setTimeout(() => {
        let offset = this.listQuery.limit * (this.listQuery.page - 1)
        let limit = this.listQuery.limit
        this.list = this.members
        this.total = this.members.length
        if (this.listQuery.role) {
          this.list = this.list.filter(
            m => m.roles.indexOf(this.listQuery.role) !== -1
          )
        }
        this.isLoading = false
        // this.list = this.list.slice(offset, offset + limit)
      }, 1000)
      if (process.client) {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style>
:root {
  --background: #f9f3de;
}

html,
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  background: var(--background);
}

footer {
  background-color: #f2f6fa !important;
}

.topNav {
  border-top: 5px solid #800000;
}

.topNav .container {
  border-bottom: 1px solid #e6eaee;
}

.container .columns {
  margin: 3rem 0;
}

.navbar-menu .navbar-item {
  padding: 0 2rem;
}

aside.menu {
  padding-top: 3rem;
}

aside.menu .menu-list {
  line-height: 1.5;
}

aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}

.button.is-primary.is-alt {
  background: #d9ad26;
  /* background: -webkit-linear-gradient(to bottom, #800000, #d9ad26);
  background: linear-gradient(to bottom, #800000, #d9ad26); */
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}

.media-left img {
  border-radius: 50%;
}

.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
.media-content .content h4 {
  margin-bottom: 0.1em;
}

article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}

article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.menu-list li {
  padding: 5px;
}
</style>
