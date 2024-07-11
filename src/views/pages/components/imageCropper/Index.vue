<template>
  <a
    ref="cropperModal"
    href="#"
    class="btn d-none"
    data-bs-toggle="modal"
    data-bs-target="#add_items"
  >
    <i data-feather="plus-circle"></i>
    Open Modal
  </a>

  <div
    class="modal custom-modal fade bank-details"
    id="add_items"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header p-3">
          <div class="form-header text-start mb-0">
            <h4 class="mb-0">
              Image cropper {{ width }} x {{ height }}
            </h4>
          </div>
          <button
            ref="closeModal"
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">

            <center>
              <VuePictureCropper
                :key="key"
                class="img-fluid rounded"
                :boxStyle="{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#0f271a',
                  margin: 'auto',
                }"
                :options="options"
                :img="image"
                :presetMode="presetMode"
                @ready="ready"
              />
            </center>
              
          </div>
        </div>
        <div class="modal-footer p-3">
          <!-- <div class="bank-details-btn"> -->
            <button class="btn btn-sm btn-primary me-2" @click="crop">
              <i class="fa fa-scissors" aria-hidden="true"></i>
              Crop
            </button>
            <a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-sm btn-primary me-2">Cancel</a>
            <!-- <a href="javascript:void(0);" class="btn btn-sm btn-primary">Save Item</a> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, toRefs, ref, watch, reactive, nextTick } from 'vue';
  import VuePictureCropper, { cropper } from 'vue-picture-cropper'

  const cropperModal = ref(null)
  const closeModal = ref(null)

  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: () => 100,
    },
    height: {
      type: Number,
      default: () => 100,
    },
  })

  const key = ref(0);

  const emit = defineEmits(['cropped']);

  const { name, isOpen, image, width, height } = toRefs(props)

  const options = reactive({
    viewMode: 1,
    dragMode: 'move',
    // aspectRatio: 1280 / 568,
    aspectRatio: 0,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,

    minContainerWidth: 750,
    minContainerHeight: 600,

    // minCanvasWidth: 111,
    // minCanvasHeight: 111,

    // minCropBoxWidth: 50,
    // minCropBoxHeight: 50,
    zoomable: true,
    // fillColor: '#fff',
    // imageSmoothingEnabled: false,
    // imageSmoothingQuality: 'high',
  })

  const presetMode = reactive({
    mode: 'fixedSize',
    width: width.value,
    height: height.value,
  })

  const setCropBoxData = () => {
    // cropper.setCropBoxData({ 
    //   width: width.value,
    //   height: height.value,
    // })

    options.aspectRatio = width.value / height.value;    
    presetMode.width = width.value;
    presetMode.height = height.value;

    key.value++;
  }

  /**
   * Get cropping results
   */
  async function crop(event) {

    if (!cropper) return
    setCropBoxData()

    await cropper.getFile().then(file => {      
      const fileReader = new FileReader()

      fileReader.onload = () => {
        const img = new Image()

        img.onload = () => {
          console.log('Cropped image size: ', { width: img.width, height: img.height })
        }

        img.src = fileReader.result
      }

      fileReader.readAsDataURL(file)

      toggleModal(false)      

      croppedImage({ name: name.value, file })
    })
  }

  const croppedImage = ({ file, name }) => {
    const fReader = new FileReader();
    fReader.onload = fReaderEvent => {
      emit('cropped', { name, file, fReaderEvent })
    }

    fReader.readAsDataURL(file)
  }

  const ready = async (a, b, c) => {
    console.log('a: ', a, 'b: ', b, 'c: ', c);
  }

  const toggleModal = isOpen => isOpen ? cropperModal.value?.click() : closeModal.value.click()

  watch(isOpen, toggleModal)
  watch([width, height], () => {
    setTimeout(setCropBoxData, 100)
  })
</script>
