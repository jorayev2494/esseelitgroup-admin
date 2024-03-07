<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="create" enctype="multipart/form-data">
              <pre>{{ form }}</pre>
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
                    <label class="col-lg-3 col-form-label">{{ $t('company.form.domain') }}</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.domain" class="form-control" :placeholder="$t('company.form.domain')" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">{{ $t('company.form.logo') }}</label>
                    <div class="col-lg-9">
                        <input class="form-control" type="file" accept="image/*" @change="uploadLogo">
                    </div>
                </div>

                <div class="text-right">
                    <button type="submit" class="btn btn-primary">{{ $t('system.save') }}</button>
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
        <div class="card-body mt-2">
          <div class="avatar avatar-xxl mr-2">
            <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
          </div>
          <!-- <div class="avatar avatar-xxl mt-5 ml-2">
            <img class="avatar-img rounded" alt="User Image" :src="logoPreview">
          </div> -->
        </div>
    </center>
    </div>
  </div>
</template>

<script setup>
  import useCreate from './useCreate';

  const {
    form,
    logoPreview,
    uploadLogo,
    create,
  } = useCreate();
</script>