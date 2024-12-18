import localFont from 'next/font/local';

export const Avenir = localFont({
  src: [
    {
      path: '../fonts/AvenirLTStd-Black.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirLTStd-Book.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/AvenirLTStd-Roman.otf',
      weight: '700',
      style: 'normal',
    },
    
    
  ],
  variable: '--font-Avenir',
});
