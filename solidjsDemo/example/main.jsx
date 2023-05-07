import { render } from 'https://cdn.skypack.dev/solid-js/web';

function HelloWorld() {
  return <div>Hello World!</div>;
}

render(() => <HelloWorld />, document.getElementById('app'))
