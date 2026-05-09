type Props = {
  label: string;
  name: string;
  type: string;
  required?: boolean;
};

export function ContactoField({ label, name, type, required }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-white">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-full bg-white text-black text-sm px-4 outline-none focus:ring-2 focus:ring-[#43C3FF]/60"
      />
    </div>
  );
}
