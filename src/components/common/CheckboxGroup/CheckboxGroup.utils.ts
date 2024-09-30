import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

import type { default as ICheckboxGroupProps } from './CheckboxGroup.types'
import { default as CHECKBOX_SYMBOL } from '../Checkbox/Checkbox.symbols'
import type { default as ICheckboxProps } from '../Checkbox/Checkbox.types'

// Recursive function to process children
const processChildren = ({
    children,
    value,
    onChange
}: Pick<ICheckboxGroupProps, 'children' | 'onChange' | 'value'>): ReactNode => {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            // Checks if the incoming element is a Checkbox component
            if (!!child.type && (child.type as any)[CHECKBOX_SYMBOL] === true) {
                const val = child.props.value
                return cloneElement(child as ReactElement<ICheckboxProps>, {
                    checked: !!value.includes(val),
                    onChange: () => {
                        // Logic to toggle the checkbox value in the state
                        if (value.includes(val)) {
                            onChange(value.filter((item) => item !== val) ?? [])
                        } else {
                            onChange([...value, val])
                        }
                    }
                })
            } else if (child.props && child.props.children) {
                return cloneElement(child as ReactElement, {
                    children: processChildren({
                        children: child.props.children,
                        value,
                        onChange
                    })
                })
            }
        }
        return child
    })
}

export default processChildren
