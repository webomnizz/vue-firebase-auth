<template>
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Sign Up</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <div v-if="errorMessage !== ''" class="alert alert-danger" role="alert">
                {{ errorMessage }}
            </div>
            <div v-if="successMessage !== ''" class="alert alert-success" role="alert">
                {{ successMessage }}
            </div>
            <form @submit.prevent="signupRequest" id="signup-form">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="email" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" class="form-control form-control-lg">
                    </div>
                    <div class="col-sm-12 text-center form-group">
                        <button v-bind:disabled="xhrRequest" v-bind:class="{disabled: xhrRequest}" class="btn btn-lg btn-primary px-4">
                            <span v-if="! xhrRequest">Sign Up</span>
                            <span v-if="xhrRequest">Please Wait...</span>
                        </button>
                        <div v-if="xhrRequest" class="spinner-border text-secondary _loader" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div class="col-sm-12 text-center form-group mt-5">
                        <p>
                            Already have an account? 
                            <router-link to="/login">Login</router-link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import firebase from "firebase";
export default {
    name: "Signup",
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        }
    }, 
    methods: {
        signupRequest() {

            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase
                .auth()
                .createUserWithEmailAndPassword(v.email, v.password).then(
                () => {
                    v.successMessage = "Register Successfully.";
                    v.xhrRequest = false;
                },
                ( error ) => {
                    let errorResponse = JSON.parse(error.message);
                    v.errorMessage = errorResponse.error.message;
                    v.xhrRequest = false;
                }
            );
        }
    }
}
</script>
<style scoped>
._loader {
    position:relative;
    top:6px;
    left:10px;
}
</style>