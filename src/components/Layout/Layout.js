import React from "react";
import Footer from "../../pages/Basic/footer";
import Navbar from "../../pages/Basic/navbar";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
          <RecoilRoot>

      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />

        {children}
      </main>
      <Footer />
      </RecoilRoot>

    </div>
  );
};

Layout.defaultProps = {
  title: "Calmosis - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;
