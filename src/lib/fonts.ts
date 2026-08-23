import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

/**
 * Merchant — tipografia de títulos e destaques.
 * Fonte licenciada: os arquivos .woff2 ficam versionados em /public/fonts.
 */
export const merchant = localFont({
  src: [
    { path: '../../public/fonts/Merchant-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Merchant-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Merchant-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Merchant-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Merchant-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-merchant',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

/** Raleway — tipografia de textos corridos e interface. */
export const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
  fallback: ['system-ui', 'Segoe UI', 'sans-serif'],
});
