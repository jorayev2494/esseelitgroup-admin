<template>
  <div class="col-xl-12 col-md-12">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('application.documents') }}</h4>
      </div>

      <div class="card-body">

        <!-- <div class="mb-2">
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'company-create' })">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link>
        </div> -->

        <data-table
          v-if="documentItems.length"
          :columns="documentColumns"
          :rows="documentItems"
          skin="bh-table-hover"
          :pagination="false"
        >
          <template #document_type="data">
            <span>{{ $t(`application.form.documents.${data.value.document_type}`) }}</span>
          </template>

          <template #actions="data">
            <span>
              <a class="me-2" :href="data.value.url" target="blank" @click.stop>
                <i class="fa fa-eye"></i>
              </a>
            </span>

            <!-- <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-edit', params: { uuid: data.value.uuid } })">
              <i class="fa fa-edit"></i> {{ $t('system.edit') }}
            </router-link> -->
            
            <!-- <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i> {{ $t('system.delete') }}
            </span> -->

          </template>
        </data-table>

        <h4 class="mt-5">{{ $t('application.additional_documents') }}</h4>

        <data-table
          v-if="form.additional_documents?.length"
          :columns="additionalDocumentColumns"
          :rows="form.additional_documents"
          skin="bh-table-hover"
          :pagination="false"
        >
          <template #actions="data">
            <div>
              <a class="me-2" :href="data.value.url" target="blank" @click.stop>
                <i class="fa fa-eye"></i>
              </a>
            </div>

            <!-- <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'company-edit', params: { uuid: data.value.uuid } })">
              <i class="fa fa-edit"></i> {{ $t('system.edit') }}
            </router-link> -->
            
            <!-- <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i> {{ $t('system.delete') }}
            </span> -->
          </template>
        </data-table>

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
    }
  })

  const {
    documentColumns,
    documentItems,
    additionalDocumentColumns,
    additionalDocumentItems,
  } = useIndex({ props })

</script>

<style lang="scss" scoped>

</style>
