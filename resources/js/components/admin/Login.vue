<template>


<div class="main_container">
    <div class="custom_content mt-10">
        <div class="row justify-content-center">
            <div class="col-lg-6 six">
                <div class="text">

                    <p>Login your personal <span class="blog">Blog</span></p>
                </div>

            </div>
            <div class="col-lg-4">
                <div class="login-form">
                    <form class="form" @submit.prevent="login" >
                        <div class="form-group">
                            <input type="email"  v-model="form.email" placeholder="Enter Email...." class="form-control" name="email" :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>

                        </div>
                        <div class="form-group">
                            <input type="password" placeholder="password" v-model="form.password" name="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                            <has-error :form="form" field="password"></has-error>

                        </div>
                        <button type="submit" class="btn btn-primary btn-block"><i class="fa fa-spinner fa-spin" v-if="loading"></i>
                            {{LoginText}}</button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>


</template>

<script>

    import Vue from 'vue'
    import { Form, HasError, AlertError } from 'vform'

    Vue.component(HasError.name, HasError)
    Vue.component(AlertError.name, AlertError)

    export default {

        mounted() {
            console.log('Component mounted.')
        },

        data() {
            return {
                form: new Form({
                    email: "",
                    password: ""

                }),
                LoginText:"LOGIN",
                loading:false
            }
        },
        methods:{
            login(){
                this.LoginText=""
                this.loading=true
                this.form.post('admin/login')
                    .then((resp) => {

                        localStorage.setItem('token', "token")
                        this.$router.push({path: '/admin'})
                        this.$store.commit('user',resp)

                    })
                .catch((e)=>{
                    this.LoginText="LOGIN"
                    this.loading=false
                })
            }
        }

    }
</script>
<style>
    body{
        background: #F0F2F5 !important;
    }
    .mt-10{
        margin-top: 10rem;
    }
    .login-form {
        background: #fff;
        padding: 40px 40px;
        width: 400px;
        border: 30px;
        box-shadow: 120px 120px 120px 120px #ddd;
        border-radius: 5px;
        height: 300px;
    }
    .btn-block{
        width: 100%;
    }
    .form{
        margin-top: 45px;
    }
    .text {
        font-size: 65px;
        font-weight: bold;
        margin-top: 75px;
    }
    span.blog {
        text-transform: uppercase;
        letter-spacing: 146px;
        /* background: #fff; */
        color: #167bff;
    }
</style>
