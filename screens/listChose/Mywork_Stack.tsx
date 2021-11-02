import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import ToolBar from '../../components/UI/ToolBar';
import FONTS from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import ToolBarItem from '../../components/UI/ToolBarItem';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { orange100 } from 'react-native-paper/lib/typescript/styles/colors';
import CardCalendar from '../../components/UI/CardCalendar';

LocaleConfig.locales['fr'] = {
  monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: 'Aujourd\'hui',
};
LocaleConfig.defaultLocale = 'fr';

const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};


const Mywork_Stack = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ToolBarItem style={styles.Toolbar}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            {/* <FontAwesome name = "angle-left" size={30} color={Colors.blue}/> */}
            <Image source={require('../../images/back.jpg')} />
          </TouchableOpacity>
          <Text style={styles.test}>TẠO TASK</Text>
          <TouchableOpacity
            style={styles.btnMenu}
            onPress={() => navigation.goBack()}>
            {/* <FontAwesome name = "fa-solid fa-bars-sort" size={30} color={Colors.blue}/> */}
            <Image source={require('../../images/menu.jpg')} />
          </TouchableOpacity>
        </ToolBarItem>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress = {() => navigation.navigate('CreateTask')}
          style={styles.btnGiaoViec}>
            <Text style={styles.textGiaoViec}>Giao Việc</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Mywork_Stack')}
            style={styles.btnGiaoViec}>
            <Text style={styles.textGiaoViec}>Việc của tôi</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Text style={styles.textTieuDe}>Tiêu Đề</Text>
          <TextInput
            style={styles.textIP}
            placeholder="Type here..."></TextInput>
         
          <Text style={styles.textTieuDe}>Mô tả</Text>
          <TextInput
            style={styles.textMota}
            placeholder="Type here..."></TextInput>
          <View>
            <Text style={styles.textTieuDe}>Chọn lịch viếng thăm</Text>
            <TextInput style={styles.textIP} placeholder="Type here...">
              {/* <Image style = {styles.tick} source = {require('../images/tick.jpg')}/>  */}
            </TextInput>
            <Text style={styles.textTieuDe}>Thời gian</Text>
          <TextInput style={styles.textIP}></TextInput>
          </View>
          <View>
            <Text style={styles.dayStart}>Ngày bắt đầu - Ngày kết thúc</Text>
          </View>

          <CardCalendar style = {styles.card}>
           <View style = {styles.viewCalendar}>
            <Calendar 
            monthFormat = 'MMMM'
            theme = {{
              backgroundColor: '#ffff',
              calendarBackground: Colors.whiteSmoke,
              arrowColor: '#A3D6E9',
              monthTextColor: '#636A6A',
              textMonthFontWeight: 'bold',
              textDayFontSize: 16,
              textMonthFontSize: 23,
              textDayHeaderFontSize: 16
            }}
            style= {styles.calendar}
            />
          </View>
          <View style = {{flexDirection: 'row'}}>
            <Text style = {styles.textStart}>
              Bắt đầu
            </Text>
            <Text style = {styles.textEnd}>
              Kết thúc
            </Text>
          </View>
          </CardCalendar>
        </View>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 40, marginVertical: 40}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeActivity')}
            style={styles.btnHuy}>
            <Text style={styles.textGiaoViec}>HỦY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLuu}>
            <Text style={styles.textluu}>LƯU</Text>
          </TouchableOpacity>
        </View>
        
       
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  }, 
  card: {
    alignSelf: 'center',
    marginTop: 20,
  },
  Toolbar: {
    alignItems: 'center',
  },
  btnBack: {
    height: 40,
    width: 30,
    marginLeft: 20,
  },
  tick: {},
  test: {
    marginLeft: 110,
    ...FONTS.h4,
  },
  viewCalendar: {
    marginTop: 20,
  },
  calendar: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 380,
    height: 380, 
    alignSelf: 'center',
    
  },
  btnMenu: {
    height: 40,
    width: 30,
    marginLeft: 125,
    marginTop: 15,
  },
  btnGiaoViec: {
    backgroundColor: Colors.whiteSmoke,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    marginLeft: 20,
  },
  textGiaoViec: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textTieuDe: {
    marginLeft: 10,
    marginTop: 20,
    ...FONTS.h5,
  },
  textIP: {
    borderRadius: 15,
    marginTop: 5,
    width: 400,
    alignSelf: 'center',
    backgroundColor: Colors.whiteSmoke,
  },
  textMota: {
    borderRadius: 15,
    marginTop: 5,
    width: 400,
    alignSelf: 'center',
    backgroundColor: Colors.whiteSmoke,
    height: 100,
    textAlignVertical: 'top',
  },
  dayStart: {
    marginTop: 10,
    marginLeft: 15,
    ...FONTS.h13,
  },
  btnHuy: {
    backgroundColor: Colors.whiteSmoke,
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
  },
  btnLuu: {
    backgroundColor: Colors.blue,
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 185,
    marginLeft: 20,
  },
  textluu: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textStart: {
    fontSize: 20,
    paddingLeft: 30,
    paddingTop: 10,
    fontWeight: 'bold'
  },
  textEnd: {
    fontSize: 20,
    paddingLeft: 150,
    paddingTop: 10,
    fontWeight: 'bold',
  }
});

export default Mywork_Stack;
