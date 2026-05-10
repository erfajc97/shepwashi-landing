import { gradientTextVertical } from "@/app/shared/styles/textGradients";

export function FooterBlogCard() {
  return (
    <div data-footer-reveal className="relative w-full max-w-4xl mx-auto">
      <img
        src="/images/blog.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="block w-full h-auto select-none"
        style={{ maxHeight: "420px", objectFit: "contain" }}
        draggable={false}
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-12 sm:px-16 md:px-24 lg:px-28">
        <div
          className="w-full flex flex-col items-center"
          style={{ maxWidth: "640px" }}
        >
          <h2
            className="font-heading uppercase"
            style={{
              ...gradientTextVertical,
              fontSize: "clamp(1.85rem, 5vw, 4rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.05,
              textAlign: "center",
            }}
          >
            Visita nuestro blog
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 sm:mt-6 flex w-full"
          >
            <label htmlFor="blog-search" className="sr-only">
              Buscar en el blog
            </label>
            <div className="relative w-full">
              <input
                id="blog-search"
                type="text"
                placeholder="Buscar artículos..."
                className="w-full h-10 sm:h-11 rounded-full bg-white text-black text-sm px-4 pr-11 outline-none focus:ring-2 focus:ring-[#43C3FF]/60"
              />
              <button
                type="submit"
                aria-label="Buscar"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
