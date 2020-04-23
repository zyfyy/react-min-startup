const SyncHook = require('tapable').SyncHook;
let a = () => {
    console.log('a...')
}

// 具有 `apply` 方法……
if (compiler.hooks.myCustomHook) throw new Error('Already in use');
compiler.hooks.myCustomHook = new SyncHook(['a']);

// 在你想要触发钩子的位置/时机下调用……
compiler.hooks.myCustomHook.call(a);