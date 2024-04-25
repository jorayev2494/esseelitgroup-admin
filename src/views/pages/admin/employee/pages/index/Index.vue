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
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'employee-create' })">
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

          <template #full_name="data">
            <div class="d-flex flex-row">

              <div class="avatar-showcase me-3" v-if="data.value.avatar">
                <div class="avatars">
                  <div class="avatar">
                    <img class="img-50 b-r-15" :src="data.value.avatar.url" :alt="data.value.avatar.url">
                  </div>
                </div>
              </div>

              <div class="mt-1">
                <div>
                  <span class="text-dark">{{ data.value.full_name }}</span>
                </div>
                <div>
                  <span class="text-muted">{{ data.value.email }}</span>
                </div>
              </div>

            </div>
          </template>

          <template #gender="data">
            <span v-if="data.value.gender">
              {{ data.value ? data.value.gender[0].toUpperCase() + data.value.gender?.slice(1) : null }}
            </span>
          </template>

          <template #actions="data">
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'employee-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-eye"></i> {{ $t('system.show') }}
            </router-link>

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'employee-edit', params: { uuid: data.value.uuid } })">
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

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
    getStatusStyle,
  } = useIndex();  
</script>

<style lang="scss" scoped>

</style>
