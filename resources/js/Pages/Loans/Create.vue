<script setup>
import {Head, Link, useForm, usePage} from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import {onMounted} from "vue";
const props = defineProps({
    loan:{
        type: Object,
        default: null
    },
    users:{
        type: Array,
        default: ()=> []
    },
    LoanTaker:{
        type:Boolean,
        default: false
    },
    loan_statuses:{
        type: Array,
        default: ()=> [
            'Unpaid',
            'Paying',
            'Paid'
        ]
    },
    isUpdating:{
        type: Boolean,
        default: false,
    }
})
let lender = true;
const change_lender = (e) =>{
    console.log(e.target.value);
    lender=e.target.value
    console.log(lender)
}
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
const form = useForm({
    title: "",
    lender: "",
    borrower: "",
    loan_date:date ,
    amount: 0,
    paid_amount: 0,
    payment_date: "",
    status: "Unpaid",
    type:props.LoanTaker
});
console.log(props);
const page = usePage();
const submit = () => (props.isUpdating?updateLoan():addLoan());
const addLoan = () => form.post(route('loans.store'));
const updateLoan = () => form.put(route('loans.update',props.loan.id));
onMounted(()=>{
    if (props.loan) {
        lender=(props.loan.lender==page.props.auth.user.id);
        form.title = props.loan.title || "";
        form.lender = props.loan.lender.id || "";
        form.borrower = props.loan.borrower.id || "";
        form.amount = props.loan.amount || "";
        form.loan_date = props.loan.loan_date || date;
        form.payment_date = props.loan.payment_date || date;
        form.paid_amount = props.loan.paid_amount || 0;
        form.status = props.loan.status || 'Unpaid';
        form.type = (props.loan.lender==page.props.auth.user.id) || props.LoanTaker;
    }
    //console.log(form);
});
/*const submit = () => {
    form.loan("/loans");
};*/
</script>

<template>
    <Head title="Loans Create Form" />
    <AuthenticatedLayout>
        <template #header>
            <div class="flex items-center justify-between">
                <h2
                    class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
                >
                    Add New Loan
                </h2>

               <Link :href="route('loans.index')" class="text-gray-800 dark:text-sky-50 ">Back to All Loans</Link>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 text-center">
                <Link :href="route('loans.create')"
                      class="text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center "
                      :class="{'text-sky-50  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800':!LoanTaker}">Giving Loan</Link>
                <Link :href="route('loans.create')+'?loan_taking=true'"
                      class="text-gray-800 dark:text-sky-50 w-auto inline-flex justify-between mt-3 items-center px-5 py-2.5  text-sm font-medium text-center"
                      :class="{'text-sky-50  bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900 hover:bg-sky-800':  LoanTaker}">Taking Loan</Link>
            </div>
        </template>
        <div class="">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-2xl ">
                        <form @submit.prevent="submit" class="max-w-md mx-auto">
                            <progress v-if="form.progress" :value="form.progress.percentage" max="100">
                                {{ form.progress.percentage }}%
                            </progress>
                            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
                                <div class="sm:col-span-2" :class="{'hidden':form.lender>0}">
<!--                                    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">You Are?:</label>-->
                                    <div class=" ">
<!--                                        <span class="text-white">Taking Loan</span>-->
<!--                                        <button-->
<!--                                            class="transition ease-in-out duration-300 w-12 bg-gray-200 rounded-full focus:outline-none"-->
<!--                                            :class="{ 'bg-green-400': (lender),'bg-red-400':(!lender) }"-->
<!--                                            @click="lender=!lender"-->


<!--                                        >-->
<!--                                            <div-->
<!--                                                class="transition ease-in-out duration-300 rounded-full h-6 w-6 bg-white shadow"-->
<!--                                                :class="{ 'transform translate-x-full': (lender) }"-->
<!--                                            ></div>-->
<!--                                        </button>-->
<!--                                         <span class="text-white">Giving Loan</span>-->
<!--                                        <label class="inline-flex items-center cursor-pointer">-->
<!--                                            <span class="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">Taking Loan</span>-->
<!--                                            <input type="checkbox" value="" class="sr-only peer" :value="form.type" @change="changeLender">-->
<!--                                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>-->
<!--                                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Giving Loan</span>-->
<!--                                        </label>-->
                                        <input type="hidden" name="type" :value="LoanTaker?1:0">
                                    </div>
                                </div>
                                <div class="sm:col-span-2" :class="{'hidden':loan}" >
                                <div class="sm:col-span-2" v-if="!LoanTaker">
                                    <label for="borrower" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan taker from you:</label>
                                    <select id="borrower"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.borrower">
                                        <option v-for="user in users" :value="user.id">{{user.name}}</option>
                                    </select>
                                    <input type="hidden" name="lender"  :value="$page.props.auth.user.id" />
                                </div>
                                <div class="sm:col-span-2" v-if="LoanTaker">
                                    <label for="lender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">You taking loan from:</label>
                                    <select id="lender"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.lender">
                                        <option v-for="user in users" :value="user.id">{{user.name}}</option>
                                    </select>
                                    <input type="hidden" name="borrower"  :value="$page.props.auth.user.id" />

                                </div>
                                </div>
                                <div v-if="loan" class="sm:col-span-2 text-2xl text-center text-white">
                                     <h3 class="" v-if="form.lender!=$page.props.auth.user.id">
                                            You Took This Loan From <strong>{{loan.lender.name}}</strong>
                                        </h3>
                                    <h3 v-if="form.lender==$page.props.auth.user.id">
                                            {{loan.borrower.name}} Took This Loan From You
                                        </h3>
                                </div>

                                    <div class="sm:col-span-2">
                                        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
                                        <input type="text" id="title"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.title" />
                                    </div>
                                <div class="sm:col-span-2">
                                        <label for="amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount:</label>
                                        <input type="number" id="amount"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.amount" />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="loan_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan Date:</label>
                                        <input type="date" id="loan_date"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.loan_date" />
                                    </div>
                                <div class="sm:col-span-2">
                                        <label for="paid_amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Paid Amount:</label>
                                        <input type="number" id="paid_amount"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.paid_amount" />
                                    </div>

                                    <div class="sm:col-span-2">
                                        <label for="payment_date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan Payment Date:</label>
                                        <input type="date" id="payment_date"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               v-model="form.payment_date" />
                                    </div>

                                <div class="sm:col-span-2">
                                    <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loan Status:</label>
                                    <select id="status"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            v-model="form.status">
                                        <option v-for="loan_status in loan_statuses" :value="loan_status">{{ loan_status }}</option>

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
