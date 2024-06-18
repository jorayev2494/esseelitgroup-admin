import { onMounted, reactive, ref } from 'vue';
import coverUseCases from '../../../components/imageCropper/useCases'
import { useUrlPattern } from '@/views/pages/utils/UrlPattern';
import { useStore } from 'vuex';

export const useCropper = ({ form }) => {
  const store = useStore();

  const { image } = useUrlPattern();
  const { imageCrop, imageCropWidth, imageCropHeight, cropperName } = coverUseCases();

  const logoPreview = ref(null);
  const coverPreview = ref(null);

  const LOGO_WIDTH = store.getters['university/getLogoProp']('width');
  const LOGO_HEIGHT = store.getters['university/getLogoProp']('height');

  const COVER_WIDTH = store.getters['university/getCoverProp']('width');
  const COVER_HEIGHT = store.getters['university/getCoverProp']('height');

  const isOpenCropperModal = ref(false);

  const modalBindings = reactive({
    width: imageCropWidth,
    height: imageCropHeight,
    name: cropperName,
    isOpen: isOpenCropperModal,
    image: imageCrop,
    aspectRatio: 1,
  })

  const changeCropType = (file, type) => {
    if (type === 'logo') {
      imageCrop.value = String(file.result);
      imageCropWidth.value = LOGO_WIDTH
      imageCropHeight.value = LOGO_HEIGHT
    }

    if (type === 'cover') {
      imageCrop.value = String(file.result);
      imageCropWidth.value = COVER_WIDTH
      imageCropHeight.value = COVER_HEIGHT
    }

    modalBindings.aspectRatio = imageCropWidth.value / imageCropHeight.value;
  }

  const uploadMedia = event => {
    const { name, files } = event.target;

    const [uploadedMedia] = files;
    event.target.value = '';
    isOpenCropperModal.value = false

    if (uploadedMedia) {
      const fReader = new FileReader();
      fReader.readAsDataURL(uploadedMedia);
      fReader.onload = () => {
        changeCropType(fReader, name)
        cropperName.value = name
        isOpenCropperModal.value = true
      }
    }
  }

  const croppedMedia = ({ file, name, fReaderEvent }) => {
    form.value[name] = file;

    if (name === 'logo') {
      logoPreview.value = String(fReaderEvent.currentTarget.result);
    }

    if (name === 'cover') {
      coverPreview.value = String(fReaderEvent.currentTarget.result);
    }
  }

  onMounted(() => {
    logoPreview.value = image(logoPreview.value)
    coverPreview.value = image(coverPreview.value, 1200, 800, 'cover')
  })

  return {
    logoPreview,
    coverPreview,
    imageCropWidth,
    imageCropHeight,
    modalBindings,

    uploadMedia,
    croppedMedia,
  }
}
