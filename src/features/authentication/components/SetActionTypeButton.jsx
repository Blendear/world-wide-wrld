import styles from "src/styles/sass/styles-all.module.scss";

const SetActionTypeButton = (props) => {
  return (
    <button
      className={
        props.currectActionType === `${props.nameOfButton}`
          ? styles["btn-action-type--active"]
          : styles["btn-action-type--disabled"]
      }
      onClick={() => {
        props.setterFn(), console.log(props.nameOfButton);
      }}
    >
      {props.nameOfButton}
    </button>
  );
};
export default SetActionTypeButton;
