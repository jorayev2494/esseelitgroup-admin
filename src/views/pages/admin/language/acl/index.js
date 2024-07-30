import { RESOURCE, ACTIONS, RESOURCE_ACTIONS } from "./constants";

const { INDEX, CREATE, SHOW, UPDATE, DELETE } = ACTIONS
const { RESOURCE_INDEX, RESOURCE_CREATE, RESOURCE_SHOW, RESOURCE_UPDATE, RESOURCE_DELETE } = RESOURCE_ACTIONS

export default function (setRule, { allows, isAdmin }) {
  setRule(RESOURCE_INDEX, user => isAdmin(user) || allows(RESOURCE, INDEX))
  setRule(RESOURCE_CREATE, user => isAdmin(user) || allows(RESOURCE, CREATE))
  setRule(RESOURCE_SHOW, user => isAdmin(user) || allows(RESOURCE, SHOW))
  setRule(RESOURCE_UPDATE, user => isAdmin(user) || allows(RESOURCE, UPDATE))
  setRule(RESOURCE_DELETE, user => isAdmin(user) || allows(RESOURCE, DELETE))
}
