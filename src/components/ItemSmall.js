import {Image, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React from 'react';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const navigation = useNavigation();
const ItemSmall = ({item}) => {
  return (
    <TouchableOpacity style={itemVertical.cardItem} onPress={() => navigation.navigate('DetailBlog', {blogId: item.id})}>
     <FastImage
        style={itemVertical.cardImage}
        source={{
          uri: item.image,
        }}
      />
      <View style={itemVertical.cardContent}>
        <Text style={{...itemVertical.cardTitle,textAlign : 'center', color: colors.white()}}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemSmall;
const itemVertical = StyleSheet.create({
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
    color: colors.black(),
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
