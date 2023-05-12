import './globals.css'
import {NextIntlClientProvider} from 'next-intl';
import { Analytics } from '@vercel/analytics/react';
import { Permanent_Marker, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';

export const metadata = {
  metadataBase: new URL('https://revolutron.vercel.app'),
  title: 'RevoluTRON',
  description: 'Adventure game for Web3 onboarding',
  openGraph: {
    images: '/opengraph-image.jpg',
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

const perm_marker = Permanent_Marker({
  variable: '--font-perm-marker',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default async function LocaleLayout({ children, params: { locale } }:
  {
    children: React.ReactNode
    params: { locale: string }
  }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (  
    <html lang={locale} className={`${perm_marker.variable} ${roboto.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}