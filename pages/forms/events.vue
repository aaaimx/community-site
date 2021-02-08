<template>
  <Brand>
    <div class="has-text-centered">
      <h1 class="title is-4">
        Inscripción a curso, taller o plática
      </h1>
      <p class="description">
        Ingrese sus datos para validar su inscripción y recibirá un correo de
        confirmación.
      </p>
    </div>

    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>

    <form @submit.prevent="submit">
      <b-field label="Nombre completo" message="Nombre(s) y apellidos">
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
      <b-field label="Teléfono" message="Número de teléfono o celular">
        <b-input
          icon="phone"
          type="tel"
          v-model="form.phone"
          placeholder="Teléfono"
          name="phone"
        />
      </b-field>
      <b-field label="Ocupación">
        <b-select
          expanded
          placeholder="Selecciona una opción"
          v-model="form.ocupation"
          required
        >
          <option
            v-for="(option, index) in ocupations"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </b-select>
      </b-field>
      <b-field label="Género">
        <b-select
          expanded
          placeholder="Selecciona una opción"
          v-model="form.gender"
        >
          <option
            v-for="(option, index) in genders"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </b-select>
      </b-field>
      <hr />
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
        label="Grado de estudios"
        message="Último grado de estudios o estudios actuales"
      >
        <b-select
          expanded
          placeholder="Selecciona una opción"
          v-model="form.grade"
        >
          <option
            v-for="(option, index) in grades"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </b-select>
        <br />
        <b-input
          v-if="form.grade === 'Otro'"
          v-model="others.grade"
          placeholder="Especifique"
          name="grade"
        />
      </b-field>
      <template
        v-if="form.ocupation === 'Estudiante' || form.ocupation === 'Docente'"
      >
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
          message="Departamento (solo estudiantes/docentes del ITM)"
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
      </template>
      <recaptcha />
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
    </form>
  </Brand>
</template>
<script>
import mapValues from 'lodash/mapValues'
import constants from '../constants.json'
import global from '~/mixins/global'

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
  mixins: [global],
  async asyncData ({ $axios }) {
    let data = {}
    try {
      data = await $axios.$get('events/future/')
    } catch (error) {
      console.log(error)
    }

    return {
      events: data.results,
      isLoading: false,
      form: defaulForm,
      others: {
        department: '',
        career: '',
        adscription: ''
      },
      ...constants
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
  async mounted () {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async submit () {
      this.isLoading = true
      this.form.fullname = this.form.fullname.toUpperCase()
      if (
        this.form.ocupation === 'Estudiante' ||
        this.form.ocupation === 'Docente'
      ) {
        this.form.enrollment = this.form.enrollment.toUpperCase()
        if (this.form.adscription === 'Otro')
          this.form.adscription = this.others.adscription
        if (this.form.career === 'Otro') this.form.career = this.others.career
        if (this.form.department === 'Otro')
          this.form.department = this.others.department
      }
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        // send token to server alongside your form data
        await this.$axios.$post('/participants/register/', this.form)
        this.alert(
          'Respuesta enviada',
          '<b>¡Enhoranbuena!</b> Se ha enviado tu respuesta.<br/> Se te enviará un correo con el <b>link de acceso</b>, a más tardar 12 hrs antes del evento.<br/><b>¡Nos vemos pronto!</b>...'
        )
        this.reset()
      } catch (error) {
        console.log(error)
        this.alertError(
          'Registro fallido',
          'No se ha podido completar tu <b>registro</b>.<br/>No se permiten <b>registros duplicados</b> o algo ha salido mal durante el proceso. <br/>Te recomendamos intentar más tarde.'
        )
      } finally {
        this.isLoading = false
      }
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
