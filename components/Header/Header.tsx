import Link from 'next/link'
import { Lang } from '../Lang/Lang';
import styles from './Header.module.scss';
import cn from 'classnames';
import IHeader from './Header.types';



const Header: React.FC<IHeader> = ({isFIx, isHide, isInn = false}) => {
    
    return (
        <header className={cn(styles.header, {[styles.headerInn]: isInn}, {[styles.headerFix]: isFIx}, {[styles.headerHide]:isHide})}>
                <div className={`${styles.headerWrapper} wrapper`}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a className={styles.logoLink}></a>
                    </Link>
                </div>
                <Lang />
                </div>
            </header> 
    )
}

// const mapStateToProps = (state: any) => ({
//     lang: getLang(state)
// });

// export default connect(mapStateToProps)(Header);
export default Header;

