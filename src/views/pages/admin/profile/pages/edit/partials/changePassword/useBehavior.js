import { reactive } from "vue"
import { useI18n } from "vue-i18n";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default () => {

  const store = useStore();
  const { t } = useI18n();

  const form = reactive({
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  });

  const getData = () => form;

  const changePassword = () => {
    store.dispatch('profile/changePasswordAsync', { data: getData() })
      .then(response => {
        clearForm()
        toast.success(t('profile.partials.change_password.flash_messages.success.password_was_changed'))
      })
  }

  const clearForm = () => {
    form.current_password = form.new_password = form.new_password_confirmation = ''
  }

  return {
    form,

    changePassword,
  }
}
