interface AuthInputProps {
  label: string
  value: any
  required?: boolean
  isRendered?: boolean
  type?: 'text' | 'email' | 'password'
  onChange: (value: any) => void
}

/**
 * Renders an authentication input component.
 *
 * @param {AuthInputProps} props - The props object containing the input component properties.
 * @return {JSX.Element | null} The rendered authentication input component.
 */
export default function AuthInput(props: AuthInputProps): JSX.Element | null {
  if (props.isRendered) {
    return null;
  }

  /**
   * Handles the change event of an input element.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
   * @return {void} Returns nothing.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    props.onChange?.(e.target.value);
  };

  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        required={props.required}
        onChange={handleChange}
        className={`
          px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none transition duration-500
        `}
      />
    </div>
  );
}
