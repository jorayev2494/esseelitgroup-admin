export const useInput = () => [
  {
    field: 'value',
    tLabel: 'departmentName.form.name',
    type: 'text',
    required: true,
  },
  {
    field: 'description',
    tLabel: 'departmentName.form.description',
    type: 'ckeditor',
    required: false,
  },
]