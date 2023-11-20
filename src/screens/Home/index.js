// import React from 'react';
// import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
// import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
// import { fontType, colors } from './src/theme';
import {StyleSheet, Text, View, ScrollView, FlatList, Animated,TouchableOpacity,Image} from 'react-native';
import React, {useRef,useState} from 'react';
import {Element3, Receipt21} from 'iconsax-react-native';

import {BlogList, CategoryList,cardList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 14}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{...styles.title, color: colors.white()}}>Y.Store</Text>
      </View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkModeBlack(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 15,
    paddingBottom: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});
const scrollY = useRef(new Animated.Value(0)).current;
const diffClampY = Animated.diffClamp(scrollY, 0, 142);
const recentY = diffClampY.interpolate({
    inputRange: [0, 142],
    outputRange: [0, -142],
    extrapolate: 'clamp',
  });
const ListBlog = () => {
  return (
    <Animated.ScrollView style={styles.header[{transform: [{translateY: recentY}]}]}>
      <Animated.View style={styles.listBlog}>
        <View style={styles.listCard}></View>
      </Animated.View>

      <Animated.View style={styles.listBlog}>
        <ListHorizontal data={BlogList} />
        <View>
          <Text
            style={{
              ...styles.title,
              marginLeft: 20,
              marginTop: 10,
              color: colors.white(),
            }}>
            Rekomendasi
          </Text>
        </View>
        <View style={itemVertical.listCard}>
          <TouchableOpacity style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://1.bp.blogspot.com/-wRDBENXWikE/Xt6RH6kUKDI/AAAAAAAAD8c/hrTSxy_vJk4c9qeDhF1EqKfjKdLGDlJ_QCLcBGAsYHQ/s1600/20200609_005629.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle, color: colors.white()}}>
                Mobile Legends
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{...styles.title, marginLeft: 20, color: colors.white()}}>
            Daftar Game
          </Text>
        </View>
        <FlatListCategory />
        <View style={itemVertical.listCard}>
          {cardList.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </Animated.View>
    </Animated.ScrollView>
  );
};

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

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
