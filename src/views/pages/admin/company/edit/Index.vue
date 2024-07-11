<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('company.form.name') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.name" class="form-control" :placeholder="$t('company.form.name')" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('company.form.email') }}</label>
                    <div class="col-lg-9">
                        <input type="email" v-model="form.email" class="form-control" :placeholder="$t('company.form.email')" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('company.form.logo') }}</label>
                    <div class="col-lg-9">
                        <input class="form-control" type="file" accept="image/*" @change="uploadLogo">
                    </div>
                </div>

                <div class="form-group row">
                  <label class="col-lg-3 col-form-label">{{ $t('company.form.is_main') }}</label>
                  <div class="col-lg-9">
                    <div class="status-toggle d-flex justify-content-left">
                      <input type="checkbox" id="is_main" name="is_main" v-model="form.is_main" class="check">
                      <label for="is_main" class="checktoggle m-0">checkbox</label>
                    </div>
                  </div>
                </div>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
                </div>
            </form>
        </div>
    </div>
  </div>

  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">{{ $t('company.form.logo') }}</h4>
      </div>
      <center>
        <div class="card-body mt-4">
          <div class="avatar avatar-xxl mr-2">
            <img class="avatar-img rounded" alt="User Image" :src="logoPreview">
          </div>
          <!-- <div class="avatar avatar-xxl ml-2">
            <img class="avatar-img rounded" alt="User Image" :src="logoPreview">
          </div> -->
        </div>
    </center>
    </div>
  </div>
</template>

<script setup>
  import useEdit from './useEdit';

  const { form, logoPreview, uploadLogo, update } = useEdit();
</script>