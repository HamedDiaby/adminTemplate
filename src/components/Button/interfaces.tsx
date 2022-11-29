export interface ButtonProps {
    buttonName: string
    disabled?: boolean
    customButtonStyle?: any
    isCancelButton?: boolean
    onButtonPress: ()=> void
}
