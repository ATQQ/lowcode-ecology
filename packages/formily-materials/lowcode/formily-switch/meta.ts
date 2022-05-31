import { snippets } from './snippets';
import props from './propsSchema';

const FormilyInputMeta = {
  componentName: 'FormilySwitch',
  title: 'Switch',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/react-components',
    version: 'latest',
    exportName: 'FormilySwitch',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
};

export default {
  ...FormilyInputMeta,
  snippets,
};