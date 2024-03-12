<template>
  <div class="mb-3">
    <router-link class="btn btn-sm bg-success-light me-2" :to="{ name: 'application-edit', params: { uuid: $route.params.uuid } }">
      <i class="fa fa-edit"></i> {{ $t('system.edit') }}
    </router-link>
  </div>

  <div class="col-xl-6 d-flex" v-if="form">

    <div class="card flex-fill">
      <div class="card-header">
        <h5 class="card-title d-flex justify-content-between">
            <span>{{ $t('application.application_form') }}</span>
            <router-link class="edit-link text-success" :to="$tMakeRoute({ name: 'application-edit', params: { uuid: $route.params.uuid } })">
              <!-- <i class="fa fa-edit mr-2"></i> -->
              {{ form.status.value }}
            </router-link>
        </h5>
      </div>

      <div class="card-body">

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.full_name') }}</p>
          <p class="col-sm-8">{{ form.full_name }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.birthday') }}</p>
          <p class="col-sm-8">{{ form.birthday }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.father_name') }}</p>
          <p class="col-sm-8">{{ form.father_name }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.mother_name') }}</p>
          <p class="col-sm-8">{{ form.mother_name }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.passport_number') }}</p>
          <p class="col-sm-8">{{ form.passport_number }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.phone') }}</p>
          <p class="col-sm-8">{{ form.phone }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.friend_phone') }}</p>
          <p class="col-sm-8">{{ form.friend_phone }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.home_address') }}</p>
          <p class="col-sm-8">{{ form.home_address }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.email') }}</p>
          <p class="col-sm-8">{{ form.email }}</p>
        </div>


        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.company') }}</p>
          <p class="col-sm-8">
            <router-link :to="$tMakeRoute({ name: 'company-show', params: { uuid: form.company.uuid } })" target="_blank">
              {{ form.company.name }}
            </router-link>
          </p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.country') }}</p>
          <p class="col-sm-8">{{ form.country.value }}</p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.university') }}</p>
          <p class="col-sm-8">
            <!-- <router-link :to="$tMakeRoute({ name: 'university-show', params: { uuid: form.university.uuid } })" target="_blank"> -->
              {{ form.university.name }}
            <!-- </router-link> -->
          </p>
        </div>

        <div class="row">
          <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.faculties_and_departments') }}</p>
          <div class="col-sm-8">

            <ol class="block-university-and-departments">
              <li v-for="(faculty, fIdx) in facultiesAndDepartments" :key="fIdx">
                <router-link :to="$tMakeRoute({ name: 'faculty-show', params: { uuid: faculty.uuid } })" target="_blank">
                  {{ faculty.name ?? 'Faculty name' }}
                </router-link>
                <ol class="ml-4">
                  <li v-for="(department, dIdx) in faculty.departments" :key="dIdx">
                    <router-link :to="$tMakeRoute({ name: 'department-show', params: { uuid: department.uuid } })" target="_blank">
                      {{ department.name ?? 'Department name' }}
                    </router-link>
                  </li>
                </ol>
              </li>
            </ol>

          </div>
        </div>


        <div class="row">
            <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.status') }}</p>
            <p class="col-sm-8">{{ form.status.value }}</p>
        </div>

        <div class="row">
            <p class="col-sm-4 text-muted mb-0 mb-sm-3">{{ $t('application.form.status_note') }}</p>
            <p class="col-sm-8">{{ form.status.note }}</p>
        </div>

      </div>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <DocumentsPreview v-if="form" :form="form" />
  </div>
</template>

<script setup>
  import DocumentsPreview from '../partials/documents/preview/Index.vue'
  import userEdit from './userEdit';

  const {
    form,
    activityOptions,
    facultiesAndDepartments,
    update,
  } = userEdit();
</script>

<style scoped>
.block-university-and-departments {
  padding-left: 1rem
}
</style>