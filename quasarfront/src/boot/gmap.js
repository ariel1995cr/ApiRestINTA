import { boot } from 'quasar/wrappers'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyD62MSPtoCBTPdiiI91RRJl0o0qdEsBdII'
    }
  })
})
