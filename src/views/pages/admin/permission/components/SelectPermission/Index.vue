<template>
  <div class="col-sm-12">
    <!-- <div class="card">
      <div class="card-header">
        <h4 class="card-title">Default Datatable</h4>
        <p class="card-text">
          This is the most basic example of the datatables with zero configuration. Use the <code>.datatable</code>
          class to initialize datatables.
        </p>
      </div>
      <div class="card-body"> -->

      <pre>{{ tables }}</pre>

        <template v-for="(actions, resource, idx) of items" :key="idx">

          <section class="comp-section comp-dropdowns">

            <div class="card">
              <div class="card-body">

                <!-- <pre>{{ tables[resource] }}</pre> -->

                <div class="section-header">
                  <h3 class="section-title">{{ $t(`permission.resources.${resource}`) }}</h3>
                  <div class="line"></div>
                </div>

                <data-table
                  :key="resource + idx"
                  :ref="tables[resource]"
                  :rows="actions"
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
                  class="mb-2"

                  skin="bh-table-hover"
                  :rowClass="rowBgClass"

                  @change="changeServer"
                  @rowSelect="selectedRows"
                >
                  <template #resource="data">
                    <span>
                      {{ $t(`permission.resources.${data.value.resource}`) }}
                    </span>
                  </template>

                  <template #action="data">
                    <span>
                      {{ $t(`permission.actions.${data.value.action}`) }}
                    </span>
                  </template>

                  <template #is_active="data">
                    <div class="d-flex flex-row">
                      <IndexActivity :isActive="data.value.is_active" />
                    </div>
                  </template>

                </data-table>

              </div>
            </div>
          </section>

        </template>

        <!-- <data-table
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
          :rowClass="rowBgClass"

          @change="changeServer"
          @rowSelect="selectedRows"
        >
          <template #resource="data">
            <span>
              {{ $t(`permission.resources.${data.value.resource}`) }}
            </span>
          </template>

          <template #action="data">
            <span>
              {{ $t(`permission.actions.${data.value.action}`) }}
            </span>
          </template>

          <template #is_active="data">
            <div class="d-flex flex-row">
              <IndexActivity :isActive="data.value.is_active" />
            </div>
          </template>

        </data-table> -->

        <div class="text-right mt-2">
          <button type="submit" class="btn btn-primary" @click="updatePermissions">{{ $t('system.save_changes') }}</button>
        </div>

      <!-- </div>
    </div> -->
  </div>

</template>

<script setup>
  import useIndex from './useIndex.js';
  import IndexActivity from '@/views/pages/components/Activity/Index/Index.vue'
  import { reactive, ref } from 'vue';

  // const rowClass = ({ resource }) => {

  //   const resourceClasses = {
  //     // country: 'text-bg-primary-company',
  //     country: 'bg-success p-2 text-white bg-opacity-75',
  //   }

  //   return resourceClasses[resource] ?? 'text-bg-light';
  // }

  const tables = ref({});

  const {
    table,
    items,
    columns,
    loading,

    paginator,
    updatePermissions,
    rowBgClass,

    changeServer,
    selectedRows
  } = useIndex();
</script>

<style lang="css">
  .text-bg-primary-company {
    color: #fff !important;
    background-color: orange !important;
  }
</style>

