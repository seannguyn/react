import React, {Component} from "react"

const MapContext = React.createContext()

const reducer = (state, action) => {

  switch (action.type) {
    case 'CLOSE_INFOWINDOW':
      return {
        ...state,
      }

    default:
      return {
        ...state,
      }

  }

}

export class MapProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      infoWindow = -1,
      dispatch: async action => {
        this.setState(state => reducer(state, action))
      }
    }
  }

  render() {
    return (
      <MapProvider.Provider value={this.state}>
        {this.props.children}
      </MapProvider.Provider>
    )

  }

}

export const MapConsumer = MapContext.Consumer
