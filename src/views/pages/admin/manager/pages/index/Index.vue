<template>
  <div class="col-sm-12">
    <div class="card">

      <div class="card-header">
        <h4 class="card-title">{{ $t('manager.context_title') }}</h4>
        <p class="card-text">
          <!-- This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>
          class to initialize datatables. -->
        </p>
      </div>

      <div class="card-body">

        <div class="mb-2">
          <router-link
            v-permission="RESOURCE_ACTIONS.RESOURCE_CREATE"
            class="btn btn-primary btn-sm me-2"
            :to="$tMakeRoute({ name: 'manager-create' })"
          >
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
          :paginationInfo="$t('system.pagination.info', { zero: '{0}', first: '{1}', two: '{2}' })"

          skin="bh-table-hover"

          @change="changeServer"
        >

          <template #full_name="data">
            <div class="d-flex flex-row">

              <div class="avatar-showcase me-3" v-if="data.value.avatar">
                <div class="avatars">
                  <div class="avatar">
                    <img class="img-50 avatar-img rounded b-r-15" :src="data.value.avatar" :alt="data.value.avatar">
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

          <template #role="data">
            <span v-if="data.value.role">
              {{ data.value.role.name }}
            </span>
          </template>

          <template #actions="data">
            <router-link
              v-permission="RESOURCE_ACTIONS.RESOURCE_SHOW"
              class="btn btn-sm bg-primary-light me-2"
              :to="$tMakeRoute({ name: 'manager-show', params: { uuid: data.value.uuid } })"
            >
              <i class="fa fa-eye"></i>
            </router-link>

            <router-link
              v-if="$store.getters['auth/getAuthDataProperty']('uuid') !== data.value.uuid"
              v-permission="RESOURCE_ACTIONS.RESOURCE_UPDATE"
              class="btn btn-sm bg-success-light me-2"
              :to="$tMakeRoute({ name: 'manager-edit', params: { uuid: data.value.uuid } })"
            >
              <i class="fa fa-edit"></i>
            </router-link>
            
            <span
              v-if="$store.getters['auth/getAuthDataProperty']('uuid') !== data.value.uuid"
              v-permission="RESOURCE_ACTIONS.RESOURCE_DELETE"
              class="btn btn-sm bg-danger-light"
              @click="remove(data)"
            >
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
    RESOURCE_ACTIONS,

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
