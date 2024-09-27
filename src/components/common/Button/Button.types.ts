import { type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren } from 'react'

import { type ILoadingSpinnerProps } from './LoadingSpinner'

type TButtonVariantsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TButtonColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TButtonSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TButtonType<T extends ElementType> = {
    component?: T
    className?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
    size?: TButtonSizesType
    variant?: TButtonVariantsType
    color?: TButtonColorsType
    isLoading?: boolean
    spinner?: JSX.Element
    spinnerProps?: ILoadingSpinnerProps
    rotateIcons?: boolean
}

type IButtonProps<T extends ElementType> = PropsWithChildren<TButtonType<T>> & ComponentPropsWithoutRef<T>

export type { IButtonProps, TButtonSizesType, TButtonVariantsType, TButtonColorsType }
