import styles from './App.module.scss';
import { Dialog } from './components/Dialog';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      {/* Ensure it matches the design exactly */}
      <Dialog
        variant='success'
      />
      <Dialog
        variant='info'
        isDisabled={false}
      />
      <Dialog
        variant='info'
        isDisabled={true}
      />
      <Dialog
        variant='danger'
        isDisabled={false}
      />
      <Dialog
        variant='danger'
        isDisabled={false}
      />
    </div>
  );
}

export default App;
