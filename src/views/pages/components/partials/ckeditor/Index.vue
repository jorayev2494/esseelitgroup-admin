<template>
  <ckeditor
    v-model="form.translations[locale][name]"
    :editor="editor"
    class="form-control"
    :config="editorConfig">
  </ckeditor>
</template>

<script setup>
  import { defineProps } from 'vue'
  import useInput from './useInput'
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  const ckeditor = CKEditor.component;
  const editor = ClassicEditor;

  const props = defineProps({
    form: {
      type: Object,
      required: true,
    },
    locale: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  });

  const { editorConfig } = useInput({ props })

</script>

<style scoped>
/* .ck-editor {
  height: 250px;  
} */

/* This selector targets the editable element (excluding comments). */
/* .ck-editor__editable_inline:not(.ck-comment__input *) {
    height: 1000px;
    overflow-y: auto;
} */
</style>
