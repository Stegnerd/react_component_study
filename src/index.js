import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Dalton"
          timeAgo="Today @ 4:34 pm"
          content="text 1"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Maryb"
          timeAgo="Today @ 2 am"
          content="text 2"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Libi"
          timeAgo="yesterday @ 5 pm"
          content="text 3"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
