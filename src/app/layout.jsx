import "./globals.css";

export const metadata = {
  title: "Akademnashr",
  description: "Akademnashr kitoblar do‘koni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body>
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script dangerouslySetInnerHTML={{ __html: "AOS.init();" }} />
      </body>
    </html>
  );
}
