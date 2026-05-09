import type { FooterLink } from "../data/links";

type Props = {
  title: string;
  items: FooterLink[];
};

export function FooterCol({ title, items }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-white text-sm sm:text-base font-bold normal-case tracking-normal">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
