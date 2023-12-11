// import React from 'react';
// import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
// import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
// import { fontType, colors } from './src/theme';
// import React, {useState} from 'react';
// import {ScrollView,StyleSheet,Text, View,Image,FlatList, TouchableOpacity,
// } from 'react-native';
// import {AlignRight, Element3, Receipt21, Size} from 'iconsax-react-native';

// import {BlogList, CategoryList,ItemKeranjang,cardList} from '../../../data';
// import { fontType, colors } from '../../theme';
// import { ListHorizontal, ItemSmall } from '../../components';
// import { Setting2, Edit } from "iconsax-react-native";
// import { useNavigation } from "@react-navigation/native";

import {ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, RefreshControl,Image} from 'react-native';
import {Edit, Setting2} from 'iconsax-react-native';
import React, { useState, useCallback,useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {ItemKeranjang, ProfileData} from '../../../data';
import {ItemSmall} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import {formatNumber} from '../../utils/formatNumber';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';


export default function Keranjang() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{...styles.title, color: colors.black()}}>Keranjang Belanja</Text>
      </View>
      <ListBlog />
    </View>
  );
}
const ListBlog = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [dataTopUp, setdataTopUp] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('YStore')
      .onSnapshot(querySnapshot => {
        const carts = [];
        querySnapshot.forEach(documentSnapshot => {
          carts.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setdataTopUp(carts);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('YStore')
        .onSnapshot(querySnapshot => {
          const carts = [];
          querySnapshot.forEach(documentSnapshot => {
            carts.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setdataTopUp(carts);
        });
      setRefreshing(false);
    }, 1500);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }} refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.blue()} />
          ) : (
            dataTopUp.map((item, index) => <ItemSmall item={item} key={index} />)
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('PageTopUp')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
  const coba = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white(),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
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
    title: {
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    floatingButton: {
      backgroundColor: colors.blue(),
      padding: 15,
      position: 'absolute',
      bottom: 24,
      right: 24,
      borderRadius: 10,
      shadowColor: colors.blue(),
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
  
      elevation: 8,
    },
  });
  const profile = StyleSheet.create({
    pic: {width: 100, height: 100, borderRadius: 15},
    name: {
      color: colors.black(),
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
    },
    info: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.grey(),
    },
    sum: {
      fontSize: 16,
      fontFamily: fontType['Pjs-SemiBold'],
      color: colors.black(),
    },
    tag: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.grey(0.5),
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
    width: 75,
    height: 75,
    borderRadius: 10,
    marginLeft : 30,
    marginTop : 10,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    backgroundColor : '#ED7D31',
    borderColor: '#45474B',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 15,
    paddingBottom: 4,
    marginBottom: 20,
  },
  imageBanner2: {
    backgroundColor : '#F5F7F8',
    borderColor: '#45474B',
    width: 390,
    height: 330,
    borderWidth : 2,
    borderRadius: 10,
    marginTop: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
imageBanner1: {
    backgroundColor : '#F5F7F8',
    borderColor: '#45474B',
    width: 350,
    height: 40,
    marginLeft : 10,
    borderWidth : 2,
    borderRadius: 10,
    marginTop: 10,
    fontFamily: fontType['Pjs-ExtraBold'],
  },
imageBanner3: {
    backgroundColor : '#ED7D31',
    width: 100,
    height: 40,
    marginLeft : 270,
    borderWidth : 2,
    borderRadius: 10,
    marginTop: 270,
    fontFamily: fontType['Pjs-ExtraBold'],
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
    color: colors.black(),
    marginLeft : 10,
    marginTop : 10,
  },

  TextTotal: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.black(),
    marginLeft : 190,
    marginTop : 20,
  },

  cardText: {
    fontSize: 13,
    marginTop : 1,
    marginLeft : 10,
    color: colors.black(),
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
