import React from 'react';

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

  refCb(ins) {
    console.log(ins);
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input type="text" placeholder="input1" ref={this.textInput} />
        <input type="text" placeholder="input2" ref={this.textInput2} />
        <input type="text" ref={this.refCb} />
        <hr></hr>
        <input
          type="button"
          value="Focus the text input1"
          onClick={this.focusTextInput}
        />
        <input
          type="button"
          value="Focus the text input2"
          onClick={this.focusTextInput2}
        />
      </div>
    );
  }
}

export default Ref;
