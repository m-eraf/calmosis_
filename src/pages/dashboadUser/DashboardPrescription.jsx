import DashNav from "../../components/Layout/dash-nav";
import React from "react";
import { GoDownload } from "react-icons/go";
import UserMenu from "../../components/Layout/UserMenu";

const pdfData = [
  {
    pdfLink: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    pdfLink:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    pdfLink: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    pdfLink:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    pdfLink: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    pdfLink:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    pdfLink: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    pdfLink:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const DashboardPrescription = () => {
  const [empty, setEmpty] = React.useState(false);
  return (
    <main className="dashboard prescription" data-scroll-container id="home">
      <UserMenu/>

      <div class="mainbar">
        <DashNav />

        <div className="line" />

        <div className="content">
          <div className="heading">
            <h1>Your Prescription</h1>
            <p>The prescription is valid for 3 month</p>
          </div>
          <div />
          {empty ? (
            <div className="empty">
              <img src="../flower_cart.png" />
              <p>You don't have a prescription yet</p>
            </div>
          ) : (
            <div className="cards">
              {pdfData.map((item) => (
                <div className="pdf">
                  <a href={item.pdfLink}>
                    <div className="download">
                      <GoDownload size={25} color="black" />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DashboardPrescription;
