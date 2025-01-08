import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const [currentScreen, setCurrentScreen] = useState<'Intro' | 'Homepage'>('Intro');

  useEffect(() => {
    // Chuyển từ màn hình Intro sang Homepage sau 10 giây
    const timer = setTimeout(() => {
      setCurrentScreen('Homepage');
    }, 10000); // 10 giây

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen === 'Intro' ? <IntroScreen /> : <HomepageScreen />}
    </SafeAreaView>
  );
}

function IntroScreen(): React.JSX.Element {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Giới Thiệu Bản Thân</Text>
      <Text style={styles.description}>
        Xin chào! Tôi là Trần Huy Hạnh Phúc, sinh viên Đại học SPKT Hồ Chí Minh. Tôi rất vui được gặp bạn.
      </Text>
    </View>
  );
}

function HomepageScreen(): React.JSX.Element {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Homepage</Text>
      <Text style={styles.description}>Chào mừng bạn đến với ứng dụng của tôi!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    paddingHorizontal: 20,
  },
});

export default App;
