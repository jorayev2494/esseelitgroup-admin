<template>
  <div class="col-sm-12">
    <WidgetStatusValues @click="statusSelected" @clear="clearSelected" />

    <div class="card">

      <div class="card-header">
        <h4 class="card-title">Default Datatable</h4>
        <p class="card-text">
          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>
          class to initialize datatables.
        </p>
      </div>

      <div class="card-body">

        <!-- <div class="mb-2">
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'application-create' })">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </router-link>
        </div> -->

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
          <template #student="data">
            <div class="d-flex flex-row" v-if="data.value.student">

              <div class="avatar-showcase me-3" v-if="data.value.student.avatar">
                <div class="avatars">
                  <div class="avatar">
                    <img class="img-50 avatar-img rounded b-r-15" :src="data.value.student.avatar.url" :alt="data.value.student.avatar.url">
                  </div>
                </div>
              </div>

              <div class="mt-1">
                <div>
                  <span class="text-dark">{{ data.value.student.full_name }}</span>
                </div>
                <div>
                  <span class="text-muted">{{ data.value.student.email }}</span>
                </div>
              </div>

            </div>
          </template>

          <template #country="data">            
            <div class="d-flex flex-row" v-if="data.value.country">
              <p class="h3">
                <i :class="`fi fi-${data.value.country.iso}`" width="300"></i>
              </p>
              <div class="m-2">{{ data.value.country.value }}</div>
            </div>
          </template>

          <template #language="data">            
            <div class="d-flex flex-row" v-if="data.value.language">
              <p class="h3">
                <i :class="`fi fi-${data.value.language.iso}`" width="300"></i>
              </p>
              <div class="m-2">{{ data.value.language.value }}</div>
            </div>
          </template>

          <template #company="data">
            <div class="d-flex flex-row" v-if="data.value?.student?.company">
              <img :src="data.value?.student?.company?.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ data.value?.student?.company.name }}</div>
            </div>
          </template>

          <template #university="data">
            <div class="d-flex flex-row" v-if="data.value.university">
              <img class="avatar-img rounded" :src="data.value.university.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ data.value.university.name }}</div>
            </div>
          </template>

          <template #status="data">
            <span class="badge" :style="getStatusStyle(data.value.status.value)">
              {{ data.value.status.value.value }}
            </span>
          </template>

          <template #actions="data">
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'application-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-eye"></i>
            </router-link>

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'application-edit', params: { uuid: data.value.uuid } })">
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
  import WidgetStatusValues from '../../applicationStatusValue/components/widgetList/Index.vue'

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
    getStatusStyle,
    statusSelected,
    clearSelected,
  } = useIndex();  
</script>

<style lang="scss" scoped>

</style>
