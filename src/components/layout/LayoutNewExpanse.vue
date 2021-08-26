<template>
  <div class="w-100 d-flex justify-content-center">
    <button
      @click="showModal = true"
      class="btn btn-lg btn-outline-primary w-75"
    >
      <i class="fa fa-plus"></i>
      Novo gasto
    </button>
    <form @submit.prevent="submit()">
      <div
        :class="{show: showModal}"
        class="modal fade"
        :style="{display: showModal ? 'block' : 'none'}"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLiveLabel">Adicionar um novo gasto</h5>
              <button
                @click="closeModal()"
                type="button"
                class="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="form-group col-8">
                  <label for="descricao">Descrição:</label>
                  <input
                    v-model="form.description"
                    type="text"
                    class="form-control"
                    required
                  >
                </div>
                <div class="form-group col-4">
                  <label for="valor">Valor (R$):</label>
                  <input
                    v-model="form.value"
                    type="text"
                    class="form-control"
                    required
                  >
                </div>
                <div class="form-group col-12 flex-column d-flex align-items-center">
                  <input
                    @change="handleFile($event)"
                    ref="input"
                    type="file"
                    class="d-none"
                    accept="image/*"
                  >
                  <br>
                  <button
                    @click="openFileDialog()"
                    type="button"
                    class="btn w-50 btn-outline-secondary"
                  >
                    Adicionar comprovante
                  </button>
                  <div
                    v-if="form.receipt"
                    class="mt-2"
                  >
                    {{ form.receipt.name }}

                    <button
                      @click="form.receipt = null"
                      type="button"
                      class="btn btn-badge text-danger"
                    >
                      <i class="fa fa-trash text-danger"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                @click="closeModal()"
                type="button"
                class="btn btn-secondary"
              >
                Fechar
              </button>
              <button
                class="btn btn-primary"
              >
                Incluir novo gasto
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div
      :class="{show: showModal}"
      :style="{display: showModal ? 'block' : 'none'}"
      class="modal-backdrop fade">
    </div>
  </div>
</template>

<script>

export default {
  name: 'LayoutNewExpanse',
  data: () => ({
    showModal: false,
    form: {
      receipt: '',
      value: '',
      description: ''
    }
  }),
  methods: {
    openFileDialog () {
      this.$refs.input.value = null
      this.$refs.input.click()
    },
    handleFile ({ target }) {
      this.form.receipt = target.files[0]
    },
    submit () {
      this.$root.$emit('Spinner::show')

      const ref = this.$firebase.database().ref(window.uid)
      const id = ref.push().key

      const payload = {
        id,
        receipt: '',
        value: this.form.value,
        createdAt: new Date().getTime(),
        description: this.form.description
      }

      ref.child(id).set(payload, err => {
        this.$root.$emit('Spinner::hide')

        if (err) {
          console.error(err)
        } else {
          this.closeModal()
        }
      })
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    color: var(--darker)
  }
</style>
