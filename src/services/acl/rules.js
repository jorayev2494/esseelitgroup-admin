import { defineAclRules } from 'vue-simple-acl'
import store from "../store";
import modules from './modules';

/**
 * @param {Promise} user
 
 * @returns bool
 */
const isAdmin = user => {
  const { role: { is_admin } } = user ?? JSON.parse(window.localStorage.getItem('auth_data'));

  return is_admin === true;
};

// const isAdmin = ({ role: { is_admin } }) => false;
const allows = (resource, action) => store.getters['auth/getPermissions']
  .filter(({ is_active }) => is_active)
  .filter(({ resource: r }) => r === resource)
  .some(({ action: a }) => a === action);

/**
 * @param {Function} setRule
 * @param {Object} modules
 */
const registerModules = async (setRule, modules) => {
  for (const key in modules) {
    if (Object.hasOwnProperty.call(modules, key)) {
      const register = modules[key];
      await register(setRule, { allows, isAdmin })
    }
  }
}

const rules = () => defineAclRules(
  async setRule => {
    // Roles
    setRule('is-admin', isAdmin)

    // Permissions
    await registerModules(setRule, modules)
  }
);

export default rules
