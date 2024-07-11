import { onMounted, reactive, computed, ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";

export default function useIndex({ props }) {

  const { t } = useI18n();

  const { form, additionalDocuments, } = toRefs(props);

  const uploadFiles = [
    {
      document_type: 'passport',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'passport_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'school_attestat',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'school_attestat_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'transcript',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'transcript_translation',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'equivalence_document',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
    {
      document_type: 'biometric_photo',
      accept: '.pdf, .jpg, .jpeg',
      required: true,
    },
  ]

  const setUploadedFile = event => {
    const { name, files } = event.target;
    const [file] = files;

    if (uploadFiles.map(i => i.document_type).includes(name)) {
      form.value[name] = file;
    }
  }

  const documentColumns = [
    { field: 'document_type', title: t('application.document_type') },
    { field: 'accept', title: t('application.extension') },
    // { field: 'extension', title: 'Extension' },
    // { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ];

  const additionalDocumentColumns = [
    { field: 'description', title: t('application.document_name') },
    { field: 'document', title: t('application.document') },
    // { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: t('system.actions'), sort: false },
  ]

  // const documentItems = ref([]);
  // const additionalDocumentItems = ref([]);

  // const makeDocumentItems = () => {
  //   for (const key in documents) {
  //     if (Object.hasOwnProperty.call(documents, key)) {
  //       const document = documents[key];
  //       documentItems.value.push({
  //         ...document,
  //         document_type: key,
  //       })
  //     }
  //   }
  // }

  // #region
  const maxCountAdditionalDocuments = 5;

  const addAdditionalFile = (event, idx) => {
    const { name, files } = event.target;
    const [file] = files;

    additionalDocuments.value[idx].document = file;
  }

  const addAdditionalDocument = () => {
    additionalDocuments.value.push(
      {
        key: additionalDocuments.value.length,
        document: '',
        description: '',
      }
    )
  }

  const removeAdditionalDocument = index => {
    additionalDocuments.value.splice(index, 1);

    additionalDocuments.value.forEach((item, idx) => {
      item.key = idx;
    });
  }

  const canAddNewAdditionalColumn = computed(() => additionalDocuments.value.length >= maxCountAdditionalDocuments)
  // #endregion

  return {
    documentColumns,
    uploadFiles,
    additionalDocumentColumns,
    // additionalDocumentItems,
    additionalDocuments,

    setUploadedFile,
    addAdditionalDocument,
    removeAdditionalDocument,
    canAddNewAdditionalColumn,
    addAdditionalFile,
  }
}
