<template>
  <div class="col-sm-12">
    <WidgetStatusValues @click="statusSelected" @clear="clearSelected" />
    <Search :form="searchForm" @search="loadFilters" placeholder="student.search_placeholder_full_name" class="mb-3" />
    <TableFilter :filters="filters" @filter="loadFilters" class="mb-3" />

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
          <router-link class="btn btn-primary btn-sm me-2" :to="$tMakeRoute({ name: 'student-create' })">
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

          <template #application_language="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ language }, idx) of data.value.applications" :key="idx">
                <div class="d-flex flex-row" v-if="language">
                  <p class="h3">
                    <i :class="`fi fi-${language.iso}`" width="300"></i>
                  </p>
                  <div class="m-2">{{ language.value }}</div>
                </div>
              </template>
            </div>
          </template>

          <template #application_country="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ country }, idx) of data.value.applications" :key="idx">
                <div class="d-flex flex-row" v-if="country">
                  <p class="h3">
                    <i :class="`fi fi-${country.iso}`" width="300"></i>
                  </p>
                  <div class="m-2">{{ country.value }}</div>
                </div>
              </template>
            </div>
          </template>

          <template #application_university="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ university }, idx) of data.value.applications" :key="idx">
                <div class="d-flex flex-row" v-if="university">
                  <img class="avatar-img rounded" :src="university.logo" :alt="university.logo" width="35" />
                  <div class="m-2">{{ university.name }}</div>
                </div>
              </template>
            </div>        
          </template>

          <template #application_degree="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ degree: { uuid, value } }, aIdx) of data.value.applications" :key="aIdx + uuid">
                <div class="d-flex flex-row" v-if="value">
                  <div class="m-2">{{ value }}</div>
                </div>
              </template>
            </div>        
          </template>

          <template #application_departments="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ departments }, idx) of data.value.applications" :key="idx">
                <div class="d-flex flex-row" v-if="departments.length">
                  <template v-for="({ department }, dIdx) of departments" :key="dIdx">
                    <div class="m-2">{{ department?.name?.value }}</div>
                  </template>
                </div>
              </template>
            </div>        
          </template>

          <template #application_status="data">
            <div v-if="data.value.applications.length">
              <template v-for="({ status }, idx) of data.value.applications" :key="idx">
                <span class="badge" :style="useApplicationStatusStyle(status.value)" v-if="status" :key="idx">
                  {{ status.value.value }}
                </span>
              </template>
            </div>
          </template>

          <template #actions="data">
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'student-show', params: { uuid: data.value.uuid } })">
              <i class="fa fa-eye"></i>
            </router-link>

            <router-link class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'student-edit', params: { uuid: data.value.uuid } })">
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
  import WidgetStatusValues from '../../../applicationStatusValue/components/widgetList/Index.vue'
  import Search from '@/views/pages/components/search/Index.vue'
  import TableFilter from '@/views/pages/components/tableFilter/Index.vue'

  const {
    searchForm,
    items,
    columns,
    loading,
    remove,
    filters,

    paginator,

    changeServer,
    useApplicationStatusStyle,
    statusSelected,
    clearSelected,
    loadFilters,
  } = useIndex();  
</script>

<style lang="scss" scoped>

</style>
