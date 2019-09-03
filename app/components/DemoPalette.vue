<template>
  <div class="container">
    <div class="grid-wrap">
      <div
        v-for="item in this.$store.getters['demoColors/getColors']"
        :key="item.id"
      >
        <div
          class="palette-wrap"
          @click="
            setPaletteContent(item)
            openModal()
          "
        >
          <div :style="{ background: item.colorCode }" class="palette"></div>
        </div>
        <div :style="{ background: item.colorCode }" class="right-side"></div>
      </div>
      <div class="palette-wrap new-colorb-button" @click="setIsAddMode()">
        新しい色を追加<br />+
      </div>
    </div>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-background" @click="closeModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"></p>
          <button
            class="delete"
            aria-label="close"
            @click="closeModal()"
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="modal-color-border">
            <div
              :style="{ background: selectedPalette.colorCode }"
              class="modal-color-part"
            ></div>
          </div>
          <p
            v-if="!isEditMode && !isAddMode"
            class="modal-detail-font text-right"
          >
            ColorCode: {{ selectedPalette.colorCode }}
          </p>
          <div v-else class="modal-detail-font text-left control">
            <label class="label">ColorCode:</label>
            <input
              v-model="selectedPalette.colorCode"
              class="input"
              type="text"
              placeholder=""
            />
          </div>
          <div
            v-if="!isEditMode && !isAddMode"
            class="modal-detail-font text-left control"
          >
            <label class="label">Description:</label>
            <label>{{ selectedPalette.description }}</label>
          </div>
          <div v-else class="modal-detail-font text-left control">
            <label class="label">Description:</label>
            <input
              v-model="selectedPalette.description"
              class="input"
              type="textarea"
              placeholder=""
            />
          </div>
        </section>
        <footer v-if="!isEditMode && !isAddMode" class="modal-card-foot">
          <button
            class="button is-primary button-width"
            @click="setIsEditMode()"
          >
            Edit
          </button>
          <button class="button is-danger button-width" @click="deleteColor()">
            Delete
          </button>
        </footer>
        <footer v-else-if="isAddMode" class="modal-card-foot">
          <button class="button is-primary button-width" @click="addColor()">
            Add
          </button>
          <button class="button is-danger button-width" @click="cancel()">
            Cancel
          </button>
        </footer>
        <footer v-else-if="isEditMode" class="modal-card-foot">
          <button class="button is-primary button-width" @click="updateColor()">
            Update
          </button>
          <button class="button is-danger button-width" @click="cancel()">
            Cancel
          </button>
        </footer>
      </div>
    </div>
    <notifications group="notify" position="bottom left" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPalette: {
        description: '',
        colorCode: '',
        colorId: ''
      },
      notifyTitle: '',
      notifyMessage: '',
      isModalOpen: false,
      isEditMode: false,
      isAddMode: false
    }
  },
  computed: {},
  methods: {
    setPaletteContent(palette) {
      this.selectedPalette.colorCode = palette.colorCode
      this.selectedPalette.description = palette.description
      this.selectedPalette.colorId = palette.colorId
    },
    setIsEditMode() {
      this.isEditMode = true
    },
    addColor() {
      const colorCode = this.selectedPalette.colorCode
      const description = this.selectedPalette.description

      this.$store
        .dispatch('demoColors/addColor', {
          colorCode,
          description
        })
        .then(success => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: 'Create Success',
            text: 'Please check your pallete'
          })
        })
        .catch(error => {
          console.log(error)
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Create Faild',
            text: 'Please check your pallete'
          })
        })
      this.closeModal()
    },
    updateColor() {
      const colorCode = this.selectedPalette.colorCode
      const description = this.selectedPalette.description
      const colorId = this.selectedPalette.colorId

      this.$store
        .dispatch('demoColors/updateColor', {
          colorCode,
          description,
          colorId
        })
        .then(success => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: 'Update Success',
            text: 'Please check your pallete'
          })
        })
        .catch(error => {
          console.log(error)
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Update Faild',
            text: 'Please check your pallete'
          })
        })
      this.closeModal()
    },
    deleteColor() {
      const colorId = this.selectedPalette.colorId
      this.$store
        .dispatch('demoColors/deleteColor', colorId)
        .then(success => {
          this.$notify({
            group: 'notify',
            type: 'success',
            title: 'Delete Success',
            text: 'Please check your pallete'
          })
        })
        .catch(error => {
          console.log(error)
          this.$notify({
            group: 'notify',
            type: 'error',
            title: 'Delete Faild',
            text: 'Please check your pallete'
          })
        })
      this.closeModal()
    },
    cancel() {
      this.isEditMode = false
      this.isAddMode = false
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.isEditMode = false
      this.isAddMode = false
    },
    setIsAddMode() {
      this.selectedPalette.colorCode = '#'
      this.selectedPalette.description = ''

      this.isModalOpen = true
      this.isAddMode = true
    },
    showPaletteContent() {
      return [this.selectedPalette.description, this.selectedPalette.color]
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 960px) {
  .container {
    max-width: 100%;
  }
}

.grid-wrap {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 11vw);
}

.palette {
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 6px;
  height: 11vw;
  border-radius: 3%;
}

.palette-content {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 3px 3px 6px;
  position: fixed;
  top: -60vh;
  right: 25vw;
  color: black;
  font-size: 3rem;
  text-align: center;
}

.right-side {
  position: fixed;
  width: 18vw;
  height: 100vh;
  top: -100vh;
  right: 0px;

  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: center;
}

.right-side-content {
  flex: 1;
  font-size: 2rem;
}

.palette-wrap:hover .palette {
  animation: turn 3.5s ease-out forwards infinite;
}

.palette-wrap:hover + .right-side {
  animation: slide 1s ease-out forwards;
  animation-fill-mode: forwards;
}

.palette-wrap:hover + .right-side .palette-wrap-content {
  animation: slide 1s ease-out forwards;
  animation-fill-mode: forwards;
}

.palette p {
  color: white;
}

.new-colorb-button {
  border-radius: 10%;
  border: 1px solid black;
  text-align: center;
}

.modal {
  display: flex;
}

.modal-background {
  background-color: rgba(200, 200, 200, 0.86);
}

.modal-card {
  width: 50vw;
}

.modal-card-head {
  height: 15%;
}

.modal-color-border {
  border: 1px solid #e0e0e0;
}

.modal-color-part {
  height: 120px;
  margin: 20px;
}

.modal-detail-font {
  flex: 1;
  color: #d0d0d0;
}

.field {
  width: 50%;
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.button-width {
  flex: 1;
}

@keyframes turn {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

@keyframes slide {
  100% {
    transform: translateY(100vh);
  }
}

@keyframes slide-reverse {
  100% {
    transform: translateY(100vh);
  }
}
</style>
