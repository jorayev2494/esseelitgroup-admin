<template>
  <div class="col-xl-6">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('country.form.name') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.value" class="form-control" maxlength="100" :placeholder="$t('country.form.name')" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('country.form.iso') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.iso" class="form-control" maxlength="3" :placeholder="$t('country.form.iso')" required>
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
    
  </div>

</template>

<script setup>
  import useEdit from './useEdit.js';

  const {
    form,

    create,
  } = useEdit();
</script>