export const useStatusInputs = () => [
  {
    field: 'note',
    tLabel: null,
    type: 'textarea',
    required: true,
  },
]

export const getStatusClassName = status => {
  const statusClasses = {
    new: 'bg-success-light',
    pending: 'bg-primary-light',
    viewed: 'bg-warning-light'
  }

  return statusClasses[status] ?? 'badge-primary';
}
