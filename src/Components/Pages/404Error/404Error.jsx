import styles from './404Error.module.css';

function NotFoundError(){
    return(
        <div className={styles.container}>
            <h1>Error 404</h1>
            <p>This page does not exist</p>
            <a href="./">Go back to home</a>
        </div>
    );
}
export default NotFoundError;