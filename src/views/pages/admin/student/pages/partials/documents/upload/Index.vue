<template>
  <div class="col-xl-12 col-md-12">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('application.documents') }}</h4>
      </div>

      <div class="card-body">
        <data-table
          v-if="uploadFiles.length"
          :columns="documentColumns"
          :rows="uploadFiles"
          skin="bh-table-hover"
          :pagination="false"
        >
          <template #document_type="data">
            <span class="m-2" v-if="isEdit && form[data.value.document_type]">
              <i :class="findIconBy('extension', form[data.value.document_type]?.extension)"></i>
            </span>

            <span>{{ $t(`application.form.documents.${data.value.document_type}`) }}</span>
          </template>

          <template #actions="data">

            <span v-if="isEdit">
              <a class="btn btn-sm btn-outline-primary me-2" :href="form[data.value.document_type]?.url" target="blank" @click.stop>
                <i class="fa fa-eye"></i>
              </a>
            </span>

            <span>
              <label :for="data.value.document_type" class="m-0" @click.stop>
                <span
                  v-if="!isEdit"
                  class="btn btn-sm"
                  :class="form[data.value.document_type] ? 'btn-outline-success' : 'btn-outline-warning'"
                >
                  <i class="fa" :class="form[data.value.document_type] ? 'fa-check text-success' : 'fa-plus text-warning'"></i>
                </span>
                <span
                  v-else
                  class="btn btn-sm"
                  :class="form[data.value.document_type]?.url ? 'btn-outline-warning' : 'btn-outline-success'"
                >
                  <i class="fa" :class="form[data.value.document_type]?.url ? 'fa-plus text-warning' : 'fa-check text-success'"></i>
                </span>
              </label>
              
              <input
                class="d-none"
                type="file"
                :name="data.value.document_type"
                :id="data.value.document_type"
                :accept="data.value.accept"
                required
                @click.stop
                @change="setUploadedFile"
              >
            </span>

          </template>
        </data-table>

        <h4 class="mt-5">{{ $t('application.additional_documents') }}</h4>

        <data-table
          v-if="additionalDocuments.length"
          :key="additionalDocuments.length"
          :columns="additionalDocumentColumns"
          :rows="additionalDocuments"
          skin="bh-table-hover"
          :pagination="false"
        >
          <template #description="data">
            <div class="form-group">
              <input
                type="text"
                v-model="data.value.description"
                class="form-control"
                :placeholder="$t('application.document_name')"
                required
              >
            </div>
          </template>

          <template #document="data">
            <div class="form-group">
              <input
                type="file"
                :name="data.value.name"
                :id="data.value.name"
                required
                @click.stop
                @change="addAdditionalFile($event, data.value.key)"
              >
            </div>
          </template>

          <template #actions="data">
            <span class="remove-btn" role='button' @click.prevent="removeAdditionalDocument(data.value.key)">
              <i class="feather-trash-2 text-danger"></i>
            </span>
          </template>
        </data-table>

        <div class="col-12 col-md-12" :class="{ 'mt-4': additionalDocuments.length === 0 }">
          <center>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-group btn-outline-danger"
                :disabled="canAddNewAdditionalColumn"
                @click.prevent="addAdditionalDocument"
              >
                {{ $t('application.add_additional_document') }}
              </button>
            </div>
          </center>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'
  import useIndex from './useIndex.js'

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
    additionalDocuments: {
      type: Array,
      default: () => [],
    },
    isEdit: {
      type: Boolean,
      default: false,
    },
  })

  const {
    documentColumns,
    uploadFiles,
    additionalDocumentColumns,
    // additionalDocumentItems,
    additionalDocuments,

    setUploadedFile,
    canAddNewAdditionalColumn,
    addAdditionalDocument,
    removeAdditionalDocument,
    addAdditionalFile,
    findIconBy,
  } = useIndex({ props })

</script>

<style lang="scss" scoped>

</style>
