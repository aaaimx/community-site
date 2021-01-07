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
              <div class="has-text-centered">
                <h1 class="title is-4">
                  Inscripción a curso, taller o plática
                </h1>
                <p class="description">
                  Ingrese sus datos para validar su inscripción y recibirá un
                  correo de confirmación.
                </p>
              </div>

              <b-loading
                :is-full-page="true"
                v-model="isLoading"
                :can-cancel="false"
              ></b-loading>

              <form @submit.prevent="submit">
                <b-field
                  label="Nombre completo"
                  message="Nombre(s) y apellidos"
                >
                  <b-input
                    icon="account"
                    v-model="form.fullname"
                    placeholder="Tu nombre completo"
                    name="name"
                    required
                  />
                </b-field>

                <b-field
                  label="Correo electrónico"
                  message="Dirección de correo electrónico"
                >
                  <b-input
                    icon="email"
                    type="email"
                    v-model="form.email"
                    placeholder="Tu direcciòn de correo electrónico"
                    name="email"
                    required
                  />
                </b-field>
                <b-field
                  label="Evento"
                  message="Curso, taller o plática al que desea inscribirse"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona un evento"
                    v-model="form.event"
                    required
                  >
                    <option
                      v-for="(option, index) in events"
                      :key="index"
                      :value="option.id"
                    >
                      {{ option.title }}
                    </option>
                  </b-select>
                </b-field>
                <b-field
                  label="Adscripción"
                  message="Escuela o universidad de procedencia"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.adscription"
                    required
                  >
                    <option
                      v-for="(option, index) in universities"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                  <br />
                  <b-input
                    v-if="form.adscription === 'Otro'"
                    v-model="others.adscription"
                    placeholder="Especifique"
                    name="adscription"
                  />
                </b-field>
                <b-field
                  label="Departamento"
                  message="Departamento (solo estudiantes del ITM)"
                >
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.department"
                  >
                    <option
                      v-for="(option, index) in departments"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                  <br />
                  <b-input
                    v-if="form.department === 'Otro'"
                    v-model="others.department"
                    placeholder="Especifique"
                    name="department"
                  />
                </b-field>
                <b-field label="Carrera" message="Área o campo de estudio">
                  <b-select
                    expanded
                    placeholder="Selecciona una opción"
                    v-model="form.career"
                  >
                    <option
                      v-for="(option, index) in careers"
                      :key="index"
                      :value="option"
                    >
                      {{ option }}
                    </option>
                  </b-select>
                  <br />
                  <b-input
                    v-if="form.career === 'Otro'"
                    v-model="others.career"
                    placeholder="Especifique"
                    name="career"
                  />
                </b-field>
                <b-field label="Matricula" message="Matricula (o equivalente)">
                  <b-input
                    type="text"
                    v-model="form.enrollment"
                    placeholder=""
                    name="matricula"
                    required
                  />
                </b-field>
                <hr />
                <b-field>
                  <div class="control">
                    <b-button
                      native-type="submit"
                      :loading="isLoading"
                      expanded
                      type="is-primary"
                      >Enviar</b-button
                    >
                  </div>
                </b-field>
                <small
                  ><em
                    >We appreciate your interest in helping this community that
                    strives every day to be better especially for you.</em
                  ></small
                >
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  </div>
</template>
<script>
import mapValues from 'lodash/mapValues'
// import { getFutureEvents } from '@/api/events'
// import { registerParticipant } from '@/api/participants'

const defaulForm = {
  fullname: null,
  email: null,
  enrollment: null,
  department: null,
  career: null,
  adscription: null
}

export default {
  name: 'EventRegisterForm',
  async asyncData ({ $axios }) {
    const data = await $axios.$get(
      'https://aaaimx-admin.herokuapp.com/api/events/'
    )
    return {
      events: data.results,
      isLoading: false,
      form: defaulForm,
      others: {
        department: '',
        career: '',
        adscription: ''
      },
      careers: [
        'Ingeniería en Gestión Empresarial',
        'Ingeniería Ambiental',
        'Ingeniería Bioquímica',
        'Ingeniería Biomédica',
        'Ingeniería Química',
        'Ingeniería Eléctrica',
        'Ingeniería Electrónica',
        'Ingeniería Mecánica',
        'Ingeniería Civil',
        'Ingeniería Industrial',
        'Ingeniería en Sistemas Computacionales',
        'Licenciatura en Administración',
        'Otro'
      ],
      universities: ['ITM', 'UADY', 'UPY', 'Anahuac Mayab', 'Otro'],
      departments: [
        'Departamento de Sistemas y Computación (DSC)',
        'Departamento de Ing. Eléctrica y Electrónica (DIEE)',
        'Otro'
      ]
    }
  },
  head () {
    return {
      title: 'AAAIMX Community | Event Registration',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            'Contributing to more students having knowledge of Artificial Intelligence and other increasingly popular related fields.'
        }
      ]
    }
  },
  methods: {
    async submit () {
      try {
        this.isLoading = true
        this.form.fullname = this.form.fullname.toUpperCase()
        this.form.enrollment = this.form.enrollment.toUpperCase()
        if (this.form.adscription === 'Otro') this.form.adscription = this.others.adscription
        if (this.form.career === 'Otro') this.form.career = this.others.career
        if (this.form.department === 'Otro') this.form.department = this.others.department
        console.log(this.form)
        await this.$axios.$post('https://aaaimx-admin.herokuapp.com/api/participants/register/', this.form)
        this.$buefy.dialog.alert({
          title: 'Respuesta enviada',
          message:
            '<b>¡Enhoranbuena!</b> Se ha enviado tu respuesta.<br/> Se te enviará un correo con el <b>link de acceso</b>, a más tardar 12 hrs antes del evento.<br/><b>¡Nos vemos pronto!</b>...',
          type: 'is-success',
          hasIcon: true,
          icon: 'check-circle',
          ariaRole: 'alertdialog',
          confirmText: 'Entendido',
          ariaModal: true
        })
        this.reset()
      } catch (error) {
        console.log(error)
        this.$buefy.dialog.alert({
          title: 'Registro fallido',
          message:
            'No se ha podido completar tu <b>registro</b>.<br/>No se permiten <b>registros duplicados</b> o algo ha salido mal durante el proceso. <br/>Te recomendamos intentar más tarde.',
          type: 'is-danger',
          hasIcon: true,
          icon: 'times-circle',
          iconPack: 'fa',
          ariaRole: 'alertdialog',
          ariaModal: true
        })
      } finally {
        this.isLoading = false
      }
    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })
    }
  }
}
</script>
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
