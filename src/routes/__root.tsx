import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <span className="font-display text-8xl font-semibold text-primary/40">404</span>
        <h1 className="mt-4 font-display text-2xl font-semibold text-ink">Page not found</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            style={{ backgroundImage: "var(--gradient-blue)" }}
          >
            Go home
          </Link>
          <Link
            to="/praxys"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
          >
            Explore platform
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something unexpected happened while rendering. You can try refreshing or return to the
          homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            style={{ backgroundImage: "var(--gradient-blue)" }}
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "AutoPraxys | Human–AI Behavioral Intelligence Platform",
      },
      {
        name: "description",
        content:
          "Praxys turns permitted human–AI interaction evidence into clearer decisions about AI risk, workflow collaboration, and human capability.",
      },
      { name: "author", content: "AutoPraxys Private Limited" },
      {
        property: "og:title",
        content: "AutoPraxys | Human–AI Behavioral Intelligence Platform",
      },
      {
        property: "og:description",
        content:
          "Praxys turns permitted human–AI interaction evidence into clearer decisions about AI risk, collaboration, and human capability.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://autopraxys.com" },
      { property: "og:image", content: "https://autopraxys.com/autopraxys-logo.png" },
      { property: "og:site_name", content: "AutoPraxys" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "AutoPraxys | Human–AI Behavioral Intelligence Platform",
      },
      {
        name: "twitter:description",
        content:
          "Praxys turns permitted human–AI interaction evidence into clearer decisions about AI risk, collaboration, and human capability.",
      },
      { name: "twitter:image", content: "https://autopraxys.com/autopraxys-logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png?v=4", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.ico?v=4" },
      { rel: "apple-touch-icon", href: "/favicon.png?v=4" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "AutoPraxys Private Limited",
              url: "https://autopraxys.com",
              logo: "https://autopraxys.com/autopraxys-logo.png",
              description: "Building Praxys, the human–AI behavioral intelligence platform.",
              brand: "Praxys",
              founder: {
                "@type": "Person",
                name: "Souryavarma Datla",
              },
            },
            {
              "@type": "SoftwareApplication",
              name: "Praxys",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web-based",
              description:
                "Human–AI behavioral intelligence platform covering Assurance, Collaboration, and Capability.",
              publisher: {
                "@type": "Organization",
                name: "AutoPraxys Private Limited",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteNav />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
