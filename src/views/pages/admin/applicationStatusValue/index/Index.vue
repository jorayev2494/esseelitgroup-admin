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
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'application-status-create' })">
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

          <template #text_color="data">
            <input type="color" v-model="data.value.text_color" class="form-control form-control-color" disabled>
          </template>

          <template #background_color="data">
            <input type="color" v-model="data.value.background_color" class="form-control form-control-color" disabled>
          </template>

          <template #actions="data">
            <!-- <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'city-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-info-circle"></i>
            </router-link> -->

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'application-status-edit', params: { uuid: data.value.uuid } })">
              <i class="fa fa-edit"></i>
            </router-link>
            
            <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i>
            </span>
          </template>

        </data-table>

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex.js';

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
  } = useIndex();  
</script>
