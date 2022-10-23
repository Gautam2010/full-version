import Button, { ButtonProps } from '@mui/material/Button'

export const SmallButton: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({ children, ...props }) => (
  <Button size={'small'} {...props}>
    {children}
  </Button>
)
export default SmallButton
