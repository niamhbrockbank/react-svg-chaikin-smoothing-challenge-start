interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: () => void;
}
export function Checkbox({ label, value, onChange }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
}
