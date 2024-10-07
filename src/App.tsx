import styles from './App.module.scss';

import { Dialog } from '@/components/Dialog';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      {/* Ensure it matches the design exactly */}
      <Dialog
        variant='success'
        title='Successfully loaded'
        description='Neque porro quisquam est qui dolorem ipsum'
        confirmValue='Ok'
      />
      {/* <Dialog
        variant='info'
        title='New information'
        description='Neque porro quisquam est qui dolorem ipsum'
        confirmValue='Create'
        isDisabled={true}
      /> */}
      {/* <Dialog
        variant='danger'
        title='Are you sure you want to delete this user?'
        description='This action is irreversible'
        confirmValue='Delete'
      /> */}
    </div>
  );
}

export default App;
