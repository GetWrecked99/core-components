import {
    type AnchorHTMLAttributes,
    type HTMLAttributes,
    type InputHTMLAttributes,
    type SVGAttributes,
    type TextareaHTMLAttributes,
    type VideoHTMLAttributes
} from 'react'

type IDivElementProps = HTMLAttributes<HTMLDivElement>

type IAnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement>

type ISvgElementProps = SVGAttributes<SVGSVGElement>

type IVideoElementProps = VideoHTMLAttributes<HTMLVideoElement>

type IInputElementProps = InputHTMLAttributes<HTMLInputElement>

type ITextareaElementProps = TextareaHTMLAttributes<HTMLTextAreaElement>

type ILabelElementProps = HTMLAttributes<HTMLLabelElement>

type ISpanElementProps = HTMLAttributes<HTMLSpanElement>

export type {
    IVideoElementProps,
    IDivElementProps,
    ISvgElementProps,
    IAnchorElementProps,
    IInputElementProps,
    ITextareaElementProps,
    ILabelElementProps,
    ISpanElementProps
}
