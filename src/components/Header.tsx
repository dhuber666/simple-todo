import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, StyleSheet, Text} from 'react-native';
import Logo from '../assets/icons/bell_icon.svg';

const Header = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#3867d5', '#81c7f5']}
      style={styles.gradient}>
      <View style={styles.reminderBox}>
        <View>
          <Text style={styles.reminderTitle}>Daily Reminder</Text>
          <Text style={styles.reminderSubTitle}>Meeting with client</Text>
          <Text style={styles.reminderSubTitle}>13.00 PM</Text>
        </View>
        <Logo width={52} height={66} style={styles.bellIcon} />
        <Text style={styles.closeBtn}>X</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 238,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  reminderBox: {
    height: 100,
    width: 330,
    backgroundColor: 'rgba(255, 255, 255, 0.31)',
    borderRadius: 5,
    justifyContent: 'space-between',
    padding: 15,
    flexDirection: 'row',
  },
  reminderTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  reminderSubTitle: {
    color: 'white',
    fontSize: 11,
    lineHeight: 20,
  },
  bellIcon: {
    right: 20,
  },
  closeBtn: {
    color: 'white',
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default Header;
