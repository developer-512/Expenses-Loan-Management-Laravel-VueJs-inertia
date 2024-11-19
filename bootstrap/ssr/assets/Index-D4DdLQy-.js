import { ref, useSSRContext, onMounted, unref, withCtx, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-pO85wtcF.js";
import { useForm, Head, Link, router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Pagination-DonOke2s.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
const _sfc_main$1 = {
  __name: "ImagePopup",
  __ssrInlineRender: true,
  props: {
    imageSrc: { type: String, required: true },
    // Full image source
    thumbnail: { type: String, required: false }
    // Thumbnail image source
  },
  setup(__props) {
    const showPopup = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ae91c54c><img${ssrRenderAttr("src", __props.thumbnail)} alt="Thumbnail" style="${ssrRenderStyle({ "cursor": "pointer", "max-width": "100px" })}" data-v-ae91c54c>`);
      if (showPopup.value) {
        _push(`<div class="modal-overlay" data-v-ae91c54c><div class="modal-content" data-v-ae91c54c><span class="close-btn" data-v-ae91c54c>×</span><img${ssrRenderAttr("src", __props.imageSrc)} alt="Full Image" data-v-ae91c54c></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImagePopup.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ImagePopup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ae91c54c"]]);
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    expenses: {
      type: Object,
      default: () => []
    },
    months: {
      type: Array,
      default: [
        "January",
        // Index 0 (can be ignored or handled separately if you start from 1)
        "January",
        // Index 1
        "February",
        // Index 2
        "March",
        // Index 3
        "April",
        // Index 4
        "May",
        // Index 5
        "June",
        // Index 6
        "July",
        // Index 7
        "August",
        // Index 8
        "September",
        // Index 9
        "October",
        // Index 10
        "November",
        // Index 11
        "December"
        // Index 12
      ]
    },
    search: {
      type: Object,
      default: () => {
      }
    },
    is_Searching: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const checkURL = (url) => {
      return url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;
    };
    console.log(props.expenses);
    const form = useForm({});
    const paidForm = useForm({});
    const searchForm = useForm({
      search_query: "",
      search_expense_month: 0,
      search_expense_year: 0,
      shared_expenses: "",
      all_expenses: ""
    });
    onMounted(() => {
      if (props.search) {
        searchForm.search_query = props.search.search_query || "";
        searchForm.search_expense_month = props.search.search_expense_month || 0;
        searchForm.search_expense_year = props.search.search_expense_year || 0;
        searchForm.shared_expenses = props.search.shared_expenses || "";
        searchForm.all_expenses = props.search.all_expenses || "";
      }
    });
    const submit = () => searchForm.get(route("expenses.index"));
    const deleteExpense = (id) => {
      if (confirm("Do you really want to delete?")) {
        form.delete(`expenses/${id}`);
      }
    };
    const duplicateExpenses = () => {
      if (confirm("Do you really want to Duplicate current months record to next month?")) {
        router.get(route("expenses.duplicate"));
      }
    };
    const updatePayed = (id) => {
      paidForm.patch(`expenses/${id}/payed`, {
        preserveScroll: true,
        // optional: prevent the page from scrolling when the form updates
        onSuccess: (response) => {
          console.log(`Payed status updated for expense ID: ${id}`);
        },
        onError: (errors) => {
          console.error(`Error updating payed status for expense ID: ${id}`, errors);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Expenses" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Expenses </h2></div><div class="grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-2 w-full text-center mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("expenses.index"),
              class: "w-auto justify-between inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` My Expenses`);
                  if (unref(searchForm).shared_expenses == "" && unref(searchForm).all_expenses == "") {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" My Expenses"),
                    unref(searchForm).shared_expenses == "" && unref(searchForm).all_expenses == "" ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("expenses.index") + "?shared_expenses=true",
              class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Shared Expenses`);
                  if (unref(searchForm).shared_expenses) {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" Shared Expenses"),
                    unref(searchForm).shared_expenses ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("expenses.index") + "?all_expenses=true",
              class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` All Expenses`);
                  if (unref(searchForm).all_expenses) {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" All Expenses"),
                    unref(searchForm).all_expenses ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("expenses.create"),
              class: "w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add New Expense`);
                } else {
                  return [
                    createTextVNode("Add New Expense")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full mt-4"${_scopeId}><div class=""${_scopeId}><form class="mx-auto"${_scopeId}>`);
            if (unref(searchForm).all_expenses) {
              _push2(`<input type="hidden"${ssrRenderAttr("value", unref(searchForm).all_expenses)} name="all_expenses"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(searchForm).shared_expenses) {
              _push2(`<input type="hidden"${ssrRenderAttr("value", unref(searchForm).shared_expenses)} name="shared_expenses"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full flex items-center space-x-5"${_scopeId}><input type="text"${ssrRenderAttr("value", unref(searchForm).search_query)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by expense title/amount"${_scopeId}><select id="expense_month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "0") : ssrLooseEqual(unref(searchForm).search_expense_month, "0")) ? " selected" : ""}${_scopeId}>Select Month To Search</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "1") : ssrLooseEqual(unref(searchForm).search_expense_month, "1")) ? " selected" : ""}${_scopeId}>January</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "2") : ssrLooseEqual(unref(searchForm).search_expense_month, "2")) ? " selected" : ""}${_scopeId}>February</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "3") : ssrLooseEqual(unref(searchForm).search_expense_month, "3")) ? " selected" : ""}${_scopeId}>March</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "4") : ssrLooseEqual(unref(searchForm).search_expense_month, "4")) ? " selected" : ""}${_scopeId}>April</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "5") : ssrLooseEqual(unref(searchForm).search_expense_month, "5")) ? " selected" : ""}${_scopeId}>May</option><option value="6"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "6") : ssrLooseEqual(unref(searchForm).search_expense_month, "6")) ? " selected" : ""}${_scopeId}>June</option><option value="7"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "7") : ssrLooseEqual(unref(searchForm).search_expense_month, "7")) ? " selected" : ""}${_scopeId}>July</option><option value="8"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "8") : ssrLooseEqual(unref(searchForm).search_expense_month, "8")) ? " selected" : ""}${_scopeId}>August</option><option value="9"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "9") : ssrLooseEqual(unref(searchForm).search_expense_month, "9")) ? " selected" : ""}${_scopeId}>September</option><option value="10"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "10") : ssrLooseEqual(unref(searchForm).search_expense_month, "10")) ? " selected" : ""}${_scopeId}>October</option><option value="11"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "11") : ssrLooseEqual(unref(searchForm).search_expense_month, "11")) ? " selected" : ""}${_scopeId}>November</option><option value="12"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_month) ? ssrLooseContain(unref(searchForm).search_expense_month, "12") : ssrLooseEqual(unref(searchForm).search_expense_month, "12")) ? " selected" : ""}${_scopeId}>December</option></select><select id="expense_year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value="0"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "0") : ssrLooseEqual(unref(searchForm).search_expense_year, "0")) ? " selected" : ""}${_scopeId}>Select Year To Search</option><option value="2024"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2024") : ssrLooseEqual(unref(searchForm).search_expense_year, "2024")) ? " selected" : ""}${_scopeId}>2024</option><option value="2025"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2025") : ssrLooseEqual(unref(searchForm).search_expense_year, "2025")) ? " selected" : ""}${_scopeId}>2025</option><option value="2026"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2026") : ssrLooseEqual(unref(searchForm).search_expense_year, "2026")) ? " selected" : ""}${_scopeId}>2026</option><option value="2027"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2027") : ssrLooseEqual(unref(searchForm).search_expense_year, "2027")) ? " selected" : ""}${_scopeId}>2027</option><option value="2028"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2028") : ssrLooseEqual(unref(searchForm).search_expense_year, "2028")) ? " selected" : ""}${_scopeId}>2028</option><option value="2029"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2029") : ssrLooseEqual(unref(searchForm).search_expense_year, "2029")) ? " selected" : ""}${_scopeId}>2029</option><option value="2030"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).search_expense_year) ? ssrLooseContain(unref(searchForm).search_expense_year, "2030") : ssrLooseEqual(unref(searchForm).search_expense_year, "2030")) ? " selected" : ""}${_scopeId}>2030</option></select><button${ssrIncludeBooleanAttr(unref(searchForm).processing) ? " disabled" : ""} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit"${_scopeId}>Search</button>`);
            if (__props.is_Searching) {
              _push2(`<span${_scopeId}><button class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800"${_scopeId}>Clear</button></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Expenses ")
              ]),
              createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-2 w-full text-center mt-4" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("expenses.index"),
                  class: "w-auto justify-between inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" My Expenses"),
                    unref(searchForm).shared_expenses == "" && unref(searchForm).all_expenses == "" ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("expenses.index") + "?shared_expenses=true",
                  class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Shared Expenses"),
                    unref(searchForm).shared_expenses ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("expenses.index") + "?all_expenses=true",
                  class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" All Expenses"),
                    unref(searchForm).all_expenses ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("expenses.create"),
                  class: "w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add New Expense")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("div", { class: "w-full mt-4" }, [
                createVNode("div", { class: "" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "mx-auto"
                  }, [
                    unref(searchForm).all_expenses ? withDirectives((openBlock(), createBlock("input", {
                      key: 0,
                      type: "hidden",
                      "onUpdate:modelValue": ($event) => unref(searchForm).all_expenses = $event,
                      name: "all_expenses"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, unref(searchForm).all_expenses]
                    ]) : createCommentVNode("", true),
                    unref(searchForm).shared_expenses ? withDirectives((openBlock(), createBlock("input", {
                      key: 1,
                      type: "hidden",
                      "onUpdate:modelValue": ($event) => unref(searchForm).shared_expenses = $event,
                      name: "shared_expenses"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, unref(searchForm).shared_expenses]
                    ]) : createCommentVNode("", true),
                    createVNode("div", { class: "w-full flex items-center space-x-5" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(searchForm).search_query = $event,
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                        placeholder: "Search by expense title/amount"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(searchForm).search_query]
                      ]),
                      withDirectives(createVNode("select", {
                        id: "expense_month",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                        "onUpdate:modelValue": ($event) => unref(searchForm).search_expense_month = $event
                      }, [
                        createVNode("option", { value: "0" }, "Select Month To Search"),
                        createVNode("option", { value: "1" }, "January"),
                        createVNode("option", { value: "2" }, "February"),
                        createVNode("option", { value: "3" }, "March"),
                        createVNode("option", { value: "4" }, "April"),
                        createVNode("option", { value: "5" }, "May"),
                        createVNode("option", { value: "6" }, "June"),
                        createVNode("option", { value: "7" }, "July"),
                        createVNode("option", { value: "8" }, "August"),
                        createVNode("option", { value: "9" }, "September"),
                        createVNode("option", { value: "10" }, "October"),
                        createVNode("option", { value: "11" }, "November"),
                        createVNode("option", { value: "12" }, "December")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(searchForm).search_expense_month]
                      ]),
                      withDirectives(createVNode("select", {
                        id: "expense_year",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                        "onUpdate:modelValue": ($event) => unref(searchForm).search_expense_year = $event
                      }, [
                        createVNode("option", { value: "0" }, "Select Year To Search"),
                        createVNode("option", { value: "2024" }, "2024"),
                        createVNode("option", { value: "2025" }, "2025"),
                        createVNode("option", { value: "2026" }, "2026"),
                        createVNode("option", { value: "2027" }, "2027"),
                        createVNode("option", { value: "2028" }, "2028"),
                        createVNode("option", { value: "2029" }, "2029"),
                        createVNode("option", { value: "2030" }, "2030")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(searchForm).search_expense_year]
                      ]),
                      createVNode("button", {
                        disabled: unref(searchForm).processing,
                        class: "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
                        type: "submit"
                      }, "Search", 8, ["disabled"]),
                      __props.is_Searching ? (openBlock(), createBlock("span", { key: 0 }, [
                        createVNode("button", {
                          class: "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800",
                          onClick: ($event) => unref(searchForm).reset("search_query", "search_expense_year", "search_expense_month")
                        }, "Clear", 8, ["onClick"])
                      ])) : createCommentVNode("", true)
                    ])
                  ], 32)
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-700"${_scopeId}><div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"${_scopeId}><div class="inline-block min-w-full shadow rounded-lg overflow-hidden"${_scopeId}><div class="relative overflow-x-auto"${_scopeId}><table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> Title </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Amount </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Expense Month </th><th scope="col" class="px-6 py-3"${_scopeId}> Paid </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Expense Type </th><th scope="col" class="px-6 py-3"${_scopeId}> Actions </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.expenses.data, (expense) => {
              _push2(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"${_scopeId}><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"${_scopeId}>${ssrInterpolate(expense.title)} `);
              if (expense.user_id != _ctx.$page.props.auth.user.id) {
                _push2(`<span${_scopeId}><br${_scopeId}><small${_scopeId}>(Added By ${ssrInterpolate(expense.user.name)})</small></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="w-5 sm:hidden"${_scopeId}><br${_scopeId}> PKR ${ssrInterpolate(expense.amount)} <br${_scopeId}> ${ssrInterpolate(__props.months[expense.expense_month])} ${ssrInterpolate(expense.expense_year)}<br${_scopeId}><small${_scopeId}>Added on ${ssrInterpolate(expense.expense_date)}</small></span>`);
              if (expense.full_receipt_path && checkURL(expense.full_receipt_path)) {
                _push2(ssrRenderComponent(ImagePopup, {
                  "image-src": expense.full_receipt_path,
                  thumbnail: expense.full_receipt_path
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (expense.full_receipt_path && !checkURL(expense.full_receipt_path)) {
                _push2(`<small${_scopeId}><br${_scopeId}><a${ssrRenderAttr("href", expense.full_receipt_path)} target="_blank" title="Receipt" download${_scopeId}>Expense Receipt</a></small>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</td><td class="hidden md:table-cell px-6 py-4"${_scopeId}>PKR ${ssrInterpolate(expense.amount)}</td><td class="px-6 py-4 hidden md:table-cell"${_scopeId}>${ssrInterpolate(__props.months[expense.expense_month])} ${ssrInterpolate(expense.expense_year)}<br${_scopeId}><small${_scopeId}>Added on ${ssrInterpolate(expense.expense_date)}</small></td><td class="px-6 py-4"${_scopeId}><div class="p-5 space-y-2"${_scopeId}><button class="${ssrRenderClass([{ "bg-green-300": expense.payed == 1 }, "transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none"])}"${_scopeId}><div class="${ssrRenderClass([{ "transform translate-x-full": expense.payed == 1 }, "transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow"])}"${_scopeId}></div></button></div></td><td class="hidden px-6 py-4 md:table-cell"${_scopeId}>${ssrInterpolate(expense.type.replace("-", " "))}</td><td class="px-6 py-4"${_scopeId}><button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4"${_scopeId}>Delete</button>   `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("expenses.edit", expense.id),
                class: "inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Edit`);
                  } else {
                    return [
                      createTextVNode("Edit")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { pagination: __props.expenses }, null, _parent2, _scopeId));
            _push2(`<div class="w-full flex justify-between px-6"${_scopeId}><button class="w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"${_scopeId}>Copy Current Month Expenses To Next</button></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-700" }, [
                    createVNode("div", { class: "-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto" }, [
                      createVNode("div", { class: "inline-block min-w-full shadow rounded-lg overflow-hidden" }, [
                        createVNode("div", { class: "relative overflow-x-auto" }, [
                          createVNode("table", { class: "w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400" }, [
                            createVNode("thead", { class: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3"
                                }, " Title "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Amount "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Expense Month "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3"
                                }, " Paid "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Expense Type "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3"
                                }, " Actions ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.expenses.data, (expense) => {
                                return openBlock(), createBlock("tr", {
                                  key: expense.id,
                                  class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                }, [
                                  createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, [
                                    createTextVNode(toDisplayString(expense.title) + " ", 1),
                                    expense.user_id != _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("span", { key: 0 }, [
                                      createVNode("br"),
                                      createVNode("small", null, "(Added By " + toDisplayString(expense.user.name) + ")", 1)
                                    ])) : createCommentVNode("", true),
                                    createVNode("span", { class: "w-5 sm:hidden" }, [
                                      createVNode("br"),
                                      createTextVNode(" PKR " + toDisplayString(expense.amount) + " ", 1),
                                      createVNode("br"),
                                      createTextVNode(" " + toDisplayString(__props.months[expense.expense_month]) + " " + toDisplayString(expense.expense_year), 1),
                                      createVNode("br"),
                                      createVNode("small", null, "Added on " + toDisplayString(expense.expense_date), 1)
                                    ]),
                                    expense.full_receipt_path && checkURL(expense.full_receipt_path) ? (openBlock(), createBlock(ImagePopup, {
                                      key: 1,
                                      "image-src": expense.full_receipt_path,
                                      thumbnail: expense.full_receipt_path
                                    }, null, 8, ["image-src", "thumbnail"])) : createCommentVNode("", true),
                                    expense.full_receipt_path && !checkURL(expense.full_receipt_path) ? (openBlock(), createBlock("small", { key: 2 }, [
                                      createVNode("br"),
                                      createVNode("a", {
                                        href: expense.full_receipt_path,
                                        target: "_blank",
                                        title: "Receipt",
                                        download: ""
                                      }, "Expense Receipt", 8, ["href"])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("td", { class: "hidden md:table-cell px-6 py-4" }, "PKR " + toDisplayString(expense.amount), 1),
                                  createVNode("td", { class: "px-6 py-4 hidden md:table-cell" }, [
                                    createTextVNode(toDisplayString(__props.months[expense.expense_month]) + " " + toDisplayString(expense.expense_year), 1),
                                    createVNode("br"),
                                    createVNode("small", null, "Added on " + toDisplayString(expense.expense_date), 1)
                                  ]),
                                  createVNode("td", { class: "px-6 py-4" }, [
                                    createVNode("div", { class: "p-5 space-y-2" }, [
                                      createVNode("button", {
                                        class: ["transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none", { "bg-green-300": expense.payed == 1 }],
                                        onClick: ($event) => updatePayed(expense.id)
                                      }, [
                                        createVNode("div", {
                                          class: ["transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow", { "transform translate-x-full": expense.payed == 1 }]
                                        }, null, 2)
                                      ], 10, ["onClick"])
                                    ])
                                  ]),
                                  createVNode("td", { class: "hidden px-6 py-4 md:table-cell" }, toDisplayString(expense.type.replace("-", " ")), 1),
                                  createVNode("td", { class: "px-6 py-4" }, [
                                    createVNode("button", {
                                      onClick: ($event) => deleteExpense(expense.id),
                                      class: "inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4"
                                    }, "Delete", 8, ["onClick"]),
                                    createTextVNode("   "),
                                    createVNode(unref(Link), {
                                      href: _ctx.route("expenses.edit", expense.id),
                                      class: "inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Edit")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode(_sfc_main$3, { pagination: __props.expenses }, null, 8, ["pagination"]),
                        createVNode("div", { class: "w-full flex justify-between px-6" }, [
                          createVNode("button", {
                            onClick: ($event) => duplicateExpenses(),
                            class: "w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                          }, "Copy Current Month Expenses To Next", 8, ["onClick"])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
