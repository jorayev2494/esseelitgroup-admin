<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('city.form.company') }}</label>
                    <div class="col-lg-9">
                    <select class="form-select" v-model="form.company_uuid" @change="companyChanged" required>
                        <option value="" disabled selected>{{ $t('city.form.company') }}</option>
                        <option
                            v-for="({ uuid, name }, idx) of companies" :key="idx"
                            :value="uuid"
                        >
                        {{ name }}
                        </option>
                    </select>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('city.form.country') }}</label>
                    <div class="col-lg-9">
                    <select class="form-select" v-model="form.country_uuid" oninvalid="() => 'Default select example'" required>
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
    <Inputs :form="form" :inputs="inputs" />
  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,
    companies,
    countries,

    companyChanged,
    create,
  } = useEdit();
</script>