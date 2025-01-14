import Navbar from '@/components/Navbar';
import { Providers } from '@/app/providers';

export const metadata = {
  title: 'Aman Gupta',
  description: 'Aman Gupta - Machine Learning Engineer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />  {/* ✅ Navbar added here */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
