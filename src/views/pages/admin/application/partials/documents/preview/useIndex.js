import { onMounted, ref } from "vue";

export default function useIndex({ props }) {

  console.log('props: ', props)

  const { form } = props;

  const {
    passport,
    school_attestat,
    equivalence_document,
    passport_translation,
    transcript,
    transcript_translation,
    school_attestat_translation,
    biometric_photo,
    additional_documents: additionalDocuments,
  } = form;

  const documents = {
    passport,
    school_attestat,
    equivalence_document,
    passport_translation,
    transcript,
    transcript_translation,
    school_attestat_translation,
    biometric_photo,
  }

  const documentColumns = [
    { field: 'document_type', title: 'Document type' },
    { field: 'extension', title: 'Extension' },
    { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: 'actions', sort: false },
  ];

  const additionalDocumentColumns = [
    { field: 'description', title: 'Description' },
    { field: 'extension', title: 'Extension' },
    { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: 'actions', sort: false },
  ]

  const documentItems = ref([]);
  const additionalDocumentItems = ref([]);

  const makeDocumentItems = () => {
    for (const key in documents) {
      if (Object.hasOwnProperty.call(documents, key)) {
        const document = documents[key];
        documentItems.value.push({
          ...document,
          document_type: key,
        })
      }
    }
  }

  onMounted(() => {
    makeDocumentItems()
    additionalDocumentItems.value = additionalDocuments ? additionalDocuments : [];
  })

  return {
    documentColumns,
    documentItems,
    additionalDocumentColumns,
    additionalDocumentItems,
  }
}
