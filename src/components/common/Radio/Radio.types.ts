import { type ReactNode } from 'react'

import { type IInputElementProps } from '@core/types/html'

import { type default as RADIO_SYMBOL } from './Radio.symbols'

type TRadioColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TCheckboxSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface IRadioProps extends Omit<IInputElementProps, 'type' | 'size' | 'children' | 'className'> {
    /** Make sure to insert string in most use cases */
    label: ReactNode
    color?: TRadioColorsType
    size?: TCheckboxSizesType
    /** Make sure to insert string in most use cases */
    description?: ReactNode
    classNames?: {
        root?: string
        radioInputWrapper?: string
        radioInput?: string
        contentWrapperClass?: string
        label?: string
        description?: string
    }
    /** Adding the symbol property */
    [RADIO_SYMBOL]?: true
}

export default IRadioProps
