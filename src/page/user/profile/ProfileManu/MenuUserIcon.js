import styles from'./Profile.module.css';
function MenuUserIcon(props) {
  return (
    <div className={styles.manuUser}>
      <div id={styles.manuList}>
        {props.title2} <span className={styles.icon}>{props.icon}</span>
        <span className={styles.title}>{props.title}</span>
        {props.children}
      </div>
    </div>
  );
}

export default MenuUserIcon;
