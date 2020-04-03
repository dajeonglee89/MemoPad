import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>다정이 메모장</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>메모추가</button>
          <button onClick={onDeleteNote}>삭제</button>
        </div>
      </div>
    );
  }
}

export default Header;
