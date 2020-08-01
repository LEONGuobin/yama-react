import React, { Component } from "react";
import { GiftedChat } from "react-web-gifted-chat";
import firebase from "firebase";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const config = {
    apiKey: "AIzaSyDrmxFdBuvpTFk_LfkWJZAcsr6vrwetZJw",
    authDomain: "yama-chat.firebaseapp.com",
    databaseURL: "https://yama-chat.firebaseio.com",
    projectId: "yama-chat",
    storageBucket: "yama-chat.appspot.com",
    messagingSenderId: "271201095375",
    appId: "1:271201095375:web:542394b1c0f05d9ec0b1ba",
    measurementId: "G-FV48VXX0YZ"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class Chat extends Component {
    constructor() {
        super();
        this.state = {
            messages: [],
            user: {},
            isAuthenticated: true,
        };
    }

    componentDidMount() {
        // this.setState({ isAuthenticated: true, user: {} });
        this.loadMessages();
    }

    loadMessages() {
        const callback = snap => {
            const message = snap.val();
            message.id = snap.key;
            const { messages } = this.state;
            messages.push(message);
            this.setState({ messages });
        };
        firebase
            .database()
            .ref("/messages/")
            .limitToLast(20)
            .on("child_added", callback);
    }

    onSend(messages) {
        for (const message of messages) {
            this.saveMessage(message);
        }
    }

    saveMessage(message) {
        return firebase
            .database()
            .ref("/messages/")
            .push(message)
            .catch(function (error) {
                console.error("Error saving message to Database:", error);
            });
    }

    renderChat() {
        return (
            <GiftedChat
                user={this.chatUser}
                messages={this.state.messages.slice().reverse()}
                onSend={messages => this.onSend(messages)}
            />
        );
    }

    renderChannels() {
        return (
            <List>
                <ListItem button>
                    <ListItemAvatar>
                        <Avatar src='https://lh4.googleusercontent.com/-5_Q2XW37ylw/AAAAAAAAAAI/AAAAAAAAC1c/tFrvjFVXwyg/photo.jpg' />
                    </ListItemAvatar>
                    <ListItemText primary="Resident Service" />
                </ListItem>
            </List>
        );
    }

    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={2} />
                <GridItem xs={12} sm={12} md={8}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 style={styles.cardTitleWhite}>Chat</h4>
                            <p style={styles.cardCategoryWhite}>Any questions are welcome</p>
                        </CardHeader>
                        <CardBody>
                            <div style={styles.container}>
                                <div style={styles.channelList}>
                                    {this.renderChannels()}
                                </div>
                                <div style={styles.chat}>
                                    {this.renderChat()}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: "65vh",
    },
    channelList: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
    },
    chat: {
        display: "flex",
        flex: 3,
        flexDirection: "column",
        borderWidth: "1px",
        borderColor: "#ccc",
        borderRightStyle: "solid",
        borderLeftStyle: "solid",
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
};

export default Chat;