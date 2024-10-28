<script setup>
import {Head, Link, useForm} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {onMounted} from "vue";
import AutocompleteInput from "@/Components/AutocompleteInput.vue";

const props = defineProps({
    expense:{
        type: Object,
        default: null
    },
    users:{
        type: Array,
        default: ()=> []
    },
    isUpdating:{
        type: Boolean,
        default: false,
    }
})
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const form = useForm({
    title: "",
    receipt: null,
    amount: "",
    expense_date:date ,
    payable: true,
    payed: false,
    type: "Recurring-Payment",
    expense_month: new Date().getMonth()+1,
    expense_year: new Date().getFullYear(),
    shared:[]
});
console.log(props.expense);
const submit = () => (props.isUpdating?updateExpense():addExpense());
const addExpense = () => form.post(route('expenses.store'));
const updateExpense = () =>{
    // const formData = new FormData();
    //
    // // Add all form fields to FormData manually
    // Object.keys(form).forEach((key) => {
    //     formData.append(key, form[key] || '');  // Ensure no empty values
    // });
    //
    // // Use Inertia's manual visit method for submission
    // router.put(route('expenses.update',props.expense.id), formData, {
    //     headers: { 'Content-Type': 'multipart/form-data' },
    // });
    form.post(route('expenses.update_expenses',props.expense.id),{
        forceFormData: true,  // Ensures the form is submitted as `multipart/form-data`
    })
} ;
onMounted(()=>{
    if (props.expense) {
        form.title = props.expense.title || "";
        form.amount = props.expense.amount || "";
        // form.receipt = props.expense.receipt || null;
        form.expense_date = props.expense.expense_date || date;
        form.payable = (props.expense.payable == 1) || true;
        form.payed = (props.expense.payed==1) || false;
        form.type = props.expense.type || "Recurring-Payment";
        form.expense_month = props.expense.expense_month || new Date().getMonth()+1;
        form.expense_year = props.expense.expense_year || new Date().getFullYear();
        form.shared = props.expense.shared || [];
    }
});
/*const submit = () => {
    form.expense("/expenses");
};*/
</script>

<template>
    <Head title="Expenses Create Form" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex items-center justify-between">
                <h2
                    class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
                >
                    Create New Expense
                </h2>
                <Link :href="route('expenses.index')" class="text-gray-700 dark:text-sky-50 ">Back to All Expenses</Link>
            </div>

        </template>
        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl ">
                        <form @submit.prevent="submit" class="max-w-md mx-auto" enctype="multipart/form-data">
                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                {{ form.progress.percentage }}%
                            </progress>
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div class="sm:col-span-2">
                                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
<!--                                        <input type="text" id="title"-->
<!--                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"-->
<!--                                               v-model="form.title" />-->
                                        <AutocompleteInput v-model="form.title" />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount:</label>
                                        <input type="number" id="amount"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.amount" />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="expense_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Add Date:</label>
                                        <input type="date" id="expense_date"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.expense_date" />
                                    </div>
                                <div class="sm:col-span-2">
                                        <label for="receipt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receipt:</label>
                                    <input type="file" id="receipt" name="receipt" @input="form.receipt = $event.target.files[0]"
                                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    />
                                    <br>
                                    <a v-if="expense&&expense.full_receipt_path" :href="expense.full_receipt_path" class="text-white text-lg " target="_blank" title="Receipt" download>Attached Receipt Link</a>
                                    </div>

                                    <div class="sm:col-span-2 hidden">
                                        <div class="flex items-center space-x-2">
                                            <input type="checkbox" id="payable"
                                                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                   v-model="form.payable" />
                                            <label for="payable" class="dark:text-white text-gray-600" >Payable By Me</label>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                        <div class="flex items-center space-x-2">
                                        <input type="checkbox" id="payed"
                                               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                               v-model="form.payed" />
                                        <label for="payed" class="dark:text-white text-gray-600" >Paid?</label>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-2">
                                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type:</label>
                                            <div class="flex items-center space-x-2 ">
                                                <div class="flex items-center mb-4">
                                                    <input type="radio" id="one_time" value="One-Time"
                                                           class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                           v-model="form.type" />
                                                    <label for="one_time" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">One Time</label>
                                                </div>

                                                <div class="flex items-center mb-4">
                                                    <input type="radio" id="recurring" value="Recurring-Payment"
                                                           class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                           v-model="form.type" />
                                                    <label for="recurring" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recurring Payment</label>
                                                </div>
                                            </div>
                                    </div>

                                <div class="sm:col-span-2">
                                    <label for="expense_month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Month:</label>
                                    <select id="expense_month"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.expense_month">
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
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="expense_year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expense Year:</label>
                                    <select id="expense_year"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.expense_year">
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                    </select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="shared" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Share with Others:</label>
                                    <select id="shared"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.shared">
                                        <option value="" selected disabled>Select User to Share</option>

                                        <option v-for="user in users" :value="user.id">{{user.name}} - ({{user.email}})</option>

                                    </select>
                                </div>

                            </div>
                            <button :disabled="form.processing" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800" type="submit">Save</button>
                        </form>
                    </div>

                </section>
            </div>

        </div>
    </AuthenticatedLayout>
</template>

<style scoped>

</style>
