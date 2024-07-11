<template>
  <div class="card flex-fill" v-if="form">
    <div class="card-header">
        <h4 class="card-title">Basic Form</h4>
    </div>

    <div class="card-header" v-if="form.translations">
      <ul role="tablist" class="nav nav-tabs card-header-tabs float-right">

        <li class="nav-item" v-for="(locale, idx) of Object.keys(form.translations)" :key="idx">
          <a
            :href="`#tab-${locale}`"
            data-bs-toggle="tab"
            class="nav-link"
            :class="idx === 0 ? 'active' : ''"
            @click="setActive(locale)"
          >
            {{ locale }}
          </a>
        </li>

      </ul>
    </div>

    <div class="card-body">
      <div class="tab-content pt-0" v-if="form.translations">

        <div
          role="tabpanel"
          v-for="(locale, idx) of Object.keys(form.translations)" :key="idx"
          :id="`#tab-${locale}`"
          class="tab-pane fade show"
          :class="{ 'active': activeLocale === locale }"
        >
          <div class="form-group row" v-for="(value, name) of form.translations[locale]" :key="name">
            <label class="col-lg-3 col-form-label">{{ name }}</label>
            <div class="col-lg-9">
              <div v-if="inputs[name]['type'] == 'text'">
                <input type="text" class="form-control" v-model="form.translations[locale][name]" :key="locale + name" :placeholder="name" required>
              </div>
              <div v-if="inputs[name]['type'] == 'textarea'">
                <textarea class="form-control" v-model="form.translations[locale][name]" :key="locale + name" rows="5" :placeholder="name" required style="height: 100%;"></textarea>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>  
</template>


<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    }
  });

  const activeLocale = ref('');
  const isLoaded = ref(false);

  const inputs = {
    name: {
      type: 'text',
    },
    label: {
      type: 'text',
    },
    description: {
      type: 'textarea',
    },
  }

  const setActive = locale => {
    activeLocale.value = locale
  }

  setTimeout(() => {
    isLoaded.value = true;
    setActive(Object.keys(props.form.translations)[0]);
  }, 1000);
  
</script>

<style lang="scss" scoped>

</style>