import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ArticleItem, { NoMoreArticle } from '../components/articleItem'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [{
        id: 1,
        title: '这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }, {
        id: 2,
        title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      },{
        id: 3,
        title: '这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }, {
        id: 4,
        title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      },{
        id: 5,
        title: '这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }, {
        id: 6,
        title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      },{
        id: 7,
        title: '这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }, {
        id: 8,
        title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      },{
        id: 9,
        title: '这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题这是一个超长的标题',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }, {
        id: 10,
        title: '标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2标题2',
        content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了'
      }]
    }
  }

  _renderItem({item}) {
    return <ArticleItem
      articleData={item}
    />
  }

  _onRefresh() {
    if (!this.state.loading) {
      this.setState({
        loading: true
      })
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 2000)
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <FlatList
        ItemSeparatorComponent={({highlighted}) => (
          <View style={[style.separator, highlighted]} />
        )}
        data={this.state.data}
        keyExtractor={(item, index) => `article-item-${item.id}` }
        renderItem={this._renderItem}
        refreshing={this.state.loading}
        onRefresh ={this._onRefresh.bind(this)}
        ListFooterComponent={() => <NoMoreArticle />}
      />
    )
  }
}

const style = StyleSheet.create({
  separator: {
    height: 8,
    backgroundColor: '#f1f4f5'
  }
})