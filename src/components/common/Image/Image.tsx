import Image, { type ImageProps } from 'next/image'

const NextImage = ({ ...rest }: ImageProps) => {
    return <Image {...rest} />
}

export default NextImage
