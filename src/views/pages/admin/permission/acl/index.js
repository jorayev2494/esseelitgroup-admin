import { RESOURCE, ACTIONS, RESOURCE_ACTIONS } from "./constants";

const { INDEX, SHOW, UPDATE } = ACTIONS
const { RESOURCE_INDEX, RESOURCE_SHOW, RESOURCE_UPDATE } = RESOURCE_ACTIONS

export default function (setRule, { allows, isAdmin }) {
  setRule(RESOURCE_INDEX, user => isAdmin(user) || allows(RESOURCE, INDEX))
  setRule(RESOURCE_SHOW, user => isAdmin(user) || allows(RESOURCE, SHOW))
  setRule(RESOURCE_UPDATE, user => isAdmin(user) || allows(RESOURCE, UPDATE))
}
