import { ref, watch, watchEffect, onMounted, onBeforeUnmount, mergeProps, useSSRContext, unref, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, vModelText, vModelCheckbox, vModelRadio, vModelSelect, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-pO85wtcF.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ApplicationLogo-3H3I4iid.js";
const _sfc_main$1 = {
  __name: "AutocompleteInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      default: () => null
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const search = ref(props.modelValue);
    const suggestions = ref([]);
    const emit = __emit;
    watch(() => props.modelValue, (newValue) => {
      search.value = newValue;
    });
    watchEffect(() => {
      emit("update:modelValue", search.value);
    });
    const handleClickOutside = (event) => {
      if (!event.target.closest(".autocomplete-area")) {
        suggestions.value = [];
      }
    };
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full autocomplete-area" }, _attrs))} data-v-6f543b6e><input type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", search.value)} data-v-6f543b6e>`);
      if (suggestions.value.length) {
        _push(`<ul class="absolute bg-white rounded-lg block w-full max-w-80" data-v-6f543b6e><!--[-->`);
        ssrRenderList(suggestions.value, (item, index) => {
          _push(`<li data-v-6f543b6e>${ssrInterpolate(item)}</li>`);
        });
        _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AutocompleteInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AutocompleteInput = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6f543b6e"]]);
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    expense: {
      type: Object,
      default: null
    },
    users: {
      type: Array,
      default: () => []
    },
    isUpdating: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const current = /* @__PURE__ */ new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    const form = useForm({
      title: "",
      receipt: null,
      amount: "",
      expense_date: date,
      payable: true,
      payed: false,
      type: "Recurring-Payment",
      expense_month: (/* @__PURE__ */ new Date()).getMonth() + 1,
      expense_year: (/* @__PURE__ */ new Date()).getFullYear(),
      shared: []
    });
    console.log(props.expense);
    const submit = () => props.isUpdating ? updateExpense() : addExpense();
    const addExpense = () => form.post(route("expenses.store"));
    const updateExpense = () => {
      form.post(route("expenses.update_expenses", props.expense.id), {
        forceFormData: true
        // Ensures the form is submitted as `multipart/form-data`
      });
    };
    onMounted(() => {
      if (props.expense) {
        form.title = props.expense.title || "";
        form.amount = props.expense.amount || "";
        form.expense_date = props.expense.expense_date || date;
        form.payable = props.expense.payable == 1 || true;
        form.payed = props.expense.payed == 1 || false;
        form.type = props.expense.type || "Recurring-Payment";
        form.expense_month = props.expense.expense_month || (/* @__PURE__ */ new Date()).getMonth() + 1;
        form.expense_year = props.expense.expense_year || (/* @__PURE__ */ new Date()).getFullYear();
        form.shared = props.expense.shared || [];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Expenses Create Form" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Create New Expense </h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("expenses.index"),
              class: "text-sky-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to All Expenses`);
                } else {
                  return [
                    createTextVNode("Back to All Expenses")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Create New Expense "),
                createVNode(unref(Link), {
                  href: _ctx.route("expenses.index"),
                  class: "text-sky-50"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to All Expenses")
                  ]),
                  _: 1
                }, 8, ["href"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><section class="bg-white dark:bg-gray-900"${_scopeId}><div class="py-8 px-4 mx-auto max-w-2xl"${_scopeId}><form class="max-w-md mx-auto" enctype="multipart/form-data"${_scopeId}>`);
            if (unref(form).progress) {
              _push2(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="100"${_scopeId}>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid gap-4 sm:grid-cols-2 sm:gap-6"${_scopeId}><div class="sm:col-span-2"${_scopeId}><label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Title:</label>`);
            _push2(ssrRenderComponent(AutocompleteInput, {
              modelValue: unref(form).title,
              "onUpdate:modelValue": ($event) => unref(form).title = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="sm:col-span-2"${_scopeId}><label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Amount:</label><input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).amount)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="expense_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Expense Add Date:</label><input type="date" id="expense_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).expense_date)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="receipt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Receipt:</label><input type="file" id="receipt" name="receipt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><br${_scopeId}>`);
            if (__props.expense && __props.expense.full_receipt_path) {
              _push2(`<a${ssrRenderAttr("href", __props.expense.full_receipt_path)} class="text-white text-lg" target="_blank" title="Receipt" download${_scopeId}>Attached Receipt Link</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="sm:col-span-2 hidden"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><input type="checkbox" id="payable" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).payable) ? ssrLooseContain(unref(form).payable, null) : unref(form).payable) ? " checked" : ""}${_scopeId}><label for="payable" class="dark:text-white text-gray-600"${_scopeId}>Payable By Me</label></div></div><div class="sm:col-span-2"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><input type="checkbox" id="payed" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).payed) ? ssrLooseContain(unref(form).payed, null) : unref(form).payed) ? " checked" : ""}${_scopeId}><label for="payed" class="dark:text-white text-gray-600"${_scopeId}>Paid?</label></div></div><div class="sm:col-span-2"${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Type:</label><div class="flex items-center space-x-2"${_scopeId}><div class="flex items-center mb-4"${_scopeId}><input type="radio" id="one_time" value="One-Time" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "One-Time")) ? " checked" : ""}${_scopeId}><label for="one_time" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>One Time</label></div><div class="flex items-center mb-4"${_scopeId}><input type="radio" id="recurring" value="Recurring-Payment" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "Recurring-Payment")) ? " checked" : ""}${_scopeId}><label for="recurring" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"${_scopeId}>Recurring Payment</label></div></div></div><div class="sm:col-span-2"${_scopeId}><label for="expense_month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Expense Month:</label><select id="expense_month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value="1"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "1") : ssrLooseEqual(unref(form).expense_month, "1")) ? " selected" : ""}${_scopeId}>January</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "2") : ssrLooseEqual(unref(form).expense_month, "2")) ? " selected" : ""}${_scopeId}>February</option><option value="3"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "3") : ssrLooseEqual(unref(form).expense_month, "3")) ? " selected" : ""}${_scopeId}>March</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "4") : ssrLooseEqual(unref(form).expense_month, "4")) ? " selected" : ""}${_scopeId}>April</option><option value="5"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "5") : ssrLooseEqual(unref(form).expense_month, "5")) ? " selected" : ""}${_scopeId}>May</option><option value="6"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "6") : ssrLooseEqual(unref(form).expense_month, "6")) ? " selected" : ""}${_scopeId}>June</option><option value="7"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "7") : ssrLooseEqual(unref(form).expense_month, "7")) ? " selected" : ""}${_scopeId}>July</option><option value="8"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "8") : ssrLooseEqual(unref(form).expense_month, "8")) ? " selected" : ""}${_scopeId}>August</option><option value="9"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "9") : ssrLooseEqual(unref(form).expense_month, "9")) ? " selected" : ""}${_scopeId}>September</option><option value="10"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "10") : ssrLooseEqual(unref(form).expense_month, "10")) ? " selected" : ""}${_scopeId}>October</option><option value="11"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "11") : ssrLooseEqual(unref(form).expense_month, "11")) ? " selected" : ""}${_scopeId}>November</option><option value="12"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_month) ? ssrLooseContain(unref(form).expense_month, "12") : ssrLooseEqual(unref(form).expense_month, "12")) ? " selected" : ""}${_scopeId}>December</option></select></div><div class="sm:col-span-2"${_scopeId}><label for="expense_year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Expense Year:</label><select id="expense_year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value="2024"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2024") : ssrLooseEqual(unref(form).expense_year, "2024")) ? " selected" : ""}${_scopeId}>2024</option><option value="2025"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2025") : ssrLooseEqual(unref(form).expense_year, "2025")) ? " selected" : ""}${_scopeId}>2025</option><option value="2026"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2026") : ssrLooseEqual(unref(form).expense_year, "2026")) ? " selected" : ""}${_scopeId}>2026</option><option value="2027"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2027") : ssrLooseEqual(unref(form).expense_year, "2027")) ? " selected" : ""}${_scopeId}>2027</option><option value="2028"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2028") : ssrLooseEqual(unref(form).expense_year, "2028")) ? " selected" : ""}${_scopeId}>2028</option><option value="2029"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2029") : ssrLooseEqual(unref(form).expense_year, "2029")) ? " selected" : ""}${_scopeId}>2029</option><option value="2030"${ssrIncludeBooleanAttr(Array.isArray(unref(form).expense_year) ? ssrLooseContain(unref(form).expense_year, "2030") : ssrLooseEqual(unref(form).expense_year, "2030")) ? " selected" : ""}${_scopeId}>2030</option></select></div><div class="sm:col-span-2"${_scopeId}><label for="shared" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Share with Others:</label><select id="shared" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value="" selected disabled${_scopeId}>Select User to Share</option><!--[-->`);
            ssrRenderList(__props.users, (user) => {
              _push2(`<option${ssrRenderAttr("value", user.id)}${_scopeId}>${ssrInterpolate(user.name)} - (${ssrInterpolate(user.email)})</option>`);
            });
            _push2(`<!--]--></select></div></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit"${_scopeId}>Save</button></form></div></section></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("section", { class: "bg-white dark:bg-gray-900" }, [
                    createVNode("div", { class: "py-8 px-4 mx-auto max-w-2xl" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-md mx-auto",
                        enctype: "multipart/form-data"
                      }, [
                        unref(form).progress ? (openBlock(), createBlock("progress", {
                          key: 0,
                          value: unref(form).progress.percentage,
                          max: "100"
                        }, toDisplayString(unref(form).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true),
                        createVNode("div", { class: "grid gap-4 sm:grid-cols-2 sm:gap-6" }, [
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "title",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Title:"),
                            createVNode(AutocompleteInput, {
                              modelValue: unref(form).title,
                              "onUpdate:modelValue": ($event) => unref(form).title = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "amount",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Amount:"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              id: "amount",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).amount = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).amount]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "expense_date",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Expense Add Date:"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              id: "expense_date",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).expense_date = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).expense_date]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "receipt",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Receipt:"),
                            createVNode("input", {
                              type: "file",
                              id: "receipt",
                              name: "receipt",
                              onInput: ($event) => unref(form).receipt = $event.target.files[0],
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            }, null, 40, ["onInput"]),
                            createVNode("br"),
                            __props.expense && __props.expense.full_receipt_path ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: __props.expense.full_receipt_path,
                              class: "text-white text-lg",
                              target: "_blank",
                              title: "Receipt",
                              download: ""
                            }, "Attached Receipt Link", 8, ["href"])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "sm:col-span-2 hidden" }, [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                id: "payable",
                                class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2",
                                "onUpdate:modelValue": ($event) => unref(form).payable = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).payable]
                              ]),
                              createVNode("label", {
                                for: "payable",
                                class: "dark:text-white text-gray-600"
                              }, "Payable By Me")
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                id: "payed",
                                class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2",
                                "onUpdate:modelValue": ($event) => unref(form).payed = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).payed]
                              ]),
                              createVNode("label", {
                                for: "payed",
                                class: "dark:text-white text-gray-600"
                              }, "Paid?")
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white" }, "Type:"),
                            createVNode("div", { class: "flex items-center space-x-2" }, [
                              createVNode("div", { class: "flex items-center mb-4" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  id: "one_time",
                                  value: "One-Time",
                                  class: "w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                                  "onUpdate:modelValue": ($event) => unref(form).type = $event
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).type]
                                ]),
                                createVNode("label", {
                                  for: "one_time",
                                  class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                }, "One Time")
                              ]),
                              createVNode("div", { class: "flex items-center mb-4" }, [
                                withDirectives(createVNode("input", {
                                  type: "radio",
                                  id: "recurring",
                                  value: "Recurring-Payment",
                                  class: "w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                                  "onUpdate:modelValue": ($event) => unref(form).type = $event
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [vModelRadio, unref(form).type]
                                ]),
                                createVNode("label", {
                                  for: "recurring",
                                  class: "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                }, "Recurring Payment")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "expense_month",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Expense Month:"),
                            withDirectives(createVNode("select", {
                              id: "expense_month",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).expense_month = $event
                            }, [
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
                              [vModelSelect, unref(form).expense_month]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "expense_year",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Expense Year:"),
                            withDirectives(createVNode("select", {
                              id: "expense_year",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).expense_year = $event
                            }, [
                              createVNode("option", { value: "2024" }, "2024"),
                              createVNode("option", { value: "2025" }, "2025"),
                              createVNode("option", { value: "2026" }, "2026"),
                              createVNode("option", { value: "2027" }, "2027"),
                              createVNode("option", { value: "2028" }, "2028"),
                              createVNode("option", { value: "2029" }, "2029"),
                              createVNode("option", { value: "2030" }, "2030")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).expense_year]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "shared",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Share with Others:"),
                            withDirectives(createVNode("select", {
                              id: "shared",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).shared = $event
                            }, [
                              createVNode("option", {
                                value: "",
                                selected: "",
                                disabled: ""
                              }, "Select User to Share"),
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                                return openBlock(), createBlock("option", {
                                  value: user.id
                                }, toDisplayString(user.name) + " - (" + toDisplayString(user.email) + ")", 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).shared]
                            ])
                          ])
                        ]),
                        createVNode("button", {
                          disabled: unref(form).processing,
                          class: "inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
                          type: "submit"
                        }, "Save", 8, ["disabled"])
                      ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
