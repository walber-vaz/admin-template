interface AuthInputProps {
  label: string
  value: any
  required?: boolean
  isRendered?: boolean
  type?: 'text' | 'email' | 'password'
  onChange: (value: any) => void
}

export default function AuthInput(props: AuthInputProps) {
  return props.isRendered ? null : (
    <div className="flex flex-col">
      <label htmlFor="">
        {props.label}
      </label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        required={props.required}
        onChange={e => props.onChange?.(e.target.value)}
      />
    </div>
  )
}
