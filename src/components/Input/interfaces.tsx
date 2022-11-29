export interface inputProps {
    placeholder: string
    value: string | number
    inputType: keyof inputType
    onchange: (e: string)=> void
    disabled?: boolean
}

type inputType = {
    text: 'text'
    number: 'number'
    time: 'time'
    date: 'date'
    password: 'password'
}