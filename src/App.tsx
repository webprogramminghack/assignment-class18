import styles from './App.module.scss';
import { Dialog } from '@/components/Dialog';
import { Button } from '@/components/Button';
import React, { useState } from 'react';
import clsx from 'clsx';

const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState<
    'success' | 'info' | 'danger'
  >('success');

  const handleShowAlert = (variant: 'success' | 'info' | 'danger') => {
    setAlertVariant(variant);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <Button color='secondary' onClick={() => handleShowAlert('success')}>
        Alert Success
      </Button>
      <Button color='primary' onClick={() => handleShowAlert('info')}>
        Alert Info
      </Button>
      <Button color='danger' onClick={() => handleShowAlert('danger')}>
        Alert Danger
      </Button>
      <div className={clsx(styles.container)}>
        {showAlert && (
          <Dialog
            variant={alertVariant}
            onClose={handleCloseAlert}
            onConfirm={handleCloseAlert}
          />
        )}
      </div>
    </div>
  );
};

export default App;
