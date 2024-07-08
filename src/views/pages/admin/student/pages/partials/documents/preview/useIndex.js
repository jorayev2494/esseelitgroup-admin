import { useUrlPattern } from "@/views/pages/utils/UrlPattern";
import { useDate } from "@/views/pages/utils/helpers";
import { onMounted, ref, toRefs } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default function useIndex({ props }) {

  const { t } = useI18n();
  const store = useStore();
  const route = useRoute();
  const { dateInDdMmYyyyHhMmSs } = useDate();
  const { file } = useUrlPattern();

  const { uuid } = route.params

  const { form } = toRefs(props);

  const {
    additional_documents: additionalDocuments,
  } = form.value;

  const documentKeys = [
    'passport',
    'school_attestat',
    'equivalence_document',
    'passport_translation',
    'transcript',
    'transcript_translation',
    'school_attestat_translation',
    'biometric_photo',
  ]

  const documentColumns = [
    { field: 'document_type', title: 'Document type' },
    // { field: 'extension', title: 'Extension' },
    // { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ];

  const additionalDocumentColumns = [
    { field: 'description', title: 'Description' },
    // { field: 'extension', title: 'Extension' },
    { field: 'file_original_name', title: 'File name' },
    { field: 'actions', title: t('system.actions'), sort: false, headerClass: 'float-end', cellClass: 'float-end' },
  ]

  const documentItems = ref([]);
  const additionalDocumentItems = ref([]);

  const makeDocumentItems = () => {
    documentKeys.forEach(key => {
      const document = form.value[key];

      document.url = file(document)
      documentItems.value.push({
        ...document,
        document_type: key,
      })
    })
  }

  const downloadStudentArchiveDocuments = downloadArchiveName => {
    downloadArchiveName += ' ' + dateInDdMmYyyyHhMmSs(new Date(), "-", "-");
    store.dispatch('student/downloadStudentArchiveDocumentsAsync', { uuid, downloadArchiveName })
  }

  const makeAdditionalDocuments = () => {
    additionalDocumentItems.value = additionalDocuments ? additionalDocuments : [];
    for (const key in additionalDocumentItems.value) {
      if (Object.hasOwnProperty.call(additionalDocumentItems.value, key)) {
        const document = additionalDocumentItems.value[key];
        document.url = file(document)
      }
    }
  }

  onMounted(() => {
    setTimeout(() => {
      makeDocumentItems()
      makeAdditionalDocuments()
    }, 2000)
  })

  return {
    documentColumns,
    documentItems,
    additionalDocumentColumns,
    additionalDocumentItems,
    downloadStudentArchiveDocuments,
  }
}
