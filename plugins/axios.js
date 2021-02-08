export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:8000/api'
        : 'https://aaaimx-admin.herokuapp.com/api',
    mode: 'cors',
    allowCredentials: true,
    credentials: 'same-origin'
  })

  // Inject to context as $api
  inject('api', api)
}
