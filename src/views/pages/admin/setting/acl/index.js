import { RESOURCE, ACTIONS, RESOURCE_ACTIONS } from "./constants";

const { INDEX, ABOUT_US } = ACTIONS
const { RESOURCE_INDEX, RESOURCE_ABOUT_US } = RESOURCE_ACTIONS

export default function (setRule, { allows, isAdmin }) {
  setRule(RESOURCE_INDEX, user => isAdmin(user) || allows(RESOURCE, INDEX))
  setRule(RESOURCE_ABOUT_US, user => isAdmin(user) || allows(RESOURCE, ABOUT_US))
}
