import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

      {/* <link rel="icon" href="../public/images/circular_logo.jpg" type="image/jpg" /> */}
      <meta property="og:title" content={`${title}`} />

      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
