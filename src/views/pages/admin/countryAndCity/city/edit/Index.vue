<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('city.form.country') }}</label>
                    <div class="col-lg-9">
                    <select class="form-select" v-model="form.country_uuid" aria-label="Default select example" required>
                        <option value="" disabled selected>{{ $t('city.form.country') }}</option>
                        <option
                            v-for="({ uuid, value }, idx) of countries" :key="idx"
                            :value="uuid"
                        >
                        {{ value }}
                        </option>
                    </select>
                    </div>
                </div>

                <!-- <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('city.form.name') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.value" class="form-control" maxlength="100" :placeholder="$t('city.form.name')" required>
                    </div>
                </div> -->

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
                </div>
            </form>
        </div>
    </div>

  </div>

  <div class="col-xl-6 d-flex">
    <Inputs v-if="form.translations" :form="form" :inputs="inputs" :values="form.translations" />
  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,
    countries,

    update,
  } = useEdit();
</script>