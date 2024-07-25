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
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'role-create' })">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link>
        </div>

        <data-table
          ref="table"
          :rows="items"
          :columns="columns"
          :loading="loading"
          :totalRows="paginator.total.value"
          :pageSize="paginator.perPage.value"
          :showNumbersCount="3"
          :pageSizeOptions="paginator.perPageOptions"
          :isServerMode="true"
          :pagination="false"
          :hasCheckbox="true"
          :paginationInfo="$t('system.pagination.info', { zero: '{0}', first: '{1}', two: '{2}' })"

          skin="bh-table-hover"

          @change="changeServer"
          @rowSelect="selectedRows"
        >
          <template #is_active="data">
            <div class="d-flex flex-row">
              <IndexActivity :isActive="data.value.is_active" />
            </div>
          </template>

        </data-table>

        <div class="text-right">
          <button type="submit" class="btn btn-primary" @click="updatePermissions">{{ $t('system.save_changes') }}</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex.js';
  import IndexActivity from '@/views/pages/components/Activity/Index/Index.vue'

  const {
    table,
    items,
    columns,
    loading,
    remove,

    paginator,
    updatePermissions,

    changeServer,
    selectedRows
  } = useIndex();
</script>
