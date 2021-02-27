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
          v-if="ocupations.indexOf(form.ocupation) !== -1 || !form.ocupation"
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
          <option>Otro</option>
        </b-select>
        <b-input
          v-else
          v-model="form.ocupation"
          placeholder="Especifique"
          name="ocupation"
        />
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
      <b-field>
        <b-field label="Evento">
          <b-autocomplete
            open-on-focus
            field="title"
            clearable
            group-field="type"
            :data="events"
            @select="option => (selected = option)"
          >
            <template slot-scope="props">
              <div class="media">
                <div class="media-content">
                  <span>{{ props.option.title }}</span>
                  <br />
                  <small>
                    {{ new Date(props.option.date_start).toLocaleString() }}
                  </small>
                </div>
              </div>
            </template>
          </b-autocomplete>
        </b-field>
      </b-field>
      <b-field
        label="Grado de estudios"
        message="Último grado de estudios o estudios actuales"
      >
        <b-select
          v-if="grades.indexOf(form.grade) !== -1 || !form.grade"
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
          <option>Otro</option>
        </b-select>
        <b-input
          v-else
          v-model="form.grade"
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
            v-if="
              universities.indexOf(form.adscription) !== -1 || !form.adscription
            "
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
            <option>Otro</option>
          </b-select>
          <b-input
            v-else
            v-model="form.adscription"
            placeholder="Especifique"
            name="adscription"
          />
        </b-field>
        <b-field
          label="Departamento"
          message="Departamento (solo estudiantes/docentes del ITM)"
        >
          <b-select
            v-if="
              departments.indexOf(form.department) !== -1 || !form.department
            "
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
            <option>Otro</option>
          </b-select>
          <b-input
            v-else
            v-model="form.department"
            placeholder="Especifique"
            name="department"
          />
        </b-field>
        <b-field label="Carrera" message="Área o cmpo de estudio">
          <b-select
            v-if="careers.indexOf(form.career) !== -1 || !form.career"
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
            <option>Otro</option>
          </b-select>
          <b-input
            v-else
            v-model="form.career"
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
import constants from "../constants.json";
import global from "~/mixins/global";

const defaulForm = {
  fullname: null,
  email: null,
  enrollment: null,
  department: null,
  career: null,
  adscription: null
};

export default {
  name: "EventRegisterForm",
  mixins: [global],
  async asyncData({ $axios }) {
    let data = {};
    try {
      data = await $axios.$get("events/future/");
    } catch (error) {
      console.log(error);
    }

    return {
      events: data,
      isLoading: false,
      form: defaulForm,
      name: "",
      selected: null,
      ...constants
    };
  },
  head() {
    return {
      title: "AAAIMX Community | Event Registration",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Contributing to more students having knowledge of Artificial Intelligence and other increasingly popular related fields."
        }
      ]
    };
  },
  async mounted() {
    try {
      await this.$recaptcha.init();
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    filteredDataObj() {
      const newData = [];
      this.events.forEach(element => {
        const items = element.items.filter(
          item => item.toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
        if (items.length) {
          newData.push({ type: element.type, items });
        }
      });
      return newData;
    }
  },
  methods: {
    async submit() {
      this.isLoading = true;
      this.form.fullname = this.form.fullname.toUpperCase();
      if (
        this.form.ocupation === "Estudiante" ||
        this.form.ocupation === "Docente"
      ) {
        this.form.enrollment = this.form.enrollment.toUpperCase();
      }
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
        // send token to server alongside your form data
        await this.$axios.$post("/participants/register/", this.form);
        this.alert(
          "Respuesta enviada",
          "<b>¡Enhoranbuena!</b> Se ha enviado tu respuesta.<br/> Se te enviará un correo con el <b>link de acceso</b>, a más tardar 12 hrs antes del evento.<br/><b>¡Nos vemos pronto!</b>..."
        );
        this.reset();
      } catch (error) {
        console.log(error);
        this.alertError(
          "Registro fallido",
          "No se ha podido completar tu <b>registro</b>.<br/>No se permiten <b>registros duplicados</b> o algo ha salido mal durante el proceso. <br/>Te recomendamos intentar más tarde."
        );
      } finally {
        this.isLoading = false;
      }
    }
  }
};
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
