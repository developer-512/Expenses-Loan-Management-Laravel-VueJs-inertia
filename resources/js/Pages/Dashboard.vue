<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { Bar,Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement } from 'chart.js'
import {onMounted, ref} from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale,ArcElement)
const props=defineProps({
        monthlyExpenses: {
            type: Object,
            default: () => {}
        },
        monthlyExpenses_last:{
            type:Object,
            default:()=>{}
        },
    totalPayableLoan: {
            type: Number,
            default: () => 0
        },
    totalReceivableLoan:{
            type:Number,
            default:()=>0
        },
    totalPaidPendingLoan: {
            type: Number,
            default: () => 0
        },
    totalPaidLoan:{
            type:Number,
            default:()=>0
        },
    pendingLoanDetails:{
            type: Object,
            default:()=>{}
    }
});

let monthlyExpenses=Object.keys(props.monthlyExpenses).map((key) => props.monthlyExpenses[key]);
let monthlyExpenses_last=Object.keys(props.monthlyExpenses_last).map((key) => props.monthlyExpenses_last[key]);
// console.log(monthlyExpenses);'
let pendingLoans=[],pendingLoansNames=[];
props.pendingLoanDetails.forEach((pendingLoanDetail) => {
    var pendingLoansName=' From '+pendingLoanDetail.lender.name;
    if(pendingLoanDetail.title){
        pendingLoansName=pendingLoanDetail.title+pendingLoansName;
    }
    pendingLoansNames.push(pendingLoansName);
    pendingLoans.push(pendingLoanDetail.amount-pendingLoanDetail.paid_amount);
})
console.log([pendingLoans,pendingLoansNames])
const date_=new Date();
const chartData = ref({
    labels: [
        "January",  // Index 1
        "February", // Index 2
        "March",    // Index 3
        "April",    // Index 4
        "May",      // Index 5
        "June",     // Index 6
        "July",     // Index 7
        "August",   // Index 8
        "September",// Index 9
        "October",  // Index 10
        "November", // Index 11
        "December" ],
    datasets: [
        {
            label: date_.getFullYear(),
            backgroundColor: '#14b8a6',
            data: monthlyExpenses
        }
        ,{
            label: date_.getFullYear()-1,
            backgroundColor: '#db2777',
            data: monthlyExpenses_last
        }
    ]
})
const chartDataPendingLoans = ref({
    labels: pendingLoansNames,
    datasets: [
        {
            label: 'Pending Loan Amount',
            backgroundColor: '#14b8a6',
            data: pendingLoans
        }
    ]
})
const chartDataLoan = ref({
    labels: ['Total Payable Loan', 'Total Receivable Loan'],
    datasets: [
        {
            backgroundColor: ['#831843', '#115e59'],
            data: [props.totalPayableLoan, props.totalReceivableLoan]
        }
    ],
})
const chartDataLoanPaid = ref({
    labels: ['Total Paid', 'Total Pending'],
    datasets: [
        {
            backgroundColor: ['#5eead4', '#115e59'],
            data: [props.totalPaidLoan, props.totalPaidPendingLoan]
        }
    ],
})

const chartOptions = ref({
    responsive: true
})
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Dashboard & Reports
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"
                >
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <div class="grid grid-cols-1 sm:grid-cols-1">
                            <div class="sm:col-span-2">
                                <h2 class="text-white text-2xl">Monthly Expenses of Year</h2>
                                <Bar
                                    id="expenses-chart"
                                    :options="chartOptions"
                                    :data="chartData"
                                />
                            </div>
                            <div class="sm:col-span-2 mt-5">
                                <div class="grid grid-cols-1 sm:grid-cols-2 mt-5">
                                    <div class="col-span-1">
                                        <h2 class="text-white text-2xl text-center mb-4">Total Loan Details</h2>
                                        <Pie
                                            id="Loan-chart"
                                            :options="chartOptions"
                                            :data="chartDataLoan"
                                        />
                                    </div>
                                    <div class="col-span-1">
                                        <h2 class="text-white text-2xl text-center mb-4">Paid/Unpaid Loans</h2>
                                        <Pie
                                            id="Loan-chart"
                                            :options="chartOptions"
                                            :data="chartDataLoanPaid"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div class="sm:col-span-2">
                                <h2 class="text-white text-2xl text-center mt-10">Pending Loan Details</h2>
                                <Bar
                                    id="expenses-chart"
                                    :options="chartOptions"
                                    :data="chartDataPendingLoans"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
