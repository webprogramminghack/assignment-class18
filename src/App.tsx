import { Dialog } from '@/component/Dialog/Dialog';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      <div className={styles.main}>
        <Dialog
          color='primary'
          variant='success'
          title='Successfully loaded'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={false}
        />
        <Dialog
          color='danger'
          variant='info'
          title='New information?'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={false}
        />
        <Dialog
          color='secondary'
          variant='info'
          title='New information?'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={true}
        />
        <Dialog
          color='danger'
          variant='danger'
          title='Are you sure you want to delete this user?'
          subtitle='This action is irreversible'
          isDisabled={false}
        />
        <Dialog
          color='danger'
          variant='danger'
          title='Are you sure you want to delete this user?'
          subtitle='This action is irreversible'
          isDisabled={true}
        />
      </div>

      {/* Ensure it matches the design exactly */}
    </div>
  );
}

export default App;
