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

          <template #author="data">
            <div class="d-flex flex-row" v-if="data.value.author">

              <div class="avatar-showcase me-3" v-if="data.value.author.avatar">
                <div class="avatars">
                  <div class="avatar">
                    <img class="img-50 b-r-15" :src="data.value.author.avatar.url" :alt="data.value.author.avatar.url">
                  </div>
                </div>
              </div>

              <div class="mt-1">
                <div>
                  <span class="text-dark">{{ data.value.author.full_name }}</span>
                </div>
                <div>
                  <!-- <span class="text-muted">{{ data.value.author.email }}</span> -->
                </div>
              </div>

            </div>
          </template>

          <template #content="data">
            <strong>
              {{ data.value.title }}
            </strong>
            <div>
              {{ data.value.content }}
            </div>
          </template>

          <template #actions="data">
            <a data-bs-toggle="modal" href="#show-modal" class="btn btn-sm bg-success-light" @click="setModalShowData(data.value.uuid)">
              <i class="fa fa-eye"></i> {{ $t('system.show') }}
            </a>
          </template>

        </data-table>

        <div class="modal fade" id="show-modal" role="dialog" style="display:" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="form-content p-2">
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                  <h5 class="modal-title">Announcement</h5>

                  <h4 class="modal-title">{{ modalShowData.title }}</h4>
                  <p class="mb-4">{{ modalShowData.content }}</p>

                  <!-- <button type="button" class="btn btn-primary">Delete </button> -->
                  <!-- <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
  import useIndex from './useIndex.js';
  // import Show from '../../components/modals/show/Index.vue'

  const {
    items,
    columns,
    loading,
    modalShowData,

    paginator,

    changeServer,
    setModalShowData,
  } = useIndex();  
</script>

<style lang="scss" scoped>

</style>
