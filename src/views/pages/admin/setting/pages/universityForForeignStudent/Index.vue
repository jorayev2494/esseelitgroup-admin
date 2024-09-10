<template>
  <div class="row">
    <div class="col-md-12">
      <form method="POST" @submit.prevent="update">
        <Inputs v-if="form" :form="form" :inputs="inputs" :values="form.translations" />

        <div class="text-right">
          <button type="submit" class="btn btn-primary">{{ $t('system.save_changes') }}</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup>
  import useBehavior from './useBehavior'
  import Inputs from '../../../../components/InputCard/Index.vue'

  const {
    form,
    inputs,

    update,
  } = useBehavior();

</script>
