<template>
  <Brand>
    <div class="has-text-centered">
      <h1 class="title is-4">
        Unirse a la Comunidad AAAIMX
      </h1>
      <p class="description">
        Ingrese sus datos para validar su registro y nos pondremos en contacto
        brevemente
      </p>
    </div>

    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="false"
    ></b-loading>

    <div v-if="!selectedOption" class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article
              v-for="option in options"
              class="tile option box is-child notification"
              :class="[option.type]"
              :key="option.title"
              @click="selectedOption = option.title"
            >
              <article class="media">
                <div class="media-content">
                  <p class="title is-4">{{ option.title }}</p>
                  <p class="subtitle is-6">
                    {{ option.description }}
                  </p>
                </div>
                <figure class="media-right">
                  <p class="image is-64x64">
                    <img :src="option.image" alt="" />
                  </p>
                </figure>
              </article>
            </article>
          </div>
        </div>
      </div>
    </div>

    <b-steps size="is-small" v-model="activeStep" v-else type="is-primary">
      <b-step-item label="Información" icon="account">
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
        <b-field label="Teléfono" message="Número de Teléfono o Celular">
          <b-input
            icon="phone"
            type="tel"
            v-model="form.tel"
            placeholder="Teléfono"
            name="phone"
          />
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
      </b-step-item>
      <b-step-item label="Adscripción" icon="domain">
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
      </b-step-item>
      <b-step-item label="Intereses" icon="menu">
        <b-field
          label="Division"
          message="Divisiones de la que quisieras formar parte (puedes elegir más de una)"
        >
        </b-field>
        <b-field v-for="division in divisions" :key="division">
          <b-checkbox
            size="is-small"
            :native-value="division"
            v-model="form.divisions"
          >
            {{ division }}
          </b-checkbox>
        </b-field>
        <b-field
          label="Club"
          message="Clubes de la que quisieras formar parte (puedes elegir más de uno)"
        >
        </b-field>
        <b-field v-for="club in clubs" :key="club">
          <b-checkbox size="is-small" :native-value="club" v-model="form.clubs">
            {{ club }}
          </b-checkbox>
        </b-field>
      </b-step-item>
      <b-step-item label="Membresía" icon="certificate">
        <b-field label="Tipo de colaboración"> </b-field>
        <b-field v-for="types in membership_types" :key="types">
          <b-radio size="is-small" :native-value="types" v-model="form.type">
            {{ types }}
          </b-radio>
        </b-field>
        <b-field
          label="Habilidades"
          message="¿Cuentas con alguna habilidad que pueda apoyar al capítulo? Especifica"
        >
        </b-field>
        <b-field v-for="skill in skills" :key="skill">
          <b-checkbox
            size="is-small"
            :native-value="skill"
            v-model="form.skills"
          >
            {{ skill }}
          </b-checkbox>
        </b-field>
        <b-message type="is-link" size="is-small">
          Una vez que hayas ingresado tus datos, puedes realizar una donación
          por el monto de <b>$250 MNX</b> por el costo de tu membresía. En breve
          te enviaremos una confirmación en el correo que proporcionaste. Para
          realizar el pago te proporcionamos la siguiente liga:
          <a target="_blank" href="https://www.paypal.com/paypalme/aaaimx/250"
            >Pagar Membresía</a
          >
        </b-message>
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
      </b-step-item>
    </b-steps>
  </Brand>
</template>

<style>
.option:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>

<script>
import mapValues from 'lodash/mapValues'
import constants from '../constants.json'

const defaulForm = {
  fullname: null,
  email: null,
  enrollment: null,
  department: null,
  career: null,
  grade: null,
  adscription: null,
  type: null,
  divisions: [],
  clubs: [],
  skills: []
}

export default {
  name: 'EventRegisterForm',
  async asyncData ({ $axios }) {
    let data = {}
    try {
      const data = await $axios.$get(
        'https://aaaimx-admin.herokuapp.com/api/events/future/'
      )
    } catch (error) {}

    return {
      events: data.results,
      selectedOption: null,
      activeStep: 0,
      isLoading: false,
      form: defaulForm,
      others: {
        department: '',
        career: '',
        grade: '',
        adscription: ''
      },
      ...constants,
      options: [
        {
          title: 'Soy Estudiante',
          description: 'Ingeniería, Licenciatura...',
          type: 'is-primary',
          icon: 'school',
          image: require('../../assets/students.svg')
        },
        {
          title: 'Soy Docente',
          description: 'Maestros, Investigadores...',
          type: 'is-link',
          icon: 'school-outline',
          image: require('../../assets/experts.svg')
        },
        {
          title: 'Universidad',
          description: 'Ingeniería, Licenciatura, Maestría',
          type: 'is-white',
          icon: 'domain',
          image: require('../../assets/toga.svg')
        },
        {
          title: 'Empresas',
          description: 'Patrocinio, convenios, proyectos...',
          type: 'is-secondary',
          icon: 'office-building',
          image: require('../../assets/building.svg')
        }
      ]
    }
  },
  head () {
    return {
      title: 'AAAIMX Community | Become a Member',
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
        if (this.form.adscription === 'Otro')
          this.form.adscription = this.others.adscription
        if (this.form.career === 'Otro') this.form.career = this.others.career
        if (this.form.department === 'Otro')
          this.form.department = this.others.department
        console.log(this.form)
        await this.$axios.$post(
          'https://aaaimx-admin.herokuapp.com/api/participants/register/',
          this.form
        )
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
