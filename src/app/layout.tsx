import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Madhu Goutham Reddy Ambati | ML Engineer & Computer Vision Specialist',
  description: 'Portfolio of Madhu Goutham Reddy Ambati, a Machine Learning Engineer and Computer Vision Specialist with expertise in deep learning, reinforcement learning, and transfer learning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
