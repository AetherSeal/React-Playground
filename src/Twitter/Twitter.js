import React from "react";
import "./Twitter.css";

import Alert from "./TwitterAlert";

export default class DynamicData extends React.Component {
  state = {
    twittSize: 100,
    twittMsg: "",
    twittAlert: "",
    twitterThread: [
      {
        author: {
          name: "lorem",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZukHtepriNV86W8E4iScEDMnGZZauqf46QdyetFChvIR1U-j"
        },
        twitterThreadMessage:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis lorem ex, et dictum orci volutpat ac. Morbi nec placerat libero. Class aptent taciti sociosqu ad litora torquent"
      },
      {
        author: {
          name: "ipsum",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3Bbc108wN9ZDhtEHRYnO0hAIbYbAEZ_QKSnfOU3ETulXDIYNEw"
        },
        twitterThreadMessage:
          "Vestibulum ac pulvinar libero. Proin at risus lectus. In ac tortor malesuada, pellentesque elit sed, fringilla tortor. "
      }
    ]
  };

  twitMsgHandler = e => {
    const newSize = 100 - e.target.value.length;
    if (newSize <= 0) {
      this.setState({
        twittAlert: "El mensaje es muy largo",
        twittMsg: e.target.value,
        twittSize: newSize
      });
    } else {
      this.setState({
        twittSize: newSize,
        twittAlert: "",
        twittMsg: e.target.value
      });
    }
  };
  otherTwitts = e => {
    const listOfTwetts = this.state.twitterThread.map((m, index) => {
      return (
        <div
          className="twitter-thread"
          onClick={() => this.deleteTwittHandler(index)}
          key={index}
        >
          <h3>
            <img src={m.author.image} alt="" className="twitter-avatar" />
            {m.author.name}
          </h3>
          {m.twitterThreadMessage}
        </div>
      );
    });
    return listOfTwetts;
  };
  deleteTwittHandler = e => {
    const listOfTwits = this.state.twitterThread.filter((t, index) => {
      if (index !== e) {
        return t;
      }
      return null;
    });
    this.setState({
      twitterThread: listOfTwits
    });
  };

  postHandler = e => {
    e.preventDefault();
    debugger;
    const t = e.target.myTwit.value;
    this.setState({
      twitterThread: [
        ...this.state.twitterThread,
        {
          author: {
            name: "lorem",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZukHtepriNV86W8E4iScEDMnGZZauqf46QdyetFChvIR1U-j"
          },
          twitterThreadMessage: t
        }
      ]
    });
  };

  render() {
    return (
      <div className="twitter-container ">
        <div className="twitter-wrapper">
          <h1>Old Twitter</h1>
          <h3>{this.state.twittAlert}</h3>
          <h4> Remaing chars:{this.state.twittSize}</h4>
          <Alert twittLength={this.state.twittMsg.length} />
          <form onSubmit={this.postHandler}>
            <textarea
              name=""
              id="myTwit"
              cols="30"
              rows="10"
              className="twitter-textbox"
              value={this.state.twittMsg}
              onChange={this.twitMsgHandler}
            />
            <button className="twitter-button" type="submit" value="Submit">
              Post
            </button>
          </form>

          <hr />
          <h3>other twitts</h3>
          <div className="twitter-thread-container">{this.otherTwitts()}</div>
        </div>
      </div>
    );
  }
}
