<template>
  <!-- <pre>{{ form }}</pre>
  <pre>{{ universities }}</pre> -->
  <div class="col-xl-6 d-flex" v-if="form">

    <div class="card flex-fill">
      <div class="card-header">
          <h4 class="card-title">Basic Form</h4>
      </div>

      <div class="card-body">
        <div class="mb-2">
          <router-link class="btn btn-sm bg-success-light me-2" :to="{ name: 'application-edit', params: { uuid: form.uuid } }">
            <i class="fa fa-edit"></i> {{ $t('system.edit') }}
          </router-link>
        </div>

        <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Full name</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.full_name" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Birthday</label>
            <div class="col-lg-9">
                <input type="date" v-model="form.birthday" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Father name</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.father_name" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Mother name</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.mother_name" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Passport number</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.passport_number" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Phone</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.phone" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Friend phone</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.friend_phone" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Home address</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.home_address" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Email</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.email" class="form-control" disabled />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Universities</label>
            <div class="col-lg-9">
              <select class="form-select" v-model="form.university_uuid" aria-label="Default select example" disabled>
                <option selected>Open this select menu</option>
                <option
                  v-for="({ uuid, name }, idx) of universities" :key="idx"
                  :value="uuid"
                  >
                  {{ name }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Faculties</label>
            <div class="col-lg-9">
              <select class="form-select" v-model="form.faculty_uuid" aria-label="Default select example" disabled>
                <option selected>Open this select menu</option>
                <option
                  v-for="({ uuid, name }, idx) of faculties" :key="idx"
                  :value="uuid"
                  >
                  {{ name }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Status {{ form.status.value }}</label>
            <div class="col-lg-9">
              <select class="form-select" aria-label="Default select example" disabled>
                <option
                  v-for="(value, idx) of statuses" :key="idx"
                  :value="value"
                  :selected="value === form.status.value"
                >
                  {{ value }}
                </option>
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-lg-3 col-form-label">Note</label>
            <div class="col-lg-9">
                <input type="text" v-model="form.note" class="form-control" disabled />
            </div>
          </div>

          <div class="text-right">
              <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
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
    faculties,
    universities,
    statuses,
    update,
  } = userEdit();
</script>