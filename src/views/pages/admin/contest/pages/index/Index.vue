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
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'contest-create' })">
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

          <!-- <template #university="data">
            <div class="d-flex flex-row">
              <img :src="data.value.university.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ data.value.university.name }}</div>
            </div>
          </template> -->

          <template #university="data">
            <div class="d-flex flex-row" v-if="data.value.university">

              <div class="avatar-showcase">
                <div class="avatars">
                  <div class="avatar">

                    <Badge :is-show="data.value.university.is_on_the_country_list" />
                    <img :src="data.value.university.logo.url" alt="user-profile" width="35" />

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

          <template #faculty="data">
            <div class="d-flex flex-row" v-if="data.value.faculty">
              <img :src="data.value.faculty.logo.url" alt="user-profile" width="35" />
              <div class="m-2">{{ data.value.faculty.name }}</div>
            </div>
          </template>

          <template #degrees="data">
            <div class="d-flex flex-row">
              <div 
                v-for="(degree, idx) of data.value.degrees" :key="idx"
                class="badge bg-primary-light me-2"
              >
                {{ degree.value }}
              </div>
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

          <template #price="data">
            <div class="d-flex flex-row">
              <p class="mt-2">
                {{ data.value.price }}
                {{ data.value.price_currency?.code }}
              </p>
            </div>
          </template>

          <template #actions="data">
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'contest-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-info-circle"></i>
            </router-link>

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'contest-edit', params: { uuid: data.value.uuid } })">
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
  import Badge from '../../../../components/partials/badge/Index.vue'

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
