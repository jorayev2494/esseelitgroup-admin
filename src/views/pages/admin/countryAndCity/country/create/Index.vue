<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('country.form.flag_prefix') }}</label>

                  <div class="col-lg-7">
                    <input type="text" v-model="form.iso" class="form-control float-start" maxlength="2" :placeholder="$t('country.form.flag_prefix')" required>
                    <div class="valid">
                      <small class="text-secondary">
                        Flag prefixes:
                        <a href="https://flagicons.lipis.dev" target="blank" class="text-success">
                          <em>https://flagicons.lipis.dev</em>
                        </a>
                      </small>
                    </div>
                  </div>

                  <div class="col-lg-2">
                    <p class="h2">
                      <i :class="`fi fi-${form.iso}`" width="100"></i>
                    </p>
                  </div>
                </div>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
                </div>
            </form>
        </div>
    </div>

  </div>

  <div class="col-xl-6">
    <Inputs :form="form" :inputs="inputs" />
  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,

    create,
  } = useEdit();
</script>