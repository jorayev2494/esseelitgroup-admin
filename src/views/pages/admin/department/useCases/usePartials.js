export const useInputs = () => [
  {
    field: 'name',
    tLabel: 'department.form.name',
    type: 'text',
    required: true,
  },
  {
    field: 'description',
    tLabel: 'department.form.description',
    type: 'ckeditor',
    required: true,
  },
]
