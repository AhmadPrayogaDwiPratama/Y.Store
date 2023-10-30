import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AlignLeft, Setting2} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall, itemHorizontal} from '../../components';
import { fontType, colors } from '../../theme';

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

const data = BlogList.slice(5);
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Setting2 color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}>
        <View style={{gap: 15, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{gap: 5, alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>
              Hi, Prayoga
            </Text>
          </View>
          <View style = {styles.LayoutDompet}>
          <View style={{flexDirection: 'row', gap: 20}}>
            <View style={{alignItems: 'center', gap: 5}}>
              <Text style={profile.sum}>
                {formatNumber(ProfileData.Dompet)}
              </Text>
              <Text style={profile.tag}>Saldo Anda</Text>
            </View>
          </View>
        </View>
        </View>   
        <View style={{paddingVertical: 10, gap:10}}>
          {data.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
        {/* <Text style={{...styles.title, color: colors.black()}}>Riwayat Pembelian</Text>
        <Text style={{...styles.Menunggu, color: colors.black()}}>Menunggu Pembayaran</Text> */}
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  LayoutDompet: {
    backgroundColor : '#F5F7F8',
    borderColor: '#45474B',
    width: 150,
    height: 90,
    marginLeft : 10,
    borderWidth : 2,
    borderRadius: 10,
    marginTop: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
HeaderBiru: {
  backgroundColor : '#F5F7F8',
  borderColor: '#45474B',
  width: 350,
  height: 90,
  marginLeft : 10,
  borderWidth : 2,
  borderRadius: 10,
  marginTop: 10,
  fontFamily: fontType['Pjs-ExtraBold'],
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  Riwayat: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.black(),
    marginLeft : 10,
    marginTop : 10,
  },
  Menunggu : {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 13,
    color: colors.black(),
    marginLeft : 10,
    marginTop : 10,
  },
});
const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },

  info: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  sum: {
    fontSize: 16,
    marginLeft : 27,
    marginTop : 20,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    marginLeft : 40,
    marginTop : 10,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});