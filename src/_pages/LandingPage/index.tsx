import React from 'react';
import styles from './styles.module.css';

import 'react-toastify/dist/ReactToastify.css';
import HeaderView from './components/HeaderView';
import GiveItATryView from './components/GiveItATriyView';
import StartCodingView from './components/StartCodingView';
import StatsView from './components/StatsView';
import PageLayout from '../../components/layout/PageLayout';
import OtherFeaturesView from './components/OtherFeaturesView';

const LandingPage: React.FC = () => {
  return (
    <PageLayout>
      <main className={styles.Container}>
        <HeaderView />
        <OtherFeaturesView />
        <StartCodingView />
        <StatsView />
        <GiveItATryView />
      </main>
    </PageLayout>
  );
};

export default LandingPage;
