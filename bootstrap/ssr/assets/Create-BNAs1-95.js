import { onMounted, unref, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, Fragment, renderList, vModelSelect, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, usePage, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-pO85wtcF.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  props: {
    loan: {
      type: Object,
      default: null
    },
    users: {
      type: Array,
      default: () => []
    },
    LoanTaker: {
      type: Boolean,
      default: false
    },
    loan_statuses: {
      type: Array,
      default: () => [
        "Unpaid",
        "Paying",
        "Paid"
      ]
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
      lender: "",
      borrower: "",
      loan_date: date,
      amount: 0,
      paid_amount: 0,
      payment_date: "",
      status: "Unpaid",
      type: props.LoanTaker
    });
    console.log(props);
    const page = usePage();
    const submit = () => props.isUpdating ? updateLoan() : addLoan();
    const addLoan = () => form.post(route("loans.store"));
    const updateLoan = () => form.put(route("loans.update", props.loan.id));
    onMounted(() => {
      if (props.loan) {
        props.loan.lender == page.props.auth.user.id;
        form.lender = props.loan.lender.id || "";
        form.borrower = props.loan.borrower.id || "";
        form.amount = props.loan.amount || "";
        form.loan_date = props.loan.loan_date || date;
        form.payment_date = props.loan.payment_date || date;
        form.paid_amount = props.loan.paid_amount || 0;
        form.status = props.loan.status || "Unpaid";
        form.type = props.loan.lender == page.props.auth.user.id || props.LoanTaker;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Loans Create Form" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Add New Loan </h2>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.index"),
              class: "text-gray-800 dark:text-sky-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Back to All Loans`);
                } else {
                  return [
                    createTextVNode("Back to All Loans")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 sm:grid-cols-2 text-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.create"),
              class: ["text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center", { "  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800": !__props.LoanTaker }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Giving Loan`);
                } else {
                  return [
                    createTextVNode("Giving Loan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.create") + "?loan_taking=true",
              class: ["text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center", { "  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800": __props.LoanTaker }]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Taking Loan`);
                } else {
                  return [
                    createTextVNode("Taking Loan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Add New Loan "),
                createVNode(unref(Link), {
                  href: _ctx.route("loans.index"),
                  class: "text-gray-800 dark:text-sky-50"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Back to All Loans")
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 text-center" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("loans.create"),
                  class: ["text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center", { "  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800": !__props.LoanTaker }]
                }, {
                  default: withCtx(() => [
                    createTextVNode("Giving Loan")
                  ]),
                  _: 1
                }, 8, ["href", "class"]),
                createVNode(unref(Link), {
                  href: _ctx.route("loans.create") + "?loan_taking=true",
                  class: ["text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center", { "  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800": __props.LoanTaker }]
                }, {
                  default: withCtx(() => [
                    createTextVNode("Taking Loan")
                  ]),
                  _: 1
                }, 8, ["href", "class"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><section class="bg-white dark:bg-gray-900"${_scopeId}><div class="py-8 px-4 mx-auto max-w-2xl"${_scopeId}><form class="max-w-md mx-auto"${_scopeId}>`);
            if (unref(form).progress) {
              _push2(`<progress${ssrRenderAttr("value", unref(form).progress.percentage)} max="100"${_scopeId}>${ssrInterpolate(unref(form).progress.percentage)}% </progress>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="grid gap-4 sm:grid-cols-2 sm:gap-6"${_scopeId}><div class="${ssrRenderClass([{ "hidden": unref(form).lender > 0 }, "sm:col-span-2"])}"${_scopeId}><div class=""${_scopeId}><input type="hidden" name="type"${ssrRenderAttr("value", __props.LoanTaker ? 1 : 0)}${_scopeId}></div></div><div class="${ssrRenderClass([{ "hidden": __props.loan }, "sm:col-span-2"])}"${_scopeId}>`);
            if (!__props.LoanTaker) {
              _push2(`<div class="sm:col-span-2"${_scopeId}><label for="borrower" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Loan taker from you:</label><select id="borrower" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><!--[-->`);
              ssrRenderList(__props.users, (user) => {
                _push2(`<option${ssrRenderAttr("value", user.id)}${_scopeId}>${ssrInterpolate(user.name)}</option>`);
              });
              _push2(`<!--]--></select><input type="hidden" name="lender"${ssrRenderAttr("value", _ctx.$page.props.auth.user.id)}${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.LoanTaker) {
              _push2(`<div class="sm:col-span-2"${_scopeId}><label for="lender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>You taking loan from:</label><select id="lender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><!--[-->`);
              ssrRenderList(__props.users, (user) => {
                _push2(`<option${ssrRenderAttr("value", user.id)}${_scopeId}>${ssrInterpolate(user.name)}</option>`);
              });
              _push2(`<!--]--></select><input type="hidden" name="borrower"${ssrRenderAttr("value", _ctx.$page.props.auth.user.id)}${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (__props.loan) {
              _push2(`<div class="sm:col-span-2 text-2xl text-center text-white"${_scopeId}>`);
              if (unref(form).lender != _ctx.$page.props.auth.user.id) {
                _push2(`<h3 class=""${_scopeId}> You Took This Loan From <strong${_scopeId}>${ssrInterpolate(__props.loan.lender.name)}</strong></h3>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(form).lender == _ctx.$page.props.auth.user.id) {
                _push2(`<h3${_scopeId}>${ssrInterpolate(__props.loan.borrower.name)} Took This Loan From You </h3>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="sm:col-span-2"${_scopeId}><label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Amount:</label><input type="number" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).amount)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="loan_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Loan Date:</label><input type="date" id="loan_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).loan_date)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="paid_amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Paid Amount:</label><input type="number" id="paid_amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).paid_amount)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="payment_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Loan Payment Date:</label><input type="date" id="payment_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${ssrRenderAttr("value", unref(form).payment_date)}${_scopeId}></div><div class="sm:col-span-2"${_scopeId}><label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Loan Status:</label><select id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><!--[-->`);
            ssrRenderList(__props.loan_statuses, (loan_status) => {
              _push2(`<option${ssrRenderAttr("value", loan_status)}${_scopeId}>${ssrInterpolate(loan_status)}</option>`);
            });
            _push2(`<!--]--></select></div></div><button${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""} class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit"${_scopeId}>Save</button></form></div></section></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("section", { class: "bg-white dark:bg-gray-900" }, [
                    createVNode("div", { class: "py-8 px-4 mx-auto max-w-2xl" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(submit, ["prevent"]),
                        class: "max-w-md mx-auto"
                      }, [
                        unref(form).progress ? (openBlock(), createBlock("progress", {
                          key: 0,
                          value: unref(form).progress.percentage,
                          max: "100"
                        }, toDisplayString(unref(form).progress.percentage) + "% ", 9, ["value"])) : createCommentVNode("", true),
                        createVNode("div", { class: "grid gap-4 sm:grid-cols-2 sm:gap-6" }, [
                          createVNode("div", {
                            class: ["sm:col-span-2", { "hidden": unref(form).lender > 0 }]
                          }, [
                            createVNode("div", { class: "" }, [
                              createVNode("input", {
                                type: "hidden",
                                name: "type",
                                value: __props.LoanTaker ? 1 : 0
                              }, null, 8, ["value"])
                            ])
                          ], 2),
                          createVNode("div", {
                            class: ["sm:col-span-2", { "hidden": __props.loan }]
                          }, [
                            !__props.LoanTaker ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "sm:col-span-2"
                            }, [
                              createVNode("label", {
                                for: "borrower",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              }, "Loan taker from you:"),
                              withDirectives(createVNode("select", {
                                id: "borrower",
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                "onUpdate:modelValue": ($event) => unref(form).borrower = $event
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                                  return openBlock(), createBlock("option", {
                                    value: user.id
                                  }, toDisplayString(user.name), 9, ["value"]);
                                }), 256))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(form).borrower]
                              ]),
                              createVNode("input", {
                                type: "hidden",
                                name: "lender",
                                value: _ctx.$page.props.auth.user.id
                              }, null, 8, ["value"])
                            ])) : createCommentVNode("", true),
                            __props.LoanTaker ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "sm:col-span-2"
                            }, [
                              createVNode("label", {
                                for: "lender",
                                class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              }, "You taking loan from:"),
                              withDirectives(createVNode("select", {
                                id: "lender",
                                class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                                "onUpdate:modelValue": ($event) => unref(form).lender = $event
                              }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.users, (user) => {
                                  return openBlock(), createBlock("option", {
                                    value: user.id
                                  }, toDisplayString(user.name), 9, ["value"]);
                                }), 256))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(form).lender]
                              ]),
                              createVNode("input", {
                                type: "hidden",
                                name: "borrower",
                                value: _ctx.$page.props.auth.user.id
                              }, null, 8, ["value"])
                            ])) : createCommentVNode("", true)
                          ], 2),
                          __props.loan ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "sm:col-span-2 text-2xl text-center text-white"
                          }, [
                            unref(form).lender != _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("h3", {
                              key: 0,
                              class: ""
                            }, [
                              createTextVNode(" You Took This Loan From "),
                              createVNode("strong", null, toDisplayString(__props.loan.lender.name), 1)
                            ])) : createCommentVNode("", true),
                            unref(form).lender == _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("h3", { key: 1 }, toDisplayString(__props.loan.borrower.name) + " Took This Loan From You ", 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
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
                              for: "loan_date",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Loan Date:"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              id: "loan_date",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).loan_date = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).loan_date]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "paid_amount",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Paid Amount:"),
                            withDirectives(createVNode("input", {
                              type: "number",
                              id: "paid_amount",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).paid_amount = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).paid_amount]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "payment_date",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Loan Payment Date:"),
                            withDirectives(createVNode("input", {
                              type: "date",
                              id: "payment_date",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).payment_date = $event
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(form).payment_date]
                            ])
                          ]),
                          createVNode("div", { class: "sm:col-span-2" }, [
                            createVNode("label", {
                              for: "status",
                              class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            }, "Loan Status:"),
                            withDirectives(createVNode("select", {
                              id: "status",
                              class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                              "onUpdate:modelValue": ($event) => unref(form).status = $event
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.loan_statuses, (loan_status) => {
                                return openBlock(), createBlock("option", { value: loan_status }, toDisplayString(loan_status), 9, ["value"]);
                              }), 256))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).status]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Loans/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
