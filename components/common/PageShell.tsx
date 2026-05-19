import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl scroll-mt-28 flex-col gap-10 px-6 py-16 sm:py-20 lg:px-8">
      {children}
    </section>
  );
}
