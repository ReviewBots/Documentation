import React from 'react';
import styles from './styles.module.css';
import Cards, { CardInterface } from './components/Cards';

const cards: CardInterface[] = [
  {
    title: 'Add/Find a Bot',
    description:
      'Search for your Favourite Bots. If you cant find it or just want to add your own Bot you can do that to!',
    to: 'https://reviewbots.xyz/add',
    imagePath: 'https://reviewbots.xyz/static/assets/imgs/Home_Plus.png',
  },
  {
    title: 'Leave a Review',
    description:
      'Experiencing Issues with your Favourite Bots? Search our vast list of bots and Let us and the Dev(s) know!',
    to: 'https://reviewbots.xyz/bots',
    imagePath: 'https://reviewbots.xyz/static/assets/imgs/comments--v1.png',
  },
];

const OtherFeaturesView: React.FC = () => {
  return (
    <div className={styles.Container}>
      <Cards cards={cards} />
    </div>
  );
};

export default OtherFeaturesView;
