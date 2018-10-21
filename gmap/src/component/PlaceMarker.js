import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import PlaceInfoWindow from './PlaceInfoWindow'

export class PlaceMarker extends Component {
  constructor(props) {
    super(props)

     this.state = {
      showTooltip: false
    }
  }
  clickTooltip() {
    this.setState({ showTooltip: !this.state.showTooltip })
  }

  closeWindow() {
    this.setState({ showTooltip: false })
  }

  render() {
    const {lat, lng, name, description, type, object} = this.props
    const {showTooltip} = this.state
    return(
      <Marker
        position={{
          lat: parseFloat(lat),
          lng: parseFloat(lng)
        }}
        defaultIcon={this.props.defaultIcon}
        onClick={this.clickTooltip.bind(this)}
      >
      {showTooltip && (
        <PlaceInfoWindow description={description}
                         name={name}
                         type={type}
                         object={object}
                         closeWindow={this.closeWindow.bind(this)}/>
      )}
      </Marker>
    );
  }
}

PlaceMarker.defaultProps = {
  price: ""
}

export default PlaceMarker
