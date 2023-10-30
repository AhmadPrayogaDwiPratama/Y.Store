// import React from 'react';
// import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
// import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
// import { fontType, colors } from './src/theme';
import React, {useState} from 'react';
import {ScrollView,StyleSheet,Text, View,Image,FlatList, TouchableOpacity,
} from 'react-native';
import {AlignRight, Element3, Receipt21, Size} from 'iconsax-react-native';

import {BlogList, CategoryList,ItemKeranjang,cardList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';

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

const ListBlog = () => {
  return (
        <View>
          <Text
            style={{
              ...styles.title,
              marginLeft: 10,
              marginTop: 10,
              color: colors.black(),
            }}>
            Pilih 
          </Text>
        <View style = {styles.imageBanner2}>
        <Image
              style={itemVertical.cardImage}
              source={{
                uri:  'https://i.ytimg.com/vi/Q2CHzEjYT4k/maxresdefault.jpg' 
            }}
            />
              <Text
            style={{
              marginLeft: 120,
              bottom :70,
              fontSize : 25,
              color: colors.black(),
            }}>
            125 Points
          </Text>
          <Text
            style={{
              marginLeft: 123,
              bottom :70,
              fontSize : 15,
              color: colors.black(),
            }}>
            Valorant
          </Text>
                  <Text style={itemHorizontal.cardText}>
                  Riot iD
                  </Text>

                  <Text style={itemHorizontal.cardTitle}>
                  PRX Pr1me#Raizl
                  </Text>

                  <Text style={itemHorizontal.cardTitle}>
                  Catatan Untuk Penjual (Opsional)
                  </Text>

                  <View style = {styles.imageBanner1}>
                  </View>    

                  <Text style={itemHorizontal.TextTotal}>
                Total Pembelian = Rp 15.900
                  </Text> 
                  <View style = {styles.imageBanner3}>
                    <Text style = {{
                        textAlign : 'center',
                         fontSize : 25,
                         color: colors.black(),
                    }}
                    >Beli</Text>
                  </View>         
        </View>
        </View>
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
