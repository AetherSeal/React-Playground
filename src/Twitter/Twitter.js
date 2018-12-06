import React from "react";
import "./Twitter.css";

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
    const listOfTwetts = this.state.twitterThread.map(m => {
      return (
        <div className="twitter-thread ">
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

  postHandler = e => {
    e.preventDefault()
    debugger;

    const t = e.target.value
    
  };

  render() {
    return (
      <div className="twitter-container ">
        <div className="twitter-wrapper">
          <h1>Old Twitter</h1>
          <h3>{this.state.twittAlert}</h3>
          <h4> Remaing chars:{this.state.twittSize}</h4>
          <form onSubmit={this.postHandler}>
            <textarea
              name=""
              id="myTwit"
              cols="30"
              rows="10"
              value={this.state.twittMsg}
              onChange={this.twitMsgHandler}
            />
            <input type="submit" value="Post!" />
          </form>

          <hr />
          <h3>other twitts</h3>
          <div className="twitter-thread-container">{this.otherTwitts()}</div>
        </div>
      </div>
    );
  }
}
