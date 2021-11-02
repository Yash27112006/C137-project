import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {Card} from "react-native-elements";
import axios from "axios";

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `http://a4b1-2405-201-a405-30db-dcb5-19a2-5543-a388.ngrok.io/star?name=${this.props.navigation.getParam(
        "star_name"
      )}`,
    };
  }

  getDetails = () => {
    const url = this.state.url;
    axios
      .get(url)
      .then((response) => {
        this.setState({ details: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getDetails();
    console.log(this.props.navigation.getParam("star_name"));
  }

  render() {
    const details = this.state.details;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#E66763",
        }}
      >
        <Card containerStyle={styles.cardContainerStyle}>
          <Card.Title
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textDecorationLine: "underline",
              color: "#6629B3",
            }}
          >
            {details.name}
          </Card.Title>

            <View style = {{alignItems: "center", marginTop: 20}}>
              <Text style={styles.detailsText}>{"Star Mass: " + details.mass}</Text>
              <Text style={styles.detailsText}>
                {"Star Gravity: " + details.gravity}
              </Text>
              <Text style={styles.detailsText}>
                {"Star Radius: " + details.radius}
              </Text>
              <Text style={styles.detailsText}>
                {"Distance: " + details.distance}
              </Text>
            </View>
        </Card>

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity style={styles.goBackButton}>
            <Text
              style={styles.goBackButtonText}
              onPress={() => {
                this.props.navigation.navigate("Home");
              }}
            >
              Go Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goBackButton: {
    backgroundColor: "#6EFFA0",
    borderWidth: 5,
    borderRadius: 5,
    borderColor: "#29B359",
    width: "50%",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.99,
    shadowRadius: 10.32,
    elevation: 18,
  },
  goBackButtonText: {
    fontSize: 17.5,
    fontWeight: "bold",
  },
  cardContainerStyle: {
    backgroundColor: "#FF736D",
    borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.99,
    shadowRadius: 10.32,
    elevation: 18,
  },
  detailsText: {
    color: "#FFFFFF",
    marginBottom: 10,
  },
});