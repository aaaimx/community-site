import mapValues from 'lodash/mapValues'

export default {
  methods: {
    alert (title, message) {
      this.$buefy.dialog.alert({
        title,
        message,
        type: 'is-success',
        hasIcon: true,
        icon: 'check-circle',
        ariaRole: 'alertdialog',
        confirmText: 'Entendido',
        ariaModal: true
      })
    },
    alertError (title, message) {
      this.$buefy.dialog.alert({
        title,
        message,
        type: 'is-danger',
        hasIcon: true,
        iconPack: 'fa',
        icon: 'times-circle',
        ariaRole: 'alertdialog',
        ariaModal: true
      })
    },
    async reset () {
        await this.$recaptcha.reset()
        this.form = mapValues(this.form, item => {
          if (item && typeof item === 'object') {
            return []
          }
          return null
        })
      }
  }
}
