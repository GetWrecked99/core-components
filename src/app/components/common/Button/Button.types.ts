import { type ComponentPropsWithoutRef, type ElementType, type PropsWithChildren } from 'react'

import { type ILoadingSpinnerProps } from './LoadingSpinner'

type TButtonVariantsType = 'Filled' | 'Outline' | 'Link' | 'Tinted' | 'None'

type TButtonColorsType = 'Primary' | 'Secondary' | 'Success' | 'Error' | 'Warning' | 'Neutral'

type TButtonSizesType = 'xl' | 'lg' | 'md' | 'sm' | 'icon' | 'none'

type TButtonType<T extends ElementType> = {
    component?: T
    className?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
    size?: TButtonSizesType
    variant?: TButtonVariantsType
    color: TButtonColorsType
    isLoading?: boolean
    spinner?: JSX.Element
    spinnerProps?: ILoadingSpinnerProps
    rotateIcons?: boolean
}

type IButtonProps<T extends ElementType> = PropsWithChildren<TButtonType<T>> & ComponentPropsWithoutRef<T>

export type { IButtonProps, TButtonSizesType, TButtonVariantsType, TButtonColorsType }

/**
 * @Author: GetWrecked
 * @Date: 2024-09-25 16:10:05
 * @Remains:
 * - Colors type based on radix or etc ...
 * - Type declaration via ForwardedRef ...
 * - Declare new style format via color variable
 */
