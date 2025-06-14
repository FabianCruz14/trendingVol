// RadialMenu.tsx
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const RADIUS = 120;
const ACTIONS = ['Saque', 'Recepción', 'Pase', 'Ataque', 'Bloqueo'];

const RadialMenu = ({ visible, center, onSelect }) => {
  if (!visible) return null;

  return (
    <View style={[StyleSheet.absoluteFill, styles.overlay]}>
      {ACTIONS.map((action, i) => {
        const angle = (i / ACTIONS.length) * 2 * Math.PI;
        const x = center.x + RADIUS * Math.cos(angle);
        const y = center.y + RADIUS * Math.sin(angle);

        return (
          <Pressable
            key={i}
            onPress={() => onSelect(action)}
            style={[styles.item, { left: x - 40, top: y - 20 }]}
          >
            <Text style={styles.label}>{action}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export const MainButtonWithRadialMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  const handleMainButtonPress = (e) => {
    const { pageX, pageY } = e.nativeEvent;
    setCenter({ x: pageX, y: pageY });
    setMenuVisible(true);
  };

  const handleSelect = (action) => {
    console.log("Acción seleccionada:", action);
    setMenuVisible(false);
    // Aquí puedes mostrar el submenú de valores si quieres
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={handleMainButtonPress}
        onPressOut={() => setMenuVisible(false)}
        style={styles.mainButton}
      >
        <Text style={{ color: 'white' }}>mainButton</Text>
      </Pressable>

      <RadialMenu visible={menuVisible} center={center} onSelect={handleSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  mainButton: {
    position: 'absolute',
    bottom: 80,
    left: '40%',
    width: 80,
    height: 80,
    backgroundColor: '#222',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    zIndex: 100,
  },
  item: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
