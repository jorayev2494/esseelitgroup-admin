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
          <router-link
            v-permission="RESOURCE_ACTIONS.RESOURCE_CREATE"
            class="btn btn-primary btn-sm me-2"
            :to="$tMakeRoute({ name: 'announcement-create' })"
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

          <!-- <template #university="data">
            <div class="d-flex flex-row">
              <img :src="data.value.university.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ data.value.university.name }}</div>
            </div>
          </template> -->

          <template #author="data">
            <div class="d-flex flex-row" v-if="data.value.author">

              <div class="avatar-showcase me-3" v-if="data.value.author.avatar">
                <div class="avatars">
                  <div class="avatar">
                    <img class="img-50 avatar-img rounded b-r-15" :src="data.value.author.avatar" :alt="data.value.author.avatar">
                  </div>
                </div>
              </div>

              <div class="mt-1">
                <div>
                  <span class="text-dark">{{ data.value.author.full_name }}</span>
                </div>
                <div>
                  <span class="text-muted">{{ data.value.author.email }}</span>
                </div>
              </div>

            </div>
          </template>

          <template #is_active="data">
            <div class="d-flex flex-row">
              <IndexActivity :isActive="data.value.is_active" />
            </div>
          </template>

          <template #actions="data">
            <!-- <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'announcement-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-info-circle"></i>
            </router-link> -->

            <router-link
              v-permission="RESOURCE_ACTIONS.RESOURCE_UPDATE"
              class="btn btn-sm bg-success-light me-2"
              :to="$tMakeRoute({ name: 'announcement-edit', params: { uuid: data.value.uuid } })"
            >
              <i class="fa fa-edit"></i>
            </router-link>
            
            <span
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
  import IndexActivity from '@/views/pages/components/Activity/Index/Index.vue'

  const {
    RESOURCE_ACTIONS,

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
