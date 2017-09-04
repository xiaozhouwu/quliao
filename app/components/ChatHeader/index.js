import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Header,
  Image,
  Segment,
  Icon,
  Button,
} from "semantic-ui-react";
import {
  toggleRoomList,
  toggleCurrentRoomMsg,
} from "../../action-creators/layout";

import styles from "./chat-header.less";

class ChatHeader extends Component {
  render() {
    const {
      currentRoom,
      toggleRoomList,
      toggleCurrentRoomMsg,
    } = this.props;
    return (
      <Segment className={styles.container}>
        <Button icon className={styles.menuBtn} color="teal" onClick={() => toggleRoomList()}>
          <Icon name="sidebar" />
        </Button>
        <Header as="h3" className={styles.header}>
          <Image shape="circular" src={currentRoom.get("avatar")} />
          {currentRoom.get("name")}
        </Header>
        <Button icon className={styles.moreBtn} color="teal" onClick={() => toggleCurrentRoomMsg()}>
          <Icon name="ellipsis horizontal" />
        </Button>
      </Segment>
    );
  }
}

const mapStateToProps = state => ({
  currentRoom: state.room.get("currentRoom"),
});

export default connect(mapStateToProps, {
  toggleRoomList,
  toggleCurrentRoomMsg,
})(ChatHeader);