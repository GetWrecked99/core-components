import { type ISvgElementProps } from '@core/types/html'

const CloseIcon = ({ ...rest }: ISvgElementProps) => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...rest}>
            <path
                d='M12.6663 4.27325L11.7263 3.33325L7.99967 7.05992L4.27301 3.33325L3.33301 4.27325L7.05967 7.99992L3.33301 11.7266L4.27301 12.6666L7.99967 8.93992L11.7263 12.6666L12.6663 11.7266L8.93967 7.99992L12.6663 4.27325Z'
                fill='currentColor'
            />
        </svg>
    )
}

export default CloseIcon
