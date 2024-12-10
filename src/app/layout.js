import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "./globals.css";
import { ThemeProvider } from "./Providers/theme-provider";
import { AppSidebar } from "@/components/app.sidebar";

export const metadata = {
  title: "5ire.org",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          data-purpose="Layout StyleSheet"
          title="Web Awesome"
          href="/css/app-wa-4605c815f1874757bc9ac33aa114fb0f.css?vsn=d"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/all.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-solid.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-duotone-light.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-solid.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/sharp-light.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/duotone-thin.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/duotone-regular.css"
        />

        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.1/css/duotone-light.css"
        />

      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
