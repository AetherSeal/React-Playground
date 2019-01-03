import React from "react";

const menu = props => {
  const { apps, clicked, customClass } = props;
  const listOfButtons = apps.map((app) => {
    console.log(app)
    return (
      <button
        id={app}
        onClick={clicked}
        className={customClass}
        key={app}
      >
        {app + " app"}
      </button>
    );
  });

  return (
    <div>
      {listOfButtons}
    </div>
  );
};

export default menu;
