import styles from './App.module.scss';
// import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <div className={styles.container}>
      {/* Test your component here */}
      {/* Ensure it matches the design exactly */}
      {/* <Button>create</Button> */}
      {/* <Button color='secondary'>cancel</Button> */}
      {/* <Button color='danger'>delete</Button> */}
      {/* <Button disabled>create</Button> */}
      {/* <Button color='secondary' disabled>cancel</Button> */}
      {/* <Button color='danger' disabled>delete</Button> */}
      <Card
        color='secondary'
        title='New Information'
        content='Neque porro quisquam est qui dolorem ipsum'
      />
    </div>
  );
}

export default App;
