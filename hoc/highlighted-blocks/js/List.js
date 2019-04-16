'use strict';

const checkPopular = (Component, propName, amount) => {
  return class extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      if (this.props[propName] > amount) {
        return (
          <Popular>
            <Component {...this.props}/>
          </Popular>
        )
      } else {
        return (
          <New>
            <Component {...this.props}/>
          </New>
        )
      }
    }
  }
}


const NewVideo = checkPopular(Video, 'views', 1000),
      NewArticle = checkPopular(Article, 'views', 1000);

const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <NewVideo {...item} />
                );

            case 'article':
                return (
                    <NewArticle {...item} />
                );
        }
    });
};
