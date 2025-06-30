import { useForm, useFieldArray } from 'react-hook-form'

function ServiceCardsForm({ defaultValues, onSubmit, isLoading, error, successMessage }) {
  const { control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: defaultValues || { cards: [] }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cards'
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="service-cards-form space-y-6">
      <div className="service-cards-form__cards space-y-4">
        {fields.map((item, idx) => (
          <div key={item.id} className="service-cards-form__card border p-4 rounded-lg bg-gray-50">
            <div className="service-cards-form__row flex gap-4">
              <div className="service-cards-form__field flex-1">
                <label className="service-cards-form__label block text-sm font-medium mb-1">Title *</label>
                <input
                  {...register(`cards.${idx}.title`, { required: 'Title required', maxLength: 100 })}
                  className="service-cards-form__input w-full px-3 py-2 border rounded"
                  placeholder="Title"
                />
                {errors.cards?.[idx]?.title && (
                  <span className="service-cards-form__error text-red-600 text-xs">{errors.cards[idx].title.message}</span>
                )}
              </div>
              <div className="service-cards-form__field flex-1">
                <label className="service-cards-form__label block text-sm font-medium mb-1">Icon *</label>
                <input
                  {...register(`cards.${idx}.icon`, { required: 'Icon required', maxLength: 50 })}
                  className="service-cards-form__input w-full px-3 py-2 border rounded"
                  placeholder="Icon (e.g. wrench, zap)"
                />
                {errors.cards?.[idx]?.icon && (
                  <span className="service-cards-form__error text-red-600 text-xs">{errors.cards[idx].icon.message}</span>
                )}
              </div>
            </div>
            <div className="service-cards-form__field mt-2">
              <label className="service-cards-form__label block text-sm font-medium mb-1">Description *</label>
              <textarea
                {...register(`cards.${idx}.description`, { required: 'Description required', maxLength: 300 })}
                className="service-cards-form__input w-full px-3 py-2 border rounded"
                placeholder="Description"
                rows={2}
              />
              {errors.cards?.[idx]?.description && (
                <span className="service-cards-form__error text-red-600 text-xs">{errors.cards[idx].description.message}</span>
              )}
            </div>
            <button
              type="button"
              onClick={() => remove(idx)}
              className="service-cards-form__remove bg-red-100 text-red-600 px-2 py-1 rounded mt-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => append({ title: '', description: '', icon: '' })}
        className="service-cards-form__add bg-blue-100 text-blue-700 px-4 py-2 rounded"
      >
        + Add Card
      </button>
      <button
        type="submit"
        disabled={isLoading}
        className="service-cards-form__submit bg-blue-600 text-white px-6 py-2 rounded"
      >
        {isLoading ? 'Saving...' : 'Save Cards'}
      </button>
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
}

export default ServiceCardsForm