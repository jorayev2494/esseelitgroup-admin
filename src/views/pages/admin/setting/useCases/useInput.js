export const useAboutUsInput = () => [
  {
    field: 'title',
    tLabel: 'setting.form.about_us.title',
    type: 'text',
    required: true,
  },
  {
    field: 'content',
    tLabel: 'setting.form.about_us.content',
    type: 'ckeditor',
    required: true,
  },
]
