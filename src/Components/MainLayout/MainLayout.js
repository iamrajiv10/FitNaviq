import { Outlet } from 'react-router-dom';
import styles from './MainLayout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default MainLayout;
