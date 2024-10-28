import { ref, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-pO85wtcF.js";
import { Head } from "@inertiajs/vue3";
import { Bar, Pie } from "vue-chartjs";
import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from "chart.js";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    monthlyExpenses: {
      type: Object,
      default: () => {
      }
    },
    monthlyExpenses_last: {
      type: Object,
      default: () => {
      }
    },
    totalPayableLoan: {
      type: Number,
      default: () => 0
    },
    totalReceivableLoan: {
      type: Number,
      default: () => 0
    },
    totalPaidPendingLoan: {
      type: Number,
      default: () => 0
    },
    totalPaidLoan: {
      type: Number,
      default: () => 0
    },
    pendingLoanDetails: {
      type: Object,
      default: () => {
      }
    }
  },
  setup(__props) {
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);
    const props = __props;
    let monthlyExpenses = Object.keys(props.monthlyExpenses).map((key) => props.monthlyExpenses[key]);
    let monthlyExpenses_last = Object.keys(props.monthlyExpenses_last).map((key) => props.monthlyExpenses_last[key]);
    let pendingLoans = [], pendingLoansNames = [];
    props.pendingLoanDetails.forEach((pendingLoanDetail) => {
      pendingLoansNames.push(pendingLoanDetail.lender.name);
      pendingLoans.push(pendingLoanDetail.amount - pendingLoanDetail.paid_amount);
    });
    console.log([pendingLoans, pendingLoansNames]);
    const date_ = /* @__PURE__ */ new Date();
    const chartData = ref({
      labels: [
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
      ],
      datasets: [
        {
          label: date_.getFullYear(),
          backgroundColor: "#14b8a6",
          data: monthlyExpenses
        },
        {
          label: date_.getFullYear() - 1,
          backgroundColor: "#db2777",
          data: monthlyExpenses_last
        }
      ]
    });
    const chartDataPendingLoans = ref({
      labels: pendingLoansNames,
      datasets: [
        {
          label: "Pending Loan Amount",
          backgroundColor: "#14b8a6",
          data: pendingLoans
        }
      ]
    });
    const chartDataLoan = ref({
      labels: ["Total Payable Loan", "Total Receivable Loan"],
      datasets: [
        {
          backgroundColor: ["#831843", "#115e59"],
          data: [props.totalPayableLoan, props.totalReceivableLoan]
        }
      ]
    });
    const chartDataLoanPaid = ref({
      labels: ["Total Paid", "Total Pending"],
      datasets: [
        {
          backgroundColor: ["#5eead4", "#115e59"],
          data: [props.totalPaidLoan, props.totalPaidPendingLoan]
        }
      ]
    });
    const chartOptions = ref({
      responsive: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"${_scopeId}> Dashboard &amp; Reports </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200" }, " Dashboard & Reports ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"${_scopeId}><div class="p-6 text-gray-900 dark:text-gray-100"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-1"${_scopeId}><div class="sm:col-span-2"${_scopeId}><h2 class="text-white text-2xl"${_scopeId}>Monthly Expenses of Year</h2>`);
            _push2(ssrRenderComponent(unref(Bar), {
              id: "expenses-chart",
              options: chartOptions.value,
              data: chartData.value
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="sm:col-span-2 mt-5"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 mt-5"${_scopeId}><div class="col-span-1"${_scopeId}><h2 class="text-white text-2xl text-center mb-4"${_scopeId}>Total Loan Details</h2>`);
            _push2(ssrRenderComponent(unref(Pie), {
              id: "Loan-chart",
              options: chartOptions.value,
              data: chartDataLoan.value
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-1"${_scopeId}><h2 class="text-white text-2xl text-center mb-4"${_scopeId}>Paid/Received Loans</h2>`);
            _push2(ssrRenderComponent(unref(Pie), {
              id: "Loan-chart",
              options: chartOptions.value,
              data: chartDataLoanPaid.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="sm:col-span-2"${_scopeId}><h2 class="text-white text-2xl text-center mt-10"${_scopeId}>Pending Loan Details</h2>`);
            _push2(ssrRenderComponent(unref(Bar), {
              id: "expenses-chart",
              options: chartOptions.value,
              data: chartDataPendingLoans.value
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800" }, [
                    createVNode("div", { class: "p-6 text-gray-900 dark:text-gray-100" }, [
                      createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-1" }, [
                        createVNode("div", { class: "sm:col-span-2" }, [
                          createVNode("h2", { class: "text-white text-2xl" }, "Monthly Expenses of Year"),
                          createVNode(unref(Bar), {
                            id: "expenses-chart",
                            options: chartOptions.value,
                            data: chartData.value
                          }, null, 8, ["options", "data"])
                        ]),
                        createVNode("div", { class: "sm:col-span-2 mt-5" }, [
                          createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 mt-5" }, [
                            createVNode("div", { class: "col-span-1" }, [
                              createVNode("h2", { class: "text-white text-2xl text-center mb-4" }, "Total Loan Details"),
                              createVNode(unref(Pie), {
                                id: "Loan-chart",
                                options: chartOptions.value,
                                data: chartDataLoan.value
                              }, null, 8, ["options", "data"])
                            ]),
                            createVNode("div", { class: "col-span-1" }, [
                              createVNode("h2", { class: "text-white text-2xl text-center mb-4" }, "Paid/Received Loans"),
                              createVNode(unref(Pie), {
                                id: "Loan-chart",
                                options: chartOptions.value,
                                data: chartDataLoanPaid.value
                              }, null, 8, ["options", "data"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "sm:col-span-2" }, [
                          createVNode("h2", { class: "text-white text-2xl text-center mt-10" }, "Pending Loan Details"),
                          createVNode(unref(Bar), {
                            id: "expenses-chart",
                            options: chartOptions.value,
                            data: chartDataPendingLoans.value
                          }, null, 8, ["options", "data"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
