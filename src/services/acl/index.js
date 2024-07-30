import { createAcl } from 'vue-simple-acl'
import router from "../router";
import store from "../store";
import rules from './rules'

const simpleAcl = createAcl({
  user: store?.state?.auth?.authData ?? JSON.parse(window.localStorage.getItem('auth_data')),   // short for user: user
  rules,  // short for rules: rules
  router, // OPTIONAL, short for router: router 
  // other optional vue-simple-acl options here... See Vue Simple ACL Options below
});

export default simpleAcl;
