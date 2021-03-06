import Icon from "../icon/Icon"
import styles from "./IconListItem.module.scss"

interface IconListItemProp {
  title: string;
  description: string;
  imageName: string;
}

function IconListItem(props: IconListItemProp) {
  return (
    <li className={styles.container}>
      <Icon name={props.imageName} alt={props.title} className={styles.image} />
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </li>
  );
}

export default IconListItem;
