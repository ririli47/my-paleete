<template>
  <div class="container">
    <div class="grid-wrap">
      <div
        v-for="item in this.$store.getters['color/getColors']"
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
    </div>
    <div v-if="isModalOpen" class="modal">
      <div class="modal-background" @click="closeModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ selectedPalette.description }}</p>
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
          <p class="modal-detail-font text-right">
            ColorCode: {{ selectedPalette.colorCode }}
          </p>
          <p class="modal-detail-font text-left">
            Description: {{ selectedPalette.description }}
          </p>
        </section>
        <footer v-if="!isEditMode" class="modal-card-foot">
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
        <footer v-else class="modal-card-foot">
          <button class="button is-primary button-width" @click="updateColor()">
            Update
          </button>
          <button class="button is-danger button-width" @click="cancel()">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPalette: {
        description: '',
        colorCode: ''
      },
      isModalOpen: false,
      isEditMode: false
    }
  },
  computed: {},
  created() {
    this.$store.dispatch('color/fetchColors')
  },
  methods: {
    setPaletteContent(palette) {
      this.selectedPalette.description = palette.description
      this.selectedPalette.colorCode = palette.colorCode
    },
    setIsEditMode() {
      this.isEditMode = true
    },
    updateColor() {},
    deleteColor() {},
    cancel() {
      this.isEditMode = false
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      this.isEditMode = false
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
