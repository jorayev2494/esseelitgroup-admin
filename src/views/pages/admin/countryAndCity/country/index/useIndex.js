import { useDate } from '@/views/pages/utils/helpers';
import { usePaginator } from '@/views/pages/utils/paginator';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useACLProtection } from '@/services/acl/useACLProtection';
import { RESOURCE_ACTIONS } from '../acl/constants'
import { toast } from 'vue3-toastify';

export default function useIndex() {

  const store = useStore();
  const paginator = usePaginator();
  const { t, d } = useI18n();
  const { dateFromTimestamp } = useDate();
  const { checkPermissions, protectPermission } = useACLProtection();

  const loading = ref(true);
  const items = ref([]);
  const columns = ref([
    { field: 'value', title: t('country.form.name') },
    { field: 'iso', title: t('country.form.flag') },
    { field: 'created_at', title: t('system.created_at'), type: 'date' },
    { field: 'actions', title: t('system.actions'), sort: false, hide: ! checkPermissions([RESOURCE_ACTIONS.RESOURCE_UPDATE, RESOURCE_ACTIONS.RESOURCE_DELETE]), headerClass: 'float-end', cellClass: 'float-end' },
  ]);

  const reloadData = () => {
    items.value = [];
    loadCountries();
  }

  const countryMapper = country => {
    country.created_at = d(dateFromTimestamp(country.created_at), 'short');

    return country;
  }

  const loadCountries = () => {
    loading.value = true;

    store.dispatch('country/loadCountriesAsync', { params: { ...paginator.toQueryParams(), } })
      .then(response => {
        const { data } = response;

        paginator.setMetaData(data);
        items.value = data.data.map(countryMapper);
      })
      .catch(error => error)
      .finally(() => loading.value = false);
  };

  const remove = data => {
    const confirmed = confirm(`Do you want delete the country '${data.value.value}'`);

    if (confirmed) {
      protectPermission(RESOURCE_ACTIONS.RESOURCE_DELETE).then(() => {
        store.dispatch('country/deleteCountryAsync', { uuid: data.value.uuid })
          .then(() => {
            toast.success(t('country.flash_messages.success.country_was_deleted'));
            reloadData();
          })
      })
    }
  }

  const changeServer = data => {
    paginator.serverPaginate(data);

    reloadData();
  };

  onMounted(() => {
    reloadData();
  });

  return {
    RESOURCE_ACTIONS,
    items,
    columns,
    loading,
    remove,

    paginator,

    changeServer,
  }
}
