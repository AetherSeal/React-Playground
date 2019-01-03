import React from "react";
import classes from './UserOutput.css'
const userInput = props => {
  return (
    <div className={classes.output}>
      <h1>user output <span className={classes.title}>{props.username?props.username:'no user'}</span></h1>
      <p>
        Bacon ipsum dolor amet tenderloin drumstick short loin cupim, jowl ham
        hock filet mignon t-bone meatball. Sirloin picanha pork chop hamburger
        pork belly, tenderloin frankfurter ribeye capicola. Bresaola flank
        tongue leberkas. Prosciutto buffalo spare ribs, shank tri-tip capicola
        ham porchetta.
      </p>
      <p>
        Tenderloin ball tip pancetta turkey ribeye, pork belly chicken doner
        alcatra. Picanha tri-tip bresaola hamburger ham burgdoggen corned beef
        pork belly swine venison brisket. Swine shank sirloin shoulder. Ribeye
        ham hock meatball salami shoulder short ribs pig pork loin pork chop
        buffalo biltong t-bone pork belly chicken.
      </p>
    </div>
  );
};

export default userInput;
