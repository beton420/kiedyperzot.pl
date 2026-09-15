import Image from 'next/image';
import LogoIcon from '@/components/icons/logoIcon';
import spinningPeugeot from '@/public/images/spinning-peugeot.gif';
import styles from './css/header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoIcon className={styles.logo} />
        <Image className={styles.spinningPeugeot} unoptimized src={spinningPeugeot} alt='Spinning Peugeot' />
      </div>
    </header>
  )
};

export default Header;
