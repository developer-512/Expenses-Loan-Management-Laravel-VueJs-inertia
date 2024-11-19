<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {Head,Link,useForm,router } from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import {onMounted} from "vue";
import ImagePopup from "@/Components/ImagePopup.vue";

const props=defineProps({
    expenses: {
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
const checkURL=(url)=> {
    return(url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null);
}
console.log(props.expenses);
const form = useForm({});
const paidForm = useForm({});
const searchForm = useForm({
    search_query:'',
    search_expense_month:0,
    search_expense_year:0,
    shared_expenses:'',
    all_expenses:''
});
onMounted(()=> {
    if (props.search) {
        searchForm.search_query=props.search.search_query || '';
        searchForm.search_expense_month=props.search.search_expense_month||0;
        searchForm.search_expense_year=props.search.search_expense_year||0;
        searchForm.shared_expenses=props.search.shared_expenses||'';
        searchForm.all_expenses=props.search.all_expenses||'';
    }
});
const submit = () => searchForm.get(route('expenses.index'));
const deleteExpense =  (id) => {
    if(confirm("Do you really want to delete?")) {
        form.delete(`expenses/${id}`);
    }
}
const duplicateExpenses=()=>{
  if(confirm("Do you really want to Duplicate current months record to next month?")) {
      router.get(route('expenses.duplicate'));
  }
};
const updatePayed = (id) => {
    paidForm.patch(`expenses/${id}/payed`, {
        preserveScroll: true, // optional: prevent the page from scrolling when the form updates
        onSuccess: (response) => {
            /*const updatedExpense = response.props.expense; // or the relevant object from the server response
            const expenseIndex = props.expenses.findIndex(expense => expense.id === id);
            if (expenseIndex !== -1) {
                props.expenses[expenseIndex].payed = updatedExpense.payed; // Update the local data
            }*/
            console.log(`Payed status updated for expense ID: ${id}`);
        },
        onError: (errors) => {
            console.error(`Error updating payed status for expense ID: ${id}`, errors);
        }
    });
};
const headers = ["Title", "Amount","Expense Month" ,"Payable" ,"Payed","Expense Type" ,"Actions"];
</script>

<template>
    <Head title="Expenses" />
    <AuthenticatedLayout>
        <template #header>

            <div class="flex items-center justify-between">
                <h2
                    class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
                >
                    Expenses
                </h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 space-x-0  md:space-x-2 w-full text-center mt-4">
                <Link :href="route('expenses.index')" class=" w-auto justify-between inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 dark:focus:ring-violet-900 hover:bg-violet-800">
                    My Expenses<span v-if="searchForm.shared_expenses==''&&searchForm.all_expenses==''">&#10136;</span></Link>
                <Link :href="route('expenses.index')+'?shared_expenses=true'" class="w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800">
                    Shared Expenses<span v-if="searchForm.shared_expenses">&#10136;</span></Link>
                <Link :href="route('expenses.index')+'?all_expenses=true'" class="w-auto  inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-teal-700 rounded-lg focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-900 hover:bg-teal-800">
                    All Expenses<span v-if="searchForm.all_expenses">&#10136;</span></Link>
                <Link :href="route('expenses.create')" class="w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add New Expense</Link>
            </div>
            <div class="w-full mt-4">
                <div class="">
                    <form @submit.prevent="submit" class=" mx-auto">
                        <input type="hidden" v-if="searchForm.all_expenses" v-model="searchForm.all_expenses" name="all_expenses">
                        <input type="hidden" v-if="searchForm.shared_expenses" v-model="searchForm.shared_expenses" name="shared_expenses">
                        <div class="w-full flex items-center space-x-5">
                            <input type="text" v-model="searchForm.search_query"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                   placeholder="Search by expense title/amount" />
                            <select id="expense_month"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="searchForm.search_expense_month">
                                <option value="0">Select Month To Search</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select id="expense_year"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    v-model="searchForm.search_expense_year">
                                <option value="0">Select Year To Search</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                            <button :disabled="searchForm.processing"
                                    class="inline-flex items-center px-5 py-2.5  text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                                    type="submit">Search</button>
                            <span v-if="is_Searching">
                                            <button
                                                class="inline-flex items-center px-5 py-2.5   text-sm font-medium text-center text-white bg-danger-700 rounded-lg focus:ring-4 focus:ring-danger-200 dark:focus:ring-danger-900 hover:bg-danger-800"
                                                @click="searchForm.reset('search_query','search_expense_year','search_expense_month')"
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
                                        Title
                                    </th>
                                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                         Amount
                                    </th>
                                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                        Expense Month
                                    </th>
<!--                                    <th class="hidden md:table-cell">-->
<!--                                        Payable-->
<!--                                    </th>-->
                                    <th scope="col" class="px-6 py-3">
                                        Paid
                                    </th>
                                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                                        Expense Type
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="expense in expenses.data" :key="expense.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ expense.title }}
                                        <span v-if="expense.user_id!=$page.props.auth.user.id">
                                            <br>
                                           <small>(Added By {{expense.user.name}})</small>
                                        </span>
                                    <span class="w-5 sm:hidden">
                                        <br>
                                        PKR {{ expense.amount }}
                                        <br>
                                        {{ months[expense.expense_month] }} {{expense.expense_year}}<br>
                                    <small>Added on {{ expense.expense_date }}</small>


                                    </span>
                                        <ImagePopup v-if="expense.full_receipt_path&&checkURL(expense.full_receipt_path)" :image-src="expense.full_receipt_path" :thumbnail="expense.full_receipt_path"/>
<!--                                        {{expense.full_receipt_path}}-->
                                        <small v-if="expense.full_receipt_path&&!checkURL(expense.full_receipt_path)">
                                            <br>
                                            <a :href="expense.full_receipt_path" target="_blank" title="Receipt" download>Expense Receipt</a>
                                        </small>
                                    </td>
                                    <td class="hidden md:table-cell  px-6 py-4">PKR {{ expense.amount }}</td>
                                    <td class=" px-6 py-4 hidden md:table-cell">{{ months[expense.expense_month] }} {{expense.expense_year}}<br>
                                    <small>Added on {{ expense.expense_date }}</small>
                                    </td>
<!--                                    <td class="hidden md:table-cell">{{ expense.payable==1?'Yes':'No' }}</td>-->
                                    <td class=" px-6 py-4">
<!--                                        <label class="relative inline-flex items-center cursor-pointer">-->
<!--                                            <input type="checkbox"-->
<!--                                                   class="sr-only peer" @change="updatePayed(expense.id)">-->
<!--                                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>-->
<!--                                        </label>-->
                                        <div class="p-5 space-y-2" v-cloak>
                                            <button
                                                class="transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none"
                                                :class="{ 'bg-green-300': (expense.payed==1) }"
                                                @click="updatePayed(expense.id)"
                                            >
                                                <div
                                                    class="transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow"
                                                    :class="{ 'transform translate-x-full': (expense.payed==1) }"
                                                ></div>
                                            </button>
                                        </div>
                                    </td>
                                     <td class="hidden  px-6 py-4 md:table-cell">{{ expense.type.replace('-',' ') }}</td>
<!--                                    <td>-->
<!--                                        <div class="flex flex-col justify-center items-center w-full space-x-2">-->
<!--                                            <strong v-for="category in expense.categories" :key="category.id" class="border-b border-gray-800">-->
<!--                                                <a :href="route('categories.edit',category.id)">{{category.category_name}}</a>-->
<!--                                            </strong>-->
<!--                                        </div>-->

<!--                                    </td>-->
                                    <td class=" px-6 py-4"><button @click="deleteExpense(expense.id)" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-600 rounded-lg focus:ring-4">Delete</button>
                                        &nbsp;&nbsp;<Link :href="route('expenses.edit',expense.id)" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4">Edit</Link></td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                            <Pagination :pagination="expenses" />

                            <div class="w-full flex justify-between px-6">

                                <button @click="duplicateExpenses()" class="w-auto inline-flex items-center px-5 py-2.5 mt-3 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Copy Current Month Expenses To Next</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
