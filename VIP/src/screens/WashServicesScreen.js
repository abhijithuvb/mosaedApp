import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, searchlogo } from '../assets'
import { HEIGHT } from '../../Constants/Constants'
import CabanServiceComponent from '../components/CabanServiceComponent'
import { cabanservicelist } from '../Arrays/Arrays'
import ScreenButtonComponent from '../components/ScreenButtonComponent'

const WashServicesScreen = ({ navigation }) => {
    const [Index, setIndex] = useState()
    return (
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ marginTop: HEIGHT * 0.03 }}>
                    <HeaderComponent leftlogo={backarrow} rightlogo={searchlogo} title={'SERVICES'} />
                </View>
                <View style={{ flex: 1, backgroundColor: '#0FC1A1' }}>
                    <View style={{ backgroundColor: 'black', height: HEIGHT * 0.775, borderBottomLeftRadius: HEIGHT * 0.02, borderBottomRightRadius: HEIGHT * 0.02, alignItems: 'center', }}>
                        <FlatList data={cabanservicelist} renderItem={({ item, index }) => <CabanServiceComponent logo={item.logo} description={item.description} title={item.title} rate={item.rate} index={index} setState={(ind) => setIndex(ind)} state={Index} />} />

                    </View>
                    <View>
                        <ScreenButtonComponent text={'CHOOSE SERVICE'} onPress={() => navigation.navigate('WashSummaryScreen')} />
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

export default WashServicesScreen