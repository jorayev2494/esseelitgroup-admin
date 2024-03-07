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
            <span>{{ $t(`application.form.documents.${data.value.document_type}`) }}</span>
          </template>

          <template #actions="data">
            <span>
              <input
                type="file"
                :name="data.value.document_type"
                :id="data.value.document_type"
                :accept="data.value.accept"
                required
                @click.stop
                @change="setUploadedFile"
              >
            </span>

            <!-- <a class="me-2" :href="data.value.url"> -->
              <!-- <i class="fa fa-eye"></i> -->
              <!-- {{ $t('system.show') }} -->
            <!-- </a> -->

            <!-- <router-link class="btn btn-sm bg-success-light me-2" :to="{ name: 'company-edit', params: { uuid: data.value.uuid } }">
              <i class="fa fa-edit"></i> {{ $t('system.edit') }}
            </router-link> -->
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
            <span class="btn btn-sm bg-danger-light" @click.prevent="removeAdditionalDocument(data.value.key)">
              <i class="fa fa-trash"></i> {{ $t('system.delete') }}
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
  } = useIndex({ props })

</script>

<style lang="scss" scoped>

</style>
