import "./globals.css";

export const metadata = {
  title: {
    default: "HH Traders Layyah | Filters & Lubricants Dealer",
    template: "%s | HH Traders Layyah",
  },

  description:
    "HH Traders Filters and Lubricants Dealer in Layyah offers quality engine oils, lubricants, automotive filters and wholesale products at competitive rates.",

  keywords: [
    "HH Traders Layyah",
    "HH Traders Filters and Lubricants Dealer",
    "Engine Oil Layyah",
    "Lubricants Layyah",
    "Oil Filters Layyah",
    "Automotive Filters Layyah",
    "Diesel Engine Oil Layyah",
    "Car Engine Oil Layyah",
    "Wholesale Lubricants Pakistan",
    "Filters Dealer Layyah",
  ],

  authors: [
    {
      name: "HH Traders",
    },
  ],

  creator: "HH Traders",

  publisher: "HH Traders Filters and Lubricants Dealer",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "HH Traders Layyah | Filters & Lubricants Dealer",

    description:
      "Quality engine oils, lubricants, automotive filters and wholesale products available at HH Traders in Layyah, Pakistan.",

    url: "https://your-domain.com",

    siteName: "HH Traders Layyah",

    locale: "en_PK",

    type: "website",

    images: [
      {
        url: "/shop.jpeg",
        width: 1200,
        height: 630,
        alt: "HH Traders Filters and Lubricants Dealer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "HH Traders Layyah | Filters & Lubricants Dealer",

    description:
      "Quality engine oils, lubricants and automotive filters in Layyah, Pakistan.",

    images: ["/shop.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}