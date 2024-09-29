import { type ReactNode } from 'react'

import { type IInputElementProps } from '@core/types/html'

import { type default as CHECKBOX_SYMBOL } from './Checkbox.symbols'

type TCheckboxVariantsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TCheckboxColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TCheckboxSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface ICheckboxProps extends Omit<IInputElementProps, 'type' | 'size' | 'children' | 'className' | 'value'> {
    /** Make sure to insert string in most use cases */
    label?: ReactNode
    variant?: TCheckboxVariantsType
    color?: TCheckboxColorsType
    size?: TCheckboxSizesType
    /** Make sure to insert string in most use cases */
    description?: ReactNode
    classNames?: {
        root?: string
        checkboxInputWrapper?: string
        checkboxInput?: string
        contentWrapperClass?: string
        label?: string
        description?: string
    }
    value?: string
    /** Adding the symbol property */
    [CHECKBOX_SYMBOL]?: true
}

export default ICheckboxProps
