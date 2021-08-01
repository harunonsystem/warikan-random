<template>
        <div class="flex justify-center">
        <div class="flex flex-col">
            <div class="">
                <p class="text-center font-bold">人数</p>
             <input type="number" name="" id="people" placeholder="4" v-model="people"  class="m-8 block border-2 shadow appearance-none py-2 px-3 focus:outline-none focus:shadow-outline leading-tight rounded-lg" />
            </div>
            <div class="">
                <p class="text-center font-bold">合計金額</p>
             <input type="number" name="" id="sum" placeholder="6000" v-model="sum" class="m-8 block border-2 shadow appearance-none py-2 px-3 focus:outline-none focus:shadow-outline leading-tight rounded-lg"/>
            </div>
            <h3 class="text-center mb-2">--- 計算結果 ---</h3>
            <button @click="huga()" class="bg-purple-500   hover:bg-blue-500  text-white   font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-lg" type="button">Calculate</button>
            <ul v-for="(item, index) in warikan" :key="index" class="pt-4">
                <li class="flex flex-col bg-purple-500 hover:bg-purple-700 text-white rounded-3xl py-2 px-4 my-2 ">{{ item + '円'}}</li>
            </ul>
        </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    data() {
        return {
            people: 5,
            sum: 3000,
            warikan: 0,
            
        }
    },
    methods: {
        huga(): any{
            const array:any = [];
            const people = this.people;
            const sum = this.sum;
            const reducer = (sum:number,currentValue:number) => sum + currentValue;
            for(let i = 1; i <= people; i++) {     
            if(array.length === people -1) {
            const total:number = array.reduce(reducer);
            const lastNum:number = 100 - total;
            array.push(lastNum)
            } else if(array.length < people) {
                if(array.length === 0) {
                const hoge = Math.floor(Math.random() * 100);
                array.push(hoge);    
                } else {
                    const total:number = array.reduce(reducer);
                    const piyo:number = 100 - total;
                    const hoge = Math.floor(Math.random() * piyo);
                    array.push(hoge);
                }
            } 
            console.log(array)
            }
            const array2:any = []
            for (let i = 0; i < array.length; i++) {
                array2.push(sum*array[i]/100)
            }

            console.log('warikan: ' + array)
            console.log('warikan2: ' + array2)
            this.warikan = array2

            return array2;

        }

    }

})
</script>

<style>

</style>