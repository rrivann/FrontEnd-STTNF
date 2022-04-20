import styles from './Alert.module.css';

const Alert = ({children}) => {
  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default Alert;
