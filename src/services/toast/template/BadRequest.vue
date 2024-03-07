<template>
  <span>{{ message }}</span>
</template>

<script>
  export default {
    name: 'ServerValidate',
    props: {
      closeToast: Function,
      toastProps: Object,
    },
    setup(props) {
      const {
        message,
      } = props.toastProps.data;

      return {
        message,
      };
    }
  };
</script>