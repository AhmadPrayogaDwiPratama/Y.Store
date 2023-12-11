import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../theme';
import {formatDate} from '../utils/formatDate';
const navigation = useNavigation();
const ItemHome = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('DetailBlog', {idTopUp: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            <Text style={styles.cardCategory}>{item.category?.name}</Text>
            <Text style={styles.cardTitle}>{item?.title}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemHome;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardItem: {
    backgroundColor: colors.darkModeBlack(),
    flexDirection: 'column',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
    textAlign : 'center'
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 110,
    height: 110,
    borderRadius: 10,
    objectFit: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    paddingRight: 1,
    paddingLeft: 1,
    flex: 1,
    paddingVertical: 5,
  },
});


