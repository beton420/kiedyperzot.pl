import './global.css';

export default function RootLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <p>kiedyperzot.pl is not affiliated with Peugeot and Stellantis N.V.</p>
          <p>&copy; Chodnia Co.</p>
        </footer>
      </body>
    </html>
  );
}
