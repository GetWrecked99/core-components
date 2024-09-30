import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react'

import type { default as IRadioGroupProps } from './RadioGroup.types'
import { default as RADIO_SYMBOL } from '../Radio/Radio.symbols'
import type { default as IRadioProps } from '../Radio/Radio.types'

// Recursive function to process children
const processChildren = ({
    children,
    value,
    onChange
}: Pick<IRadioGroupProps, 'children' | 'onChange' | 'value'>): ReactNode => {
    return Children.map(children, (child) => {
        if (isValidElement(child)) {
            // Checks if the incoming element is a Radio component
            if (!!child.type && (child.type as any)[RADIO_SYMBOL] === true) {
                return cloneElement(child as ReactElement<IRadioProps>, {
                    checked: child.props.value === value,
                    onChange: onChange
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
