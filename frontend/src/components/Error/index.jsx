import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Error() {
    return (
        <div className={styles.container}>
            <h1>Content not found!</h1>
            <h2>Ops! you went to far away</h2>
            <Link to='/'>Click here to get back</Link>
        </div>
    )
}