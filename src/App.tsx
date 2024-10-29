import { Dialog, Header } from '@/component/Dialog/Dialog';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      <Header>D I A L O G</Header>
      <div className={styles.main}>
        <Dialog
          variant='success'
          title='Successfully loaded'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={false}
        ></Dialog>
        <Dialog
          variant='info'
          title='New information?'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={false}
        ></Dialog>
        <Dialog
          variant='info'
          title='New information?'
          subtitle='Neque porro quisquam est qui dolorem ipsum'
          isDisabled={true}
        ></Dialog>
        <Dialog
          variant='danger'
          title='Are you sure you want to delete this user?'
          subtitle='This action is irreversible'
          isDisabled={false}
        ></Dialog>
        <Dialog
          variant='danger'
          title='Are you sure you want to delete this user?'
          subtitle='This action is irreversible'
          isDisabled={true}
        ></Dialog>
      </div>

      {/* Ensure it matches the design exactly */}
    </div>
  );
}

export default App;
