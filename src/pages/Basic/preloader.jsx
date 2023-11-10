 
import React from "react";

const Preloader = () => {
  const [loading, setLoading] = React.useState(true);
  // after loaded set loading to false
  React.useEffect(() => {
    if (loading) {
      // after 1 second set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, []);

  return (
    <main className={loading ? "preloader" : "preloader close"}>
      <img src="ezgif.com-crop.gif" alt="" />
    </main>
  );
};

export default Preloader;
