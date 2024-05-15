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

        <div class="mb-2" v-if="paginator.total.value < participantsNumber">
          <span class="btn btn-primary btn-sm me-2" @click="selectWinnerStudent">
            <i class="fa fa-plus"></i> {{ $t('system.create') }}
          </span>
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

          <template #student="data">
            <div class="d-flex flex-row">

              <div class="avatar-showcase me-3">
                <div class="avatars" v-if="data.value.student?.avatar">
                  <div class="avatar">
                    <img class="img-50 b-r-15" :src="data.value.student.avatar.url" :alt="data.value.student.avatar.url">
                  </div>
                </div>
              </div>

               <div class="mt-2" v-if="data.value.student">
                <div>
                  <router-link :to="$tMakeRoute({ name: 'student-show', params: { uuid: data.value.student.uuid } })">
                    <span class="text-primary">{{ data.value.student.full_name }}</span>
                  </router-link>
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
            <router-link class="btn btn-sm bg-primary-light me-2" :to="$tMakeRoute({ name: 'contest-student-show', params: { contestUuid, code: data.value.code } })">
              <i class="fa fa-eye"></i> {{ $t('system.show') }}
            </router-link>

            <router-link v-if="contestUuid" class="btn btn-sm bg-success-light me-2" :to="$tMakeRoute({ name: 'contest-student-edit', params: { contestUuid, code: data.value.code } })">
              <i class="fa fa-edit"></i> {{ $t('system.edit') }}
            </router-link>
            
            <!-- <span class="btn btn-sm bg-danger-light" @click="remove(data)">
              <i class="fa fa-trash"></i> {{ $t('system.delete') }}
            </span> -->
          </template>

        </data-table>

      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';
  import useIndex from './useIndex.js';

  const props = defineProps({
      contestUuid: {
        type: [String],
        required: true,
      },
      participantsNumber: {
        type: Number,
        required: true,
      },
  });

  console.log('Props props: ', props);

  const {
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
    selectWinnerStudent,
    getStatusStyle,
  } = useIndex({ props });
</script>

<style lang="scss" scoped>

</style>
