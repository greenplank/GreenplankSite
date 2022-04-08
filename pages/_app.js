import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
// import "react-modal-video/css/modal-video.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/azino-icons.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/main.css";
import "swiper/swiper-bundle.min.css";


// pages/_app.js
export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'FCP':
      // handle FCP results
      break
    case 'LCP':
      // handle LCP results
      break
    case 'CLS':
      // handle CLS results
      break
    case 'FID':
      // handle FID results
      break
    case 'TTFB':
      // handle TTFB results
      break
    default:
      break
}}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
