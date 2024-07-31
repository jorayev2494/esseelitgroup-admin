import { useAcl } from 'vue-simple-acl';
import BadRequest from '@/services/toast/template/BadRequest.vue';
import { toast } from 'vue3-toastify';
import { useI18n } from 'vue-i18n';
import Tr from '@/services/translations/translation.js';

export function useACLProtection()
{
  const acl = useAcl();
  const { t } = useI18n();

  const protectPermission = async permission => {
    return await new Promise((resolve, reject) => {
      const isAllows = acl.permission(permission);
      if (isAllows) {
        return resolve(isAllows);
      } else {
        toast.error(
          BadRequest,
          {
            autoClose: 5000,
            data: {
              title: t('error.unauthorized_action.title'),
              message: t('error.unauthorized_action.message', { companyName: 'Company Name' }),
            },
          }
        );

        return reject(isAllows);
      }
    })
  }

  const checkPermissions = permissions => acl.anyPermission(permissions)

  return {
    checkPermissions,
    protectPermission,
  }
}

const onDeniedRoute = {
  ...Tr.makeRoute({ name: 'access-denied', params: { locale: Tr.currentLocale } }),
  replace: true,
}

/**
 * @param {Array} permission
 * @returns Object
 */
export function makePermission(permission)
{
  return {
    permission,
  }
}

/**
 * @param {Array} permission
 * @returns Object
 */
export function makeAnyPermission(anyPermission)
{
  return {
    anyPermission,
  }
}

/**
 * @param {Array} permission
 * @returns Object
 */
export function makeRouterPermission(permission)
{
  return {
    ...makePermission(permission),
    onDeniedRoute,
  }
}

/**
 * @param {Array} permission
 * @returns Object
 */
export function makeRouterAnyPermission(anyPermission)
{
  return {
    ...makeAnyPermission(anyPermission),
    onDeniedRoute,
  }
}
