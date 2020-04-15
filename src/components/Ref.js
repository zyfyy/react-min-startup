import React, {useRef} from 'react';

class Ref extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();
    // this.textInput2 = useRef(null);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus();
  }

  focusTextInput2() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    // no use!!!
    // this.textInput2.current.focus();
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="text" ref={this.textInput2} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput2}
        />
      </div>
    );
  }
}

export default Ref;
