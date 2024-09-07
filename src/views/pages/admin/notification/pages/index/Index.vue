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
          <!-- <router-link
            v-permission="RESOURCE_ACTIONS.RESOURCE_CREATE"
            class="btn btn-primary btn-sm me-2"
            :to="$tMakeRoute({ name: 'degree-create' })"
          >
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link> -->
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
          rowClass="noti-content"

          @change="changeServer"
        >
          <template #content="{ key, value: { type, payload, viewed_managers, is_viewed } }">
            <component
              :key="key"
              :is="type"
              :payload="payload"
              :viewed-managers="viewed_managers"
              :viewed="is_viewed"
              is-notifications-page
            />
          </template>

          <template #actions="data">
            <!-- <router-link
              v-permission="RESOURCE_ACTIONS.RESOURCE_SHOW"
              class="btn btn-sm bg-primary-light me-2"
              :to="$tMakeRoute({ name: 'city-show', params: { uuid: data.value.uuid } })"
            >
              <i class="fa fa-info-circle"></i>
            </router-link> -->

            <router-link
              v-permission="RESOURCE_ACTIONS.RESOURCE_UPDATE"
              class="btn btn-sm bg-success-light me-2"
              :to="$tMakeRoute({ name: 'degree-edit', params: { uuid: data.value.uuid } })"
            >
              <i class="fa fa-edit"></i>
            </router-link>
            
            <!-- <span
              v-permission="RESOURCE_ACTIONS.RESOURCE_DELETE"
              class="btn btn-sm bg-danger-light"
              @click="remove(data)"
            >
              <i class="fa fa-trash"></i>
            </span> -->
          </template>

        </data-table>

      </div>
    </div>
  </div>
</template>

<script>
  import useIndex from './useIndex.js';
  import notificationComponents from "@/services/notification/components/index";

  export default {
    setup() {
      const {
        RESOURCE_ACTIONS,

        items,
        columns,
        loading,

        paginator,

        changeServer,
      } = useIndex();

      return {
        RESOURCE_ACTIONS,

        items,
        columns,
        loading,

        paginator,

        changeServer,
      }
    },
    components: {
      ...notificationComponents,
    }
  }
</script>

<style scoped>

</style>
