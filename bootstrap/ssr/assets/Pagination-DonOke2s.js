import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagination: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "relative flex justify-center" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.pagination.links, (link) => {
        _push(ssrRenderComponent(unref(Link), {
          "preserve-scroll": "",
          href: link.url ?? "",
          class: ["flex items-center justify-center px-3 py-2 text-sm rounded-lg text-gray-200", { "bg-gray-700 text-gray-200 dark:bg-gray-200 dark:text-gray-700": link.active, "!text-gray-300": !link.url }]
        }, null, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
