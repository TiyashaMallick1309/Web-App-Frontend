// eslint-disable-next-line
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
/*Cumulative Layout Shift (CLS), 
First Input Delay (FID),
 First Contentful Paint (FCP),
  Largest Contentful Paint (LCP),
   and Time to First Byte (TTFB)*/
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
