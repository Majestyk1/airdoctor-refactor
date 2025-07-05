import { useForm } from 'react-hook-form'

function ServiceCardsForm({ defaultValues, onSaveCard, isLoading, error, successMessage, onRemove, onAdd }) {
  const cards = defaultValues?.cards || []

  return (
    <div className="service-cards-form space-y-6">
      <div className="service-cards-form__cards space-y-4">
        {cards.map((card, idx) => {
          const {
            register,
            handleSubmit,
            formState: { errors }
          } = useForm({ defaultValues: card })

          return (
            <form
              key={idx}
              onSubmit={handleSubmit((data) => onSaveCard({ ...card, ...data }, idx))}
              className="service-cards-form__card border p-4 rounded-lg bg-gray-50"
            >
              <div className="service-cards-form__row flex gap-4">
                <div className="service-cards-form__field flex-1">
                  <label className="service-cards-form__label block text-sm font-medium mb-1">Title *</label>
                  <input
                    {...register('title', { required: 'Title required', maxLength: 100 })}
                    className="service-cards-form__input w-full px-3 py-2 border rounded"
                    placeholder="Title"
                  />
                  {errors.title && (
                    <span className="service-cards-form__error text-red-600 text-xs">{errors.title.message}</span>
                  )}
                </div>
                <div className="service-cards-form__field flex-1">
                  <label className="service-cards-form__label block text-sm font-medium mb-1">Icon *</label>
                  <input
                    {...register('icon', { required: 'Icon required', maxLength: 50 })}
                    className="service-cards-form__input w-full px-3 py-2 border rounded"
                    placeholder="Icon (e.g. wrench, zap)"
                  />
                  {errors.icon && (
                    <span className="service-cards-form__error text-red-600 text-xs">{errors.icon.message}</span>
                  )}
                </div>
              </div>
              <div className="service-cards-form__field mt-2">
                <label className="service-cards-form__label block text-sm font-medium mb-1">Description *</label>
                <textarea
                  {...register('description', { required: 'Description required', maxLength: 300 })}
                  className="service-cards-form__input w-full px-3 py-2 border rounded"
                  placeholder="Description"
                  rows={2}
                />
                {errors.description && (
                  <span className="service-cards-form__error text-red-600 text-xs">{errors.description.message}</span>
                )}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => onRemove(idx)}
                  className="service-cards-form__remove bg-red-100 text-red-600 px-2 py-1 rounded"
                >
                  Remove
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="service-cards-form__save bg-blue-600 text-white px-4 py-2 rounded ml-auto"
                >
                  {isLoading ? 'Saving...' : 'Save Card'}
                </button>
              </div>
              {successMessage && (
                <div className="service-cards-form__success text-green-700 bg-green-50 border border-green-200 rounded p-2 mt-2">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="service-cards-form__error text-red-700 bg-red-50 border border-red-200 rounded p-2 mt-2">
                  {error}
                </div>
              )}
            </form>
          )
        })}
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="service-cards-form__add bg-blue-100 text-blue-700 px-4 py-2 rounded"
      >
        + Add Card
      </button>
    </div>
  )
}

export default ServiceCardsForm