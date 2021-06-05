import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fbfh10-1.fna.fbcdn.net/v/t31.18172-1/p200x200/21414804_10154989930311194_1857844593999633529_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHdmI9_VBcsO-y_gAsgGyOQX5p7Mzv2Zv9fmnszO_Zm_znz4x545XvNCCMewfAsycM&_nc_ohc=NCN7Atesu7UAX9YaJpN&_nc_ht=scontent.fbfh10-1.fna&tp=6&oh=c45aa50a79f2c0942c51ea4d53c16139&oe=60DFEB37" alt="Funaki" />
            <div>
                <strong>Cleverson Funaki</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}