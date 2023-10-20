import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground} from 'react-native';
import {Notification, Receipt21, Clock, Message} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{...styles.title, color: colors.white()}}>YG.Store</Text>
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
    height:52,
    elevation: 8,
    paddingTop:15,
    paddingBottom:4,
    marginBottom:20
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
    marginHorizontal:5
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
    <ScrollView>
      
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://images.wallpapersden.com/image/download/mobile-legends-bang-bang-gaming-2023_bW1ubmmUmZqaraWkpJRmbmdlrWZlbWY.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 14, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://tse2.mm.bing.net/th?id=OIP.YR2Byrm85tfU19NXBLWM0wHaEK&pid=Api&P=0&h=180',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Expore Your Journey Go Top Up On YStore
                  </Text>
                  <Text style={itemHorizontal.cardText}>Ocr 04, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.ytimg.com/vi/Q2CHzEjYT4k/maxresdefault.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    New Bundle Is Coming GAIA 2.0 Go Top Up Now 
                  </Text>
                  <Text style={itemHorizontal.cardText}>Oct 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.JAznu-8H1pbTc-qElD6MTgHaEK&pid=Api&P=0&h=180',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Lin Is Coming!!
                  </Text>
                  <Text style={itemHorizontal.cardText}>Sep 11, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://tse1.mm.bing.net/th?id=OIP.MoE58Nv_KzLxVIbsdvwRMgHaDl&pid=Api&P=0&h=180',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    U want to be Number 1 ? Upgrade Ur Equipment
                  </Text>
                  <Text style={itemHorizontal.cardText}>Aug 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={20} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View>
          <Text style={{...styles.title, marginLeft: 20, marginTop: 10,color: colors.white()}}>Rekomendasi</Text>
        </View>
        <View style={itemVertical.listCard}>
          {/* CARD 1 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://1.bp.blogspot.com/-wRDBENXWikE/Xt6RH6kUKDI/AAAAAAAAD8c/hrTSxy_vJk4c9qeDhF1EqKfjKdLGDlJ_QCLcBGAsYHQ/s1600/20200609_005629.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,color: colors.white()}}>Mobile Legends</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{...styles.title, marginLeft: 20,color: colors.white()}}>Daftar Game</Text>
        </View>
        <View style={itemVertical.listCard}>
          {/* CARD 1 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://1.bp.blogspot.com/-wRDBENXWikE/Xt6RH6kUKDI/AAAAAAAAD8c/hrTSxy_vJk4c9qeDhF1EqKfjKdLGDlJ_QCLcBGAsYHQ/s1600/20200609_005629.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,color : colors.white() }}>MobileLegends</Text>
            </View>
          </View>

          {/* CARD 2 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://cdn.dribbble.com/users/2348/screenshots/10696082/valorant_1_4x.png',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 20,color: colors.white()}}>Valorant</Text>
            </View>
          </View>
                {/* CARD 3 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://tse4.mm.bing.net/th?id=OIP.wQHFDGZP7K9PxUM2-tfkKgHaEo&pid=Api&P=0&h=180',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,color: colors.white()}}>Honkai Star Rail</Text>
            </View>
          </View>
              {/* CARD 4 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://tse1.mm.bing.net/th?id=OIP.KE_q7zjZ1MkYi5SDTf3YpQHaEK&pid=Api&P=0&h=180',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,color: colors.white()}}>Ragnarok Origin</Text>
            </View>
          </View>
    {/* CARD 5 */}
    <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.B8wX9bqMfMKI7xxQvWGSrAHaEK&pid=Api&P=0&h=180',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 20 ,color: colors.white()}}>Free Fire</Text>
            </View>
          </View>
 {/* CARD 6 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://i.ytimg.com/vi/-8n89eBzyvs/maxresdefault.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 10 ,color: colors.white()}}>Seven Knight 2</Text>
            </View>
          </View>
           {/* CARD 7 */}
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://tse3.mm.bing.net/th?id=OIP.x3eIuDFljQllFLNI1I5bIAHaEK&pid=Api&P=0&h=180',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 10 ,color: colors.white()}}>Arena Of Valor</Text>
            </View>
          </View>
     {/* CARD 8 */}
     <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://3.bp.blogspot.com/-JQS6--CC9XI/XGVRAjm1EpI/AAAAAAAAAG8/whqgUEq0-jowugv_S36pbwcGizdjDbj6ACPcBGAYYCw/s1600/Game-PUBG-mobile-game.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 30 ,color: colors.white()}}>PUBG</Text>
            </View>
          </View>

 {/* CARD 9 */}
 <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={{
                uri: 'https://asset.vg247.com/tower-of-fantasy.jpg/BROK/thumbnail/1600x900/format/jpg/quality/80/tower-of-fantasy.jpg',
              }}
            />
            <View style={itemVertical.cardContent}>
              <Text style={{...itemVertical.cardTitle,marginLeft: 40 ,color: colors.white()}}>TOF</Text>
            </View>
          </View>

        </View>
        </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap'
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
    objectFit: 'cover'
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    paddingRight:1,
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
