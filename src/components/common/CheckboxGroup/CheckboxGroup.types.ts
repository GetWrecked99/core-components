import { type ReactNode } from 'react'

interface ICheckboxGroupProps {
    value: string[]
    onChange: (values: string[]) => void
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

export default ICheckboxGroupProps
