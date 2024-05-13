import { FieldElement } from '.'
import { FieldsData } from './public'

export type ObjectKey = string | number | symbol

export type RefProps<TFieldElement extends FieldElement> = {
  [Key: ObjectKey]: React.Ref<TFieldElement>
}

export type PartialDataKeys<TData extends FieldsData, TValue> = { [Key in keyof TData]?: TValue }

export const isFileInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'file'

export const isRadioInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'radio'

export const isCheckboxInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'checkbox'

export const isDateInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'date'

export const isNumberInput = (element: FieldElement): element is HTMLInputElement =>
  element && 'type' in element && element.type === 'number'