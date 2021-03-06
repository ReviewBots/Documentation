import React from "react";
import styles from "./styles.module.css";

import "react-toastify/dist/ReactToastify.css";
import HeaderView from "./components/HeaderView";
import PageLayout from "../../components/layout/PageLayout";
import OtherFeaturesView from "./components/OtherFeaturesView";

const LandingPage: React.FC = () => {
  return (
    <PageLayout>
      <main className={styles.Container}>
        <HeaderView />
        <OtherFeaturesView />
      </main>
    </PageLayout>
  );
};

export default LandingPage;
