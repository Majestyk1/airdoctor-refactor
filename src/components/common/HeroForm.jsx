import React from 'react'
import { useForm } from 'react-hook-form'

function HeroForm({ title, onSubmit, defaultValues = {}, isSubmitting = false }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues
  })

  // Update form values when defaultValues change
  React.useEffect(() => {
    if (defaultValues.title !== undefined) setValue('title', defaultValues.title)
    if (defaultValues.accent !== undefined) setValue('accent', defaultValues.accent)
    if (defaultValues.subtitle !== undefined) setValue('subtitle', defaultValues.subtitle)
  }, [defaultValues, setValue])

  return (
    <div className="admin-section bg-white border rounded-lg p-6 shadow-sm">
      <h2 className="admin-section__title text-xl font-semibold text-gray-800 mb-4">
        {title}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="admin-section__form space-y-4">
        <div className="form__field">
          <label className="form__label block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            {...register('title', {
              required: 'Title is required',
              maxLength: {
                value: 100,
                message: 'Title must be less than 100 characters'
              }
            })}
            className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.title 
                ? 'border-red-300 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="e.g., Small Team,"
          />
          {errors.title && (
            <span className="form__error text-sm text-red-600 mt-1">{errors.title.message}</span>
          )}
        </div>
        
        <div className="form__field">
          <label className="form__label block text-sm font-medium text-gray-700 mb-1">
            Accent Text (colored part)
          </label>
          <input
            type="text"
            {...register('accent', {
              maxLength: {
                value: 50,
                message: 'Accent text must be less than 50 characters'
              }
            })}
            className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.accent 
                ? 'border-red-300 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="e.g., Big Solutions"
          />
          {errors.accent && (
            <span className="form__error text-sm text-red-600 mt-1">{errors.accent.message}</span>
          )}
        </div>
        
        <div className="form__field">
          <label className="form__label block text-sm font-medium text-gray-700 mb-1">
            Subtitle
          </label>
          <textarea
            {...register('subtitle', {
              required: 'Subtitle is required',
              maxLength: {
                value: 300,
                message: 'Subtitle must be less than 300 characters'
              }
            })}
            rows="3"
            className={`form__input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.subtitle 
                ? 'border-red-300 focus:ring-red-500' 
                : 'border-gray-300 focus:ring-blue-500'
            }`}
            placeholder="Brief description..."
          />
          {errors.subtitle && (
            <span className="form__error text-sm text-red-600 mt-1">{errors.subtitle.message}</span>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`admin-section__save px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isSubmitting
              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Saving...' : 'Save Hero Content'}
        </button>
      </form>
    </div>
  )
}

export default HeroForm 