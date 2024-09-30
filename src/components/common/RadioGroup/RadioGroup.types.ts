import { type ChangeEvent, type ReactNode } from 'react'

interface IRadioGroupProps {
    value: string | number | undefined
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    children: ReactNode
    orientation?: 'horizontal' | 'vertical'
    withAsterisk?: boolean
    title: ReactNode
    description?: ReactNode
    classNames?: {
        root?: string
        headingWrapper?: string
        titleWrapper?: string
        title?: string
        asterisk?: string
        description?: string
        bodyWrapper?: string
    }
}

export default IRadioGroupProps
