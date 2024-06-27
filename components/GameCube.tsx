import styles from '../app/game.module.css';

const GameBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.winningConditions}>
        <p>Winning conditions:</p>
        <p>3 in row - x5</p>
        <p>4 in row - x15</p>
        <p>5 in row - x50</p>
        <p>street - x50</p>
        <p>jackpot - x777</p>
      </div>
      <div className={styles.board}>
        {[...Array(15)].map((_, index) => (
          <div key={index} className={styles.cell}></div>
        ))}
      </div>
      <div className={styles.controls}>
        <div className={styles.credits}>
          <span>Credits</span>
          <span>100</span>
        </div>
        <div className={styles.bet}>
          <button>-</button>
          <span>Bet</span>
          <span>10</span>
          <button>+</button>
        </div>
        <button className={styles.spin}>SPIN</button>
        <div className={styles.auto}>
          <span>Auto</span>
        </div>
        <div className={styles.win}>
          <span>Win</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;