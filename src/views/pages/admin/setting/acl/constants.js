export const RESOURCE = 'setting';

// Actions
export const ACTIONS = {
  INDEX: 'index',
  ABOUT_US: 'about_us',
  UNIVERSITY_FOR_FOREIGN_STUDENT: 'university_for_foreign_student',
}

// Resource Actions
export const RESOURCE_ACTIONS = {
  RESOURCE_INDEX: ACTIONS.INDEX + '-' + RESOURCE,
  RESOURCE_ABOUT_US: ACTIONS.ABOUT_US + '-' + RESOURCE,
  RESOURCE_UNIVERSITY_FOR_FOREIGN_STUDENT: ACTIONS.UNIVERSITY_FOR_FOREIGN_STUDENT + '-' + RESOURCE,
}
