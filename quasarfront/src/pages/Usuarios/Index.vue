<template>
  <q-page>
    <div class="row justify-end q-mx-lg q-mt-lg">
      <div class="col-12">
        <q-table
          title="Usuarios"
          :rows="data.data"
          :columns="columns"
          row-key="id"
          :pagination="pagination"
          :loading="loading"
          :filter="filter"
          @request="onRequest"
          :binary-state-sort="true"
        >
          <template v-slot:top-right>
            <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-acciones="props">
            <q-td :props="props">
              <div>
                <q-btn color="primary" label="Editar" @click="openDialog(props.row, true)" />
                <q-btn class="q-ml-lg" color="red" label="Eliminar" @click="eliminar(props.row)"/>
              </div>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
    <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">{{ title }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input v-model="userSelected.dni" label="DNI" :error="errors.hasOwnProperty('dni')">
            <template v-slot:error>
              {{errors?.dni[0]}}
            </template>
          </q-input>
          <q-input v-model="userSelected.nombre" label="Nombre" :error="errors.hasOwnProperty('nombre')">
            <template v-slot:error>
              {{errors?.nombre[0]}}
            </template>
          </q-input>
          <q-input v-model="userSelected.apellido" label="Apellido" :error="errors.hasOwnProperty('apellido')">
            <template v-slot:error>
              {{errors?.apellido[0]}}
            </template>
          </q-input>
          <q-input v-model="userSelected.email" label="Email" :error="errors.hasOwnProperty('email')">
          <template v-slot:error>
            {{errors?.email[0]}}
          </template>
          </q-input>
          <q-select v-model="userSelected.rol" :options="options" label="Rol" :error="errors.hasOwnProperty('rol')">
            <template v-slot:error>
              {{errors?.rol[0]}}
            </template>
          </q-select>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Cerrar" v-close-popup />
          <q-btn flat color="primary" label="Guardar" @click="actualizar" v-if="editar"/>
          <q-btn flat color="primary" label="Guardar" @click="actualizar" v-else/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="green" @click="openDialog(null, false)" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { UsuariosServices } from 'src/services/usuariosServices'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'UsuariosIndex',
  setup () {
    const $q = useQuasar()
    const { errors, data, getUsuarios, updateUsuario, borrarUsuario, createUsuario } = UsuariosServices()

    const columns = [
      { name: 'dni', label: 'DNI', field: 'dni', sortable: false },
      { name: 'nombre', label: 'Nombre', field: 'nombre', sortable: true },
      { name: 'apellido', label: 'Apellido', field: 'apellido', sortable: true },
      { name: 'email', label: 'Email', field: 'email', sortable: true },
      { name: 'rol', label: 'Rol', field: 'rol', sortable: true },
      { name: 'created_at', label: 'Creado el', field: 'created_at' },
      { name: 'acciones', label: 'Acciones' }
    ]
    const medium = ref(false)
    const rows = ref([])
    const filter = ref('')
    const loading = ref(false)
    const pagination = ref({
      sortBy: 'id',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 10
    })

    async function onRequest (props) {
      pagination.value = props.pagination
      await getUsuarios(props)
    }

    onMounted(async () => {
      await getUsuarios({
        pagination: pagination.value,
        filter: ''
      })
    })

    const userSelected = ref({})
    const title = ref('')
    const editar = ref(false)
    const options = [
      'usuario', 'administrador'
    ]

    const openDialog = (user, edit) => {
      editar.value = edit
      if (editar.value) {
        userSelected.value = Object.assign({}, user)
        title.value = 'Editar usuario'
      } else {
        userSelected.value = {
          dni: '',
          nombre: '',
          apellido: '',
          email: '',
          rol: ''
        }
        title.value = 'Agregar usuario'
      }
      medium.value = true
    }

    const actualizar = async () => {
      let response
      if (editar.value) {
        response = await updateUsuario(userSelected.value, userSelected.value.id)
      } else {
        response = await createUsuario(userSelected.value)
      }
      if (response) {
        userSelected.value = {}
        medium.value = false
        await getUsuarios({
          pagination: pagination.value,
          filter: ''
        })
      }
    }

    const eliminar = (user) => {
      $q.dialog({
        title: 'Confirmación',
        message: 'Desea eliminar el usuario?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        borrarUsuario(user.id)
        getUsuarios({
          pagination: pagination.value,
          filter: ''
        })
      }).onCancel(() => {
        // console.log('Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    return {
      actualizar,
      columns,
      data,
      errors,
      rows,
      filter,
      loading,
      pagination,
      medium,
      onRequest,
      openDialog,
      updateUsuario,
      userSelected,
      options,
      eliminar,
      title,
      editar
    }
  }
})
</script>
