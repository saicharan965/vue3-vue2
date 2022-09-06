//@ts-nocheck

import Vue2 from 'remote/vueTwo';

function bindSlotContext(target:any,context:any) {
  return Object.keys(target).map(key => {
        const vnode = target[key];
    vnode.context = context;
    return vnode;
    
  });
}

/*
 * Transform vue2 components to DOM.
 */
export function vue2ToVue3(WrapperComponent:any, wrapperId:any) {
  let vm:any;
  return {
    mounted() {
      const slots = bindSlotContext(this.$slots, this.__self);
      vm = new Vue2({
        render: (createElement:any) => {
          return createElement(
            WrapperComponent,
            {
              on: this.$attrs,
              attrs: this.$attrs,
              props: this.$props,
              scopedSlots: this.$scopedSlots,
            },
            slots,
          );
        },
      });
      vm.$mount(`#${wrapperId}`);
    },
    props: WrapperComponent.props,
    render() {
      vm && vm.$forceUpdate();
    },
  };
}
