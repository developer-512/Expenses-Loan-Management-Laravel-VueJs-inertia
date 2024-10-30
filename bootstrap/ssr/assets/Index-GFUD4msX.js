import { onMounted, unref, withCtx, createTextVNode, openBlock, createBlock, createCommentVNode, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-pO85wtcF.js";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Pagination-DonOke2s.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    loans: {
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
    console.log(props.loans);
    const form = useForm({});
    useForm({});
    const searchForm = useForm({
      search_query: "",
      loan_status: "",
      receivable_loans: "",
      all_loans: "",
      my_loans: ""
    });
    onMounted(() => {
      if (props.search) {
        searchForm.search_query = props.search.search_query || "";
        searchForm.loan_status = props.search.loan_status || "";
        searchForm.receivable_loans = props.search.receivable_loans || "";
        searchForm.all_loans = props.search.all_loans || "";
        searchForm.my_loans = props.search.my_loans || "";
      }
    });
    const submit = () => searchForm.get(route("loans.index"));
    const deleteLoan = (id) => {
      if (confirm("Do you really want to delete?")) {
        form.delete(`loans/${id}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Loans" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Loans </h2></div><div class="grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-2 w-full text-center mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.index") + "?my_loans=true",
              class: "w-auto inline-flex justify-between items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Loans I need to Pay `);
                  if (unref(searchForm).my_loans) {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" Loans I need to Pay "),
                    unref(searchForm).my_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.index") + "?receivable_loans=true",
              class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Loans I gave `);
                  if (unref(searchForm).receivable_loans) {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" Loans I gave "),
                    unref(searchForm).receivable_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.index") + "?all_loans=true",
              class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` All Loans `);
                  if (unref(searchForm).all_loans) {
                    _push3(`<span${_scopeId2}>➘</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createTextVNode(" All Loans "),
                    unref(searchForm).all_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("loans.create"),
              class: "w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Add New Loan`);
                } else {
                  return [
                    createTextVNode("Add New Loan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full mt-4"${_scopeId}><div class=""${_scopeId}><form class="mx-auto"${_scopeId}>`);
            if (unref(searchForm).all_loans) {
              _push2(`<input type="hidden"${ssrRenderAttr("value", unref(searchForm).all_loans)} name="all_loans"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(searchForm).receivable_loans) {
              _push2(`<input type="hidden"${ssrRenderAttr("value", unref(searchForm).receivable_loans)} name="receivable_loans"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(searchForm).my_loans) {
              _push2(`<input type="hidden"${ssrRenderAttr("value", unref(searchForm).my_loans)} name="receivable_loans"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full flex items-center space-x-5"${_scopeId}><input type="text"${ssrRenderAttr("value", unref(searchForm).search_query)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search by loan title/amount"${_scopeId}><select id="loan_status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).loan_status) ? ssrLooseContain(unref(searchForm).loan_status, "") : ssrLooseEqual(unref(searchForm).loan_status, "")) ? " selected" : ""}${_scopeId}>Select Status to Filter</option><option value="Unpaid"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).loan_status) ? ssrLooseContain(unref(searchForm).loan_status, "Unpaid") : ssrLooseEqual(unref(searchForm).loan_status, "Unpaid")) ? " selected" : ""}${_scopeId}>Unpaid</option><option value="Paying"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).loan_status) ? ssrLooseContain(unref(searchForm).loan_status, "Paying") : ssrLooseEqual(unref(searchForm).loan_status, "Paying")) ? " selected" : ""}${_scopeId}>Paying</option><option value="Paid"${ssrIncludeBooleanAttr(Array.isArray(unref(searchForm).loan_status) ? ssrLooseContain(unref(searchForm).loan_status, "Paid") : ssrLooseEqual(unref(searchForm).loan_status, "Paid")) ? " selected" : ""}${_scopeId}>Paid</option></select><button${ssrIncludeBooleanAttr(unref(searchForm).processing) ? " disabled" : ""} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit"${_scopeId}>Search</button>`);
            if (__props.is_Searching) {
              _push2(`<span${_scopeId}><button class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800"${_scopeId}>Clear</button></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Loans ")
              ]),
              createVNode("div", { class: "grid grid-cols-2 md:grid-cols-4 space-x-0 md:space-x-2 w-full text-center mt-4" }, [
                createVNode(unref(Link), {
                  href: _ctx.route("loans.index") + "?my_loans=true",
                  class: "w-auto inline-flex justify-between items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Loans I need to Pay "),
                    unref(searchForm).my_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("loans.index") + "?receivable_loans=true",
                  class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Loans I gave "),
                    unref(searchForm).receivable_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("loans.index") + "?all_loans=true",
                  class: "w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" All Loans "),
                    unref(searchForm).all_loans ? (openBlock(), createBlock("span", { key: 0 }, "➘")) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(unref(Link), {
                  href: _ctx.route("loans.create"),
                  class: "w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add New Loan")
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
                    unref(searchForm).all_loans ? withDirectives((openBlock(), createBlock("input", {
                      key: 0,
                      type: "hidden",
                      "onUpdate:modelValue": ($event) => unref(searchForm).all_loans = $event,
                      name: "all_loans"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, unref(searchForm).all_loans]
                    ]) : createCommentVNode("", true),
                    unref(searchForm).receivable_loans ? withDirectives((openBlock(), createBlock("input", {
                      key: 1,
                      type: "hidden",
                      "onUpdate:modelValue": ($event) => unref(searchForm).receivable_loans = $event,
                      name: "receivable_loans"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, unref(searchForm).receivable_loans]
                    ]) : createCommentVNode("", true),
                    unref(searchForm).my_loans ? withDirectives((openBlock(), createBlock("input", {
                      key: 2,
                      type: "hidden",
                      "onUpdate:modelValue": ($event) => unref(searchForm).my_loans = $event,
                      name: "receivable_loans"
                    }, null, 8, ["onUpdate:modelValue"])), [
                      [vModelText, unref(searchForm).my_loans]
                    ]) : createCommentVNode("", true),
                    createVNode("div", { class: "w-full flex items-center space-x-5" }, [
                      withDirectives(createVNode("input", {
                        type: "text",
                        "onUpdate:modelValue": ($event) => unref(searchForm).search_query = $event,
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                        placeholder: "Search by loan title/amount"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(searchForm).search_query]
                      ]),
                      withDirectives(createVNode("select", {
                        id: "loan_status",
                        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                        "onUpdate:modelValue": ($event) => unref(searchForm).loan_status = $event
                      }, [
                        createVNode("option", { value: "" }, "Select Status to Filter"),
                        createVNode("option", { value: "Unpaid" }, "Unpaid"),
                        createVNode("option", { value: "Paying" }, "Paying"),
                        createVNode("option", { value: "Paid" }, "Paid")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, unref(searchForm).loan_status]
                      ]),
                      createVNode("button", {
                        disabled: unref(searchForm).processing,
                        class: "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800",
                        type: "submit"
                      }, "Search", 8, ["disabled"]),
                      __props.is_Searching ? (openBlock(), createBlock("span", { key: 0 }, [
                        createVNode("button", {
                          class: "inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800",
                          onClick: ($event) => unref(searchForm).reset("search_query", "search_loan_year", "search_loan_month")
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
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-700"${_scopeId}><div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto"${_scopeId}><div class="inline-block min-w-full shadow rounded-lg overflow-hidden"${_scopeId}><div class="relative overflow-x-auto"${_scopeId}><table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"${_scopeId}><thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3"${_scopeId}> Payable to/<br${_scopeId}>Receivable from </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Amount </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Loan Date </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Status </th><th scope="col" class="px-6 py-3 hidden md:table-cell"${_scopeId}> Payment Details </th><th scope="col" class="px-6 py-3"${_scopeId}> Actions </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.loans.data, (loan) => {
              _push2(`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"${_scopeId}><td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"${_scopeId}>`);
              if (loan.title) {
                _push2(`<span${_scopeId}> Title: ${ssrInterpolate(loan.title)}<br${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              if (loan.lender.id != _ctx.$page.props.auth.user.id) {
                _push2(`<span${_scopeId}> You Took This Loan From <strong${_scopeId}>${ssrInterpolate(loan.lender.name)}</strong></span>`);
              } else {
                _push2(`<!---->`);
              }
              if (loan.lender.id == _ctx.$page.props.auth.user.id) {
                _push2(`<span${_scopeId}><strong${_scopeId}>${ssrInterpolate(loan.borrower.name)}</strong> Took This Loan From You </span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="w-5 sm:hidden px-6 py-4"${_scopeId}><br${_scopeId}> Amount: PKR <strong${_scopeId}>${ssrInterpolate(loan.amount)}</strong><br${_scopeId}> On: ${ssrInterpolate(loan.loan_date)}<br${_scopeId}> Status: <strong${_scopeId}>${ssrInterpolate(loan.status)}</strong><br${_scopeId}> Paid Amount:${ssrInterpolate(loan.paid_amount)} ${ssrInterpolate(loan.payment_date)}</span></td><td class="hidden md:table-cell px-6 py-4"${_scopeId}>PKR ${ssrInterpolate(loan.amount)}</td><td class="hidden md:table-cell px-6 py-4"${_scopeId}>${ssrInterpolate(loan.loan_date)}</td><td class="hidden md:table-cell px-6 py-4"${_scopeId}>${ssrInterpolate(loan.status)}</td><td class="hidden md:table-cell px-6 py-4"${_scopeId}> Paid Amount:${ssrInterpolate(loan.paid_amount)}<br${_scopeId}> ${ssrInterpolate(loan.payment_date)}</td><td class="px-6 py-4"${_scopeId}><button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4"${_scopeId}>Delete</button>   `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("loans.edit", loan.id),
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
            _push2(ssrRenderComponent(_sfc_main$2, { pagination: __props.loans }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
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
                                }, [
                                  createTextVNode(" Payable to/"),
                                  createVNode("br"),
                                  createTextVNode("Receivable from ")
                                ]),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Amount "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Loan Date "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Status "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 hidden md:table-cell"
                                }, " Payment Details "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3"
                                }, " Actions ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(__props.loans.data, (loan) => {
                                return openBlock(), createBlock("tr", {
                                  key: loan.id,
                                  class: "bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                }, [
                                  createVNode("td", { class: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" }, [
                                    loan.title ? (openBlock(), createBlock("span", { key: 0 }, [
                                      createTextVNode(" Title: " + toDisplayString(loan.title), 1),
                                      createVNode("br")
                                    ])) : createCommentVNode("", true),
                                    loan.lender.id != _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("span", { key: 1 }, [
                                      createTextVNode(" You Took This Loan From "),
                                      createVNode("strong", null, toDisplayString(loan.lender.name), 1)
                                    ])) : createCommentVNode("", true),
                                    loan.lender.id == _ctx.$page.props.auth.user.id ? (openBlock(), createBlock("span", { key: 2 }, [
                                      createVNode("strong", null, toDisplayString(loan.borrower.name), 1),
                                      createTextVNode(" Took This Loan From You ")
                                    ])) : createCommentVNode("", true),
                                    createVNode("span", { class: "w-5 sm:hidden px-6 py-4" }, [
                                      createVNode("br"),
                                      createTextVNode(" Amount: PKR "),
                                      createVNode("strong", null, toDisplayString(loan.amount), 1),
                                      createVNode("br"),
                                      createTextVNode(" On: " + toDisplayString(loan.loan_date), 1),
                                      createVNode("br"),
                                      createTextVNode(" Status: "),
                                      createVNode("strong", null, toDisplayString(loan.status), 1),
                                      createVNode("br"),
                                      createTextVNode(" Paid Amount:" + toDisplayString(loan.paid_amount) + " " + toDisplayString(loan.payment_date), 1)
                                    ])
                                  ]),
                                  createVNode("td", { class: "hidden md:table-cell px-6 py-4" }, "PKR " + toDisplayString(loan.amount), 1),
                                  createVNode("td", { class: "hidden md:table-cell px-6 py-4" }, toDisplayString(loan.loan_date), 1),
                                  createVNode("td", { class: "hidden md:table-cell px-6 py-4" }, toDisplayString(loan.status), 1),
                                  createVNode("td", { class: "hidden md:table-cell px-6 py-4" }, [
                                    createTextVNode(" Paid Amount:" + toDisplayString(loan.paid_amount), 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(loan.payment_date), 1)
                                  ]),
                                  createVNode("td", { class: "px-6 py-4" }, [
                                    createVNode("button", {
                                      onClick: ($event) => deleteLoan(loan.id),
                                      class: "inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4"
                                    }, "Delete", 8, ["onClick"]),
                                    createTextVNode("   "),
                                    createVNode(unref(Link), {
                                      href: _ctx.route("loans.edit", loan.id),
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
                        createVNode(_sfc_main$2, { pagination: __props.loans }, null, 8, ["pagination"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Loans/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
