import { reactive, ref } from "vue";

export default () => {

  const isOpenCropperModal = ref(false);
  const imagePreview = ref('');

  const imageCrop = ref('');
  const imageCropWidth = ref(null);
  const imageCropHeight = ref(null);
  const cropperName = ref(null);

  const modalBindings = reactive({
    width: null,
    height: null,
    name: null,
    isOpen: isOpenCropperModal,
    image: imageCrop,
  })

  const changedImage = event => {
    const { name, files, dataset } = event.target;
    const { cropWidth, cropHeight } = dataset;
    // event.target.value = '';
    const [uploadedLogo] = files;

    modalBindings.name = name;
    modalBindings.width = parseInt(cropWidth);
    modalBindings.height = parseInt(cropHeight);
    console.log('changedImage modalBindings: ', modalBindings);

    isOpenCropperModal.value = false

    if (uploadedLogo) {
      const fReader = new FileReader();
      fReader.readAsDataURL(uploadedLogo);
      fReader.onload = event => {
        imageCrop.value = String(event.currentTarget.result);
        isOpenCropperModal.value = true;
      }
    }
  }

  const croppedImage = (form, { file, name, fReaderEvent }) => {
    form[name] = file;

    imagePreview.value = String(fReaderEvent.currentTarget.result);
  }

  return {  
    isOpenCropperModal,
    imagePreview,
    imageCrop,
    imageCropWidth,
    imageCropHeight,
    cropperName,
    modalBindings,

    changedImage,
    croppedImage,
  } 
}
