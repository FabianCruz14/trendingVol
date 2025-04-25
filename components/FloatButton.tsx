import * as React from 'react';
import { FAB, Portal, PaperProvider } from 'react-native-paper';

const FloatButton = () => {
  const [state, setState] = React.useState({ open: false });
  const [activeMenu, setActiveMenu] = React.useState<null | 'reminder' | 'email' | 'star'>(null); // Estado para el menú activo

  const { open } = state;
  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  // Definir las acciones según el menú activo
  const actions = activeMenu === null ? [

        {
          icon: 'star',
          label: 'Star',
          onPress: () => {
            setActiveMenu('star'); // Cambiar al menú de Star
            setState({ open: true }); // Asegurarse de que el FAB se mantenga abierto
          },
        },
        {
          icon: 'email',
          label: 'Email',
          onPress: () => {
            setActiveMenu('email'), // Cambiar al menú de Email
            setState({ open: true }); // Asegurarse de que el FAB se mantenga abierto 
          }
        },
        {
          icon: 'bell',
          label: 'Reminder',
          onPress: () => {
            setActiveMenu('reminder'), // Cambiar al menú de Reminder
            setState({ open: true }); // Asegurarse de que el FAB se mantenga abierto
          }
        },

      ] : activeMenu === 'reminder' ? [

        {
          icon: 'alarm',
          label: 'Alarm',
          onPress: () => {console.log('Pressed alarm');
          setActiveMenu(null);}
        },
        {
          icon: 'calendar',
          label: 'Calendar',
          onPress: () => {
            console.log('Pressed calendar');
            setActiveMenu(null);}
        },
        {
          icon: 'arrow-left',
          label: 'Back',
          onPress: () => setActiveMenu(null), // Volver al menú principal
        },
      ] : activeMenu === 'email' ? [
        {
          icon: 'send',
          label: 'Send Email',
          onPress: () => {
            console.log('Pressed send email');
            setActiveMenu(null); // Reiniciar al menú principal
          },
        },
        {
          icon: 'inbox',
          label: 'Inbox',
          onPress: () => {
            console.log('Pressed inbox');
            setActiveMenu(null); // Reiniciar al menú principal
          },
        },
        {
          icon: 'arrow-left',
          label: 'Back',
          onPress: () => setActiveMenu(null), // Volver al menú principal
        },
      ] : [
        {
          icon: 'star-outline',
          label: 'Favorite',
          onPress: () => {
            console.log('Pressed favorite');
            setActiveMenu(null); // Reiniciar al menú principal
          },
        },
        {
          icon: 'star-half',
          label: 'Rate',
          onPress: () => {
            console.log('Pressed rate');
            setActiveMenu(null); // Reiniciar al menú principal
          },
        },
        {
          icon: 'arrow-left',
          label: 'Back',
          onPress: () => setActiveMenu(null), // Volver al menú principal
        },
      ];

  return (
    <PaperProvider>
      <Portal>
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
      </Portal>
    </PaperProvider>
  );
};

export default FloatButton;