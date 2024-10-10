import styles from './App.module.scss';
import { Dialog } from './components/Dialog';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      {/* Ensure it matches the design exactly */}
      <Dialog
        variant='success'
        title='Successfully loaded'
        description='Neque porro quisquam est qui dolorem ipsum'
      />
    </div>
  );
}

export default App;
