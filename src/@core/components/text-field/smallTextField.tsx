import TextField, { TextFieldProps } from '@mui/material/TextField'

export const TextFieldSmall: React.FC<TextFieldProps & React.HTMLProps<HTMLInputElement>> = ({ ...props }) => (
  <TextField size='small' {...props} />
)

export default TextFieldSmall
