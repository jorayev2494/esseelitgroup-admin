<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
          <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

            <div class="form-group row">
              <label class="col-lg-3 col-form-label">University</label>
              <div class="col-lg-9">
                <select class="form-select" aria-label="Default select example" required @change="loadFaculties">
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
                <select class="form-select" v-model="form.faculty_uuid" aria-label="Default select example" required>
                  <option selected disabled>Open this select menu</option>
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
              <label class="col-lg-3 col-form-label">Activity</label>
              <div class="col-lg-9">
                <select class="form-select" v-model="form.is_active" aria-label="Default select example" required>
                  <option
                    v-for="(value, key) of activityOptions" :key="key"
                    :value="value"
                    :selected="key === 'active'"
                  >
                    {{ key }}
                  </option>
                </select>
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
    <Inputs :form="form" />
  </div>
</template>

<script setup>
  import Inputs from '../partials/input/Index.vue'
  import useCreate from './useCreate';

  const { form, activityOptions, faculties, universities, create, loadFaculties} = useCreate();
</script>