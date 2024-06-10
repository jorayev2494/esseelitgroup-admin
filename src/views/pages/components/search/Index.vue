<template>
  <div class="card p-2">
    <div class="row">

      <div class="col-md-10 col-lg-10 col-xl-10">
        <input class="form-control" type="search" v-model="form.search" @ :placeholder="$t(placeholder)" @keyup.enter="searchHandler" aria-label="Search">
      </div>

      <div class="col-md-2 col-2">
        <button type="submit" class="btn btn-block btn-outline-primary" @click="searchHandler">
          {{ $t('system.search_btn') }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits, onBeforeMount, toRefs } from 'vue';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'search.search_placeholder',
    },
  });

  const emits = defineEmits(['search'])

  const searchHandler = () => {
    emits('search');
  }

  const mountQueryParamsSearch = () => {
    const queryParams = route.query;

    if ('search' in queryParams && 'search_by' in queryParams) {
      form.value.search = queryParams.search.trim();
      form.value.search_by = queryParams.search_by.trim();
    }
  }

  onBeforeMount(() => {
    mountQueryParamsSearch()
  })

  const {
    form,
  } = toRefs(props);

</script>
