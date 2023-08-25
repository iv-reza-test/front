<template>
<div class="container" style="text-align: left">
  <div class="row">
    <div class="col-md-12 mb-3">

      <div class="card">
        <h5 class="card-header">create</h5>
        <div class="card-body">

          <div class="row">
            <div class="col-md-4">
              <div class="mb-3">
                <input type="text" class="form-control" v-model="input.name" placeholder="name">
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-3" @click="store">Save</button>
            </div>

          </div>


        </div>
      </div>


    </div>

    <div class="col-md-12">

      <div class="card">
        <h5 class="card-header">Apartments <button @click="backRoute" class="btn btn-sm btn-info" style="float: right">back</button></h5>
        <div class="card-body">


          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">actions</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="row in data">
                <th scope="row">{{row['id']}}</th>
                <td >{{row['name']}}</td>

                <td>
                  <router-link :to="'/apartments/'+row['id']" class="me-1 btn-sm btn btn-info">edit</router-link>
                  <button class="btn-sm btn btn-warning" @click="deleteAction(row['id'])">delete</button>
<!--                  <router-link :to="{name:'floor',query: { house_id: row['id'] }}" class="me-1 btn-sm btn btn-primary">Apartments</router-link>-->


                </td>
              </tr>

              </tbody>
            </table>
          </div>



        </div>
      </div>


    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import {BASE_URL} from "@/extra/constants";
export default {
  name: "ApartmentView",
  data(){
    return {
      pathUrl:'/api/apartments',
      data:null,
      input:{
        name:null,
      }
    }
  },
  methods:{
    backRoute() {
      this.$router.go(-1)
    },
    getList(){

      axios.get(BASE_URL+ this.pathUrl + '?floor_id=' + this.$route.query.floor_id).then(function (res){
        this.data = res.data
        console.log(res)
      }.bind(this))

    },
    deleteAction(id){
      console.log(id)
      axios.delete(BASE_URL + this.pathUrl + '/' + id).then(function (res){

        this.getList()

      }.bind(this))
    },
    store(){

      axios.post(BASE_URL + this.pathUrl , {name:this.input.name , floor_id: this.$route.query.floor_id})
          .then(function (res) {
        this.getList()

            this.input.name = null

      }.bind(this));

    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style scoped>

</style>