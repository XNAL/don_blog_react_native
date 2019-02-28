import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

export default class ArticleItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <TouchableOpacity>
        <View style={style.container}>
          <Text style={style.title} numberOfLines={2} ellipsizeMode={'tail'} >{this.props.articleData.title}</Text>
          <View style={style.articleInfo}>
            <View style={style.category}>
              <Entypo name={'grid'} size={24} color={'#606266'}/>
              <Text style={style.categoryName}>分类</Text>
            </View>
            <View style={style.time}>
              <Entypo name={'stopwatch'} size={18} color={'#606266'}/>
              <Text style={style.categoryName}>2019-02-27</Text>
            </View>
          </View>
          <Text style={style.content} numberOfLines={3} ellipsizeMode={'tail'}>{this.props.articleData.content}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export class NoMoreArticle extends React.Component {
  render () {
    return (
      <View>
        <Text style={style.noMore}>没有更多了</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#303133'
  },
  content: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    lineHeight: 20,
    color: '#606266'
  },
  articleInfo: {
    marginTop: 5,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  category: {
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    color: '#606266'
  },
  categoryName: {
    marginLeft: 4,
    fontSize: 14,
    color: '#606266'
  },
  time: {
    marginLeft: 40,
    display: 'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  noMore: {
    backgroundColor: '#f1f4f5',
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: '#606266'
  }
})