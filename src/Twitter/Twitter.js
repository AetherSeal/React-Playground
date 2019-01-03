import React from "react";
import Classes from "./Twitter.css";

import Alert from "./TwitterAlert";


export default class DynamicData extends React.Component {
  state = {
    tweetSize: 100,
    tweetMsg: "",
    tweetAlert: "",
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

  tweetMsgHandler = e => {
    const newSize = 100 - e.target.value.length;
    if (newSize <= 0) {
      this.setState({
        tweetAlert: "El mensaje es muy largo",
        tweetMsg: e.target.value,
        tweetSize: newSize
      });
    } else {
      this.setState({
        tweetSize: newSize,
        tweetAlert: "",
        tweetMsg: e.target.value
      });
    }
  };
  otherTweets = e => {
    const listOfTwetts = this.state.twitterThread.map((m, index) => {
      return (
        <div
          className={Classes.twitterThread}
          onClick={() => this.deleteTweetHandler(index)}
          key={index}
        >
          <h3>
            <img src={m.author.image} alt="" className={Classes.twitterAvatar} />
            {m.author.name}
          </h3>
          {m.twitterThreadMessage}
        </div>
      );
    });
    return listOfTwetts;
  };
  deleteTweetHandler = e => {
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
      <div  className={Classes.twitterContainer}>
        <div className={Classes.twitterWrapper}>
          <h1>Old Twitter</h1>
          <h3>{this.state.tweetAlert}</h3>
          <h4> Remaing chars:{this.state.tweetSize}</h4>
          <Alert tweetLength={this.state.tweetMsg.length} />
          <form onSubmit={this.postHandler}>
            <textarea
              name=""
              id="myTwit"
              cols="30"
              rows="10"
              className={Classes.twitterTextbox}
              value={this.state.tweetMsg}
              onChange={this.tweetMsgHandler}
            />
            <button  className={Classes.twitterButton} type="submit" value="Submit">
              Post
            </button>
          </form>

          <hr />
          <h3>Other Tweets</h3>
          <div className={Classes.twitterThreadContainer}>{this.otherTweets()}</div>
        </div>
      </div>
    );
  }
}
