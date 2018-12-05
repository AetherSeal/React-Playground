import React from "react";

export default class DynamicData extends React.Component {
  state = {
    twittSize: 100,
    twittMsg: "",
    twittAlert: "",
    twitterThread:[
        {
            twitterThreadMessage:"twitt1"
        },
        {
            twitterThreadMessage:"twitt2"
        },
    ]
  };

  twitMsgHandler = e => {
    debugger;
    const newSize = 100 -  e.target.value.length;
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
  otherTwitts = e =>{
    const listOfTwetts = this.state.twitterThread.map((m)=>{
        return <div>{m.twitterThreadMessage}</div>
    })
    return listOfTwetts
  }

  twitterThreadMessage

  render() {
    return (
      <div>
        <h1>Old Twitter</h1>
        <h3>{this.state.twittAlert}</h3>
        <h4> Remaing chars:{this.state.twittSize}</h4>
        <div>
          <textarea
            name=""
            id="myTwit"
            cols="30"
            rows="10"
            value={this.state.twittMsg}
            onChange={this.twitMsgHandler}
          />
        </div>
        <hr/>
        <div>
            <h3>other twitts</h3>
            {this.otherTwitts()}
        </div>
      </div>
    );
  }
}
