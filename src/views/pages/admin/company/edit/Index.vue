<template>
  <div class="col-xl-6 d-flex">
    <div class="card flex-fill">
        <div class="card-header">
            <h4 class="card-title">Basic Form</h4>
        </div>

        <div class="card-body">
            <form action="#" method="POST" @submit.prevent="update" enctype="multipart/form-data">
                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Name</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.name" class="form-control" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Domain</label>
                    <div class="col-lg-9">
                        <input type="text" v-model="form.domain" class="form-control" required>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-lg-3 col-form-label">Logo</label>
                    <div class="col-lg-9">
                        <input class="form-control" type="file" accept="image/*" @change="uploadLogo">
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
    <div class="card flex-fill">
      <div class="card-header">
        <h4 class="card-title">Logos</h4>
      </div>
      <center>
        <div class="card-body mt-4">
          <div class="avatar avatar-xxl mr-2">
            <img class="avatar-img rounded-circle" alt="User Image" :src="logoPreview">
          </div>
          <div class="avatar avatar-xxl ml-2">
            <img class="avatar-img rounded" alt="User Image" :src="logoPreview">
          </div>
        </div>
    </center>
    </div>
  </div>
</template>

<script setup>
  import useEdit from './useEdit';

  const { form, logoPreview, uploadLogo, update } = useEdit();
</script>