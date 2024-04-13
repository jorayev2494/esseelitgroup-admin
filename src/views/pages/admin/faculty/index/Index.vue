<template>
  <div class="col-sm-12">
    <div class="card">

      <div class="card-header">
        <h4 class="card-title">Default Datatable</h4>
        <p class="card-text">
          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>
          class to initialize datatables.
        </p>
      </div>

      <div class="card-body">

        <div class="mb-2">
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'faculty-create' })">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link>
        </div>

        <data-table
          :rows="items"
          :columns="columns"
          :loading="loading"
          :totalRows="paginator.total.value"
          :pageSize="paginator.perPage.value"
          :showNumbersCount="3"
          :pageSizeOptions="paginator.perPageOptions"
          :isServerMode="true"

          skin="bh-table-hover"

          @change="changeServer"
        >

          <template #name="data">
            <div class="d-flex flex-row">
              <div class="avatar-showcase">
                <div class="avatars">
                  <div class="avatar">

                    <img class="img-50 b-r-15" :src="data.value.logo" :alt="data.value.logo">

                  </div>
                </div>
              </div>

              <div class="m-2">
                <div>
                  <span class="text-dark">{{ data.value.name?.value }}</span>
                </div>
              </div>

            </div>
          </template>

          <template #university="data">
            <div class="d-flex flex-row" v-if="data.value.university">

              <div class="avatar-showcase">
                <div class="avatars">
                  <div class="avatar">

                    <Badge :is-show="data.value.university.is_on_the_country_list" />
                    <img class="img-50 b-r-15" :src="data.value.university.logo.url" :alt="data.value.university.logo.url">

                  </div>
                </div>
              </div>

              <div class="m-2">
                <div>
                  <span class="text-dark">{{ data.value.university.name }}</span>
                </div>
              </div>

            </div>
          </template>

          <template #actions="data">
            <!-- <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'faculty-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-info-circle"></i> {{ $t('system.show') }}
            </router-link> -->

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'faculty-edit', params: { uuid: data.value.uuid } })">
              <i class="fa fa-edit"></i> {{ $t('system.edit') }}
            </router-link>
            
            <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i> {{ $t('system.delete') }}
            </span>
          </template>

        </data-table>

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex.js';
  import Badge from '../../../components/partials/badge/Index.vue'

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
  } = useIndex();  
</script>

<style lang="scss" scoped>

</style>
