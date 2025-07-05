import { useForm, useFieldArray } from 'react-hook-form'
import { useState } from 'react'

function ServiceCardsForm({ defaultValues, onSaveCard, onRemove, onAdd }) {
  const { control, register, handleSubmit, formState: { errors }, getValues, reset } = useForm({
    defaultValues: defaultValues || { cards: [] }
  })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'cards'
  })

  // Per-card state
  const [savingIdx, setSavingIdx] = useState(null)
  const [successIdx, setSuccessIdx] = useState(null)
  const [errorIdx, setErrorIdx] = useState(null)
  const [errorMsg, setErrorMsg] = useState('')

  // Save a single card by index
  const handleSave = (idx) => handleSubmit(async (data) => {
    setSavingIdx(idx)
    setSuccessIdx(null)
    setErrorIdx(null)
    setErrorMsg('')
    try {
      await onSaveCard?.(data.cards[idx], idx)
      setSuccessIdx(idx)
      setTimeout(() => setSuccessIdx(null), 2000)
    } catch (e) {
      setErrorIdx(idx)
      setErrorMsg(e?.message || 'Failed to save card.')
    }
    setSavingIdx(null)
  })

  // Remove a card by index
  const handleRemove = (idx) => {
    remove(idx)
    if (onRemove) onRemove(idx)
  }

  // Add a new card
  const handleAdd = () => {
    append({ title: '', description: '', icon: '' })
    if (onAdd) onAdd()
  }

  return (
    <div className="service-cards-form space-y-6">
      <div className="service-cards-form__cards space-y-4">
        {fields.map((item, idx) => (
          <form key={item.id} onSubmit={handleSave(idx)} className="service-cards-form__card border p-4 rounded-lg bg-gray-50">
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
            <div className="service-cards-form__field mt-2">
              <label className="service-cards-form__label block text-sm font-medium mb-1">Poster (Image URL)</label>
              <input
                {...register(`cards.${idx}.poster`, { maxLength: 300 })}
                className="service-cards-form__input w-full px-3 py-2 border rounded"
                placeholder="/src/assets/images/test.jpg"
              />
              {errors.cards?.[idx]?.poster && (
                <span className="service-cards-form__error text-red-600 text-xs">{errors.cards[idx].poster.message}</span>
              )}
            </div>
            <div className="service-cards-form__field mt-2">
              <label className="service-cards-form__label block text-sm font-medium mb-1">Video (URL or Path)</label>
              <input
                {...register(`cards.${idx}.video`, { maxLength: 300 })}
                className="service-cards-form__input w-full px-3 py-2 border rounded"
                placeholder="/src/assets/images/cold-720p-trimmed.mp4"
              />
              {errors.cards?.[idx]?.video && (
                <span className="service-cards-form__error text-red-600 text-xs">{errors.cards[idx].video.message}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => handleRemove(idx)}
                className="service-cards-form__remove bg-red-100 text-red-600 px-2 py-1 rounded"
              >
                Remove
              </button>
              <button
                type="submit"
                disabled={savingIdx === idx}
                className="service-cards-form__save bg-blue-600 text-white px-4 py-2 rounded ml-auto"
              >
                {savingIdx === idx ? 'Saving...' : 'Save Card'}
              </button>
            </div>
            {successIdx === idx && (
              <div className="service-cards-form__success text-green-700 bg-green-50 border border-green-200 rounded p-2 mt-2">
                Card saved!
              </div>
            )}
            {errorIdx === idx && (
              <div className="service-cards-form__error text-red-700 bg-red-50 border border-red-200 rounded p-2 mt-2">
                {errorMsg}
              </div>
            )}
          </form>
        ))}
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="service-cards-form__add bg-blue-100 text-blue-700 px-4 py-2 rounded"
      >
        + Add Card
      </button>
    </div>
  )
}

export default ServiceCardsForm