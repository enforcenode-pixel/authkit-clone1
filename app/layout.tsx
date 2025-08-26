import './auth/sign-in/styles.css';

export const metadata = { 
  title: 'AuthKit Clone', 
  description: 'WorkOS + Radix styled sign-in page' 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
