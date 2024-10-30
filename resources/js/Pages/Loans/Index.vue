<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head,Link,useForm } from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import {onMounted} from "vue";

const props=defineProps({
    loans: {
        type: Object,
        default: () => [],
    },
    months:{
        type:Array,
        default: ["January",  // Index 0 (can be ignored or handled separately if you start from 1)
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
            "December"  // Index 12
         ],
    },
    search:{
        type: Object,
        default: () => {}
    },
    is_Searching:{
        type: Boolean,
        default: false,
    }
});
console.log(props.loans);
const form = useForm({});
const paidForm = useForm({});
const searchForm = useForm({
    search_query:'',
    loan_status:'',
    receivable_loans:'',
    all_loans:'',
    my_loans:''
});
onMounted(()=> {
    if (props.search) {
        searchForm.search_query=props.search.search_query || '';
        searchForm.loan_status=props.search.loan_status||'';
        searchForm.receivable_loans=props.search.receivable_loans||'';
        searchForm.all_loans=props.search.all_loans||'';
        searchForm.my_loans=props.search.my_loans||'';
    }
});
const submit = () => searchForm.get(route('loans.index'));
const deleteLoan =  (id) => {
    if(confirm("Do you really want to delete?")) {
        form.delete(`loans/${id}`);
    }
}
const updatePayed = (id) => {
    paidForm.patch(`loans/${id}/payed`, {
        preserveScroll: true, // optional: prevent the page from scrolling when the form updates
        onSuccess: (response) => {
            /*const updatedLoan = response.props.loan; // or the relevant object from the server response
            const loanIndex = props.loans.findIndex(loan => loan.id === id);
            if (loanIndex !== -1) {
                props.loans[loanIndex].payed = updatedLoan.payed; // Update the local data
            }*/
            console.log(`Payed status updated for loan ID: ${id}`);
        },
        onError: (errors) => {
            console.error(`Error updating payed status for loan ID: ${id}`, errors);
        }
    });
};
const headers = ["Title", "Amount","Loan Month" ,"Payable" ,"Payed","Loan Type" ,"Actions"];
</script>

<template>
    <Head title="Loans" />
    <AuthenticatedLayout>
        <template #header>

            <div class="flex items-center justify-between">
                <h2
                    class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
                >
                    Loans
                </h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 space-x-0  md:space-x-2 w-full text-center mt-4">
                <Link :href="route('loans.index')+'?my_loans=true'" class=" w-auto inline-flex justify-between items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800">
                    Loans I need to Pay <span v-if="searchForm.my_loans">&#10136;</span></Link>
                <Link :href="route('loans.index')+'?receivable_loans=true'" class="w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800">
                    Loans I gave <span v-if="searchForm.receivable_loans">&#10136;</span></Link>
                <Link :href="route('loans.index')+'?all_loans=true'" class="w-auto  inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
                    All Loans <span v-if="searchForm.all_loans">&#10136;</span></Link>
                <Link :href="route('loans.create')" class="w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add New Loan</Link>
            </div>
            <div class="w-full mt-4">
                <div class="">
                    <form @submit.prevent="submit" class=" mx-auto">
                        <input type="hidden" v-if="searchForm.all_loans" v-model="searchForm.all_loans" name="all_loans">
                        <input type="hidden" v-if="searchForm.receivable_loans" v-model="searchForm.receivable_loans" name="receivable_loans">
                        <input type="hidden" v-if="searchForm.my_loans" v-model="searchForm.my_loans" name="receivable_loans">
                        <div class="w-full flex items-center space-x-5">
                            <input type="text" v-model="searchForm.search_query"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Search by loan title/amount" />
                            <select id="loan_status"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="searchForm.loan_status">
                                <option value="">Select Status to Filter</option>
                                <option value="Unpaid">Unpaid</option>
                                <option value="Paying">Paying</option>
                                <option value="Paid">Paid</option>
                            </select>
<!--                            <select id="loan_year"-->
<!--                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"-->
<!--                                    v-model="searchForm.search_loan_year">-->
<!--                                <option value="0">Select Year To Search</option>-->
<!--                                <option value="2024">2024</option>-->
<!--                                <option value="2025">2025</option>-->
<!--                                <option value="2026">2026</option>-->
<!--                                <option value="2027">2027</option>-->
<!--                                <option value="2028">2028</option>-->
<!--                                <option value="2029">2029</option>-->
<!--                                <option value="2030">2030</option>-->
<!--                            </select>-->
                            <button :disabled="searchForm.processing"
                                    class="inline-flex items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                    type="submit">Search</button>
                            <span v-if="is_Searching">
                                            <button
                                                class="inline-flex items-center px-5 py-2.5   text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800"
                                                @click="searchForm.reset('search_query','search_loan_year','search_loan_month')"
                                            >Clear</button>
                                        </span>
                        </div>
                    </form>
                </div>
            </div>
        </template>
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-700"
                >
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
<!--                                    <th v-for="header in headers" :key="header">-->
<!--                                        {{ header }}-->
<!--                                    </th>-->
                                    <th scope="col" class="px-6 py-3">
                                        Payable to/<br>Receivable from
                                    </th>
                                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                         Amount
                                    </th>
                                    <th  scope="col" class="px-6 py-3 hidden md:table-cell">
                                        Loan Date
                                    </th>
<!--                                    <th class="hidden md:table-cell">-->
<!--                                        Payable-->
<!--                                    </th>-->
                                    <th  scope="col" class="px-6 py-3 hidden md:table-cell">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                        Payment Details
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="loan in loans.data" :key="loan.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        <span v-if="loan.title">
                                            Title: {{loan.title}}<br>
                                        </span>
                                        <span v-if="loan.lender.id!=$page.props.auth.user.id">
                                            You Took This Loan From <strong>{{loan.lender.name}}</strong>
                                        </span>
                                        <span v-if="loan.lender.id==$page.props.auth.user.id">
                                            <strong>{{loan.borrower.name}}</strong> Took This Loan From You
                                        </span>
                                    <span class="w-5 sm:hidden px-6 py-4">
                                        <br>
                                        Amount: PKR <strong>{{ loan.amount }}</strong><br>
                                        On: {{ loan.loan_date }}<br>
                                        Status: <strong>{{ loan.status }}</strong><br>
                                         Paid Amount:{{loan.paid_amount}}
                                         {{loan.payment_date}}
                                    </span>

                                    </td>
                                    <td class="hidden md:table-cell px-6 py-4">PKR {{ loan.amount }}</td>
                                    <td  class="hidden md:table-cell px-6 py-4">
                                     {{ loan.loan_date }}
                                    </td>
                                    <td  class="hidden md:table-cell px-6 py-4">
                                        {{ loan.status }}
                                    </td>
                                     <td class="hidden md:table-cell px-6 py-4">
                                         Paid Amount:{{loan.paid_amount}}<br>
                                         {{loan.payment_date}}
                                     </td>
                                    <td class="px-6 py-4"><button @click="deleteLoan(loan.id)" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4">Delete</button>
                                        &nbsp;&nbsp;<Link :href="route('loans.edit',loan.id)" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4">Edit</Link></td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <Pagination :pagination="loans" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
