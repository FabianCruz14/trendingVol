import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';


const FloatButton = () => {
  const [state, setState] = React.useState<{open : boolean}>({ open: false})
  const onStateChange = (newState : {open : boolean}) => setState(newState);
  const { open } = state;

  const actions = [
    {
      icon: 'plus',
      label: 'Kill',
      onPress: () => alert('Kill'),
    },
  ]

  return (
        <FAB.Group
          style={{ position: 'absolute', margin: 16, right: 0, bottom: 0 }}
          open={open}
          visible
          icon={open ? 'minus' : 'plus'}
          actions={actions} // Usar las acciones dinámicas
          onStateChange={onStateChange}
          onPress={() => {
            if (!open) {
              setState({ open: true }); // Asegurarse de que el FAB se abra
            }
          }}
        />
  );
};

export default FloatButton;