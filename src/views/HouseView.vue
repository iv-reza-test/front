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
            <div class="col-md-4">
              <div class="mb-3">
                <input type="text" class="form-control" v-model="input.street" placeholder="address">
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
        <h5 class="card-header">Featured <a class="btn btn-sm btn-info" style="float: right">back</a></h5>
        <div class="card-body">


          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col"># entrances</th>
                <th scope="col"># floors</th>
                <th scope="col"># apartments</th>
                <th scope="col">actions</th>
              </tr>
              </thead>
              <tbody>

              <tr v-for="row in data">
                <th scope="row">{{row['id']}}</th>
                <td >{{row['name']}}</td>
                <td >{{row['count_entrance']}}</td>
                <td >{{row['count_floor']}}</td>
                <td >{{row['count_apartment']}}</td>


                <td>
                  <router-link :to="'/houses/'+row['id']" class="me-1 btn-sm btn btn-info">edit</router-link>
                  <button class="btn-sm btn btn-warning me-1" @click="deleteAction(row['id'])">delete</button>
                  <router-link :to="{name:'entrance',query: { house_id: row['id'] }}" class="me-1 btn-sm btn btn-primary">Entrance</router-link>


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
  name: "HouseView",
  data(){
    return {
      data:null,
      input:{
        name:null,
        street:null
      }
    }
  },
  methods:{
    getList(){

      axios.get(BASE_URL+'/api/houses').then(function (res){
        this.data = res.data
        console.log(res)
      }.bind(this))

    },
    deleteAction(id){
      console.log(id)
      axios.delete(BASE_URL+'/api/houses/'+id).then(function (res){

        this.getList()

      }.bind(this))
    },
    store(){

      axios.post(BASE_URL+'/api/houses/' , {name:this.input.name , street:this.input.street})
          .then(function (res) {
        this.getList()

            this.input.name = null
            this.input.street = null

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