<template>
  <div class="container" style="text-align: left">
    <div class="row">
      <div class="col-md-12 mb-3">

        <div class="card">
          <h5 class="card-header">Update</h5>
          <div class="card-body">

            <div class="row">
              <div class="col-md-4">
                <div class="mb-3">
                  <input type="text" class="form-control" v-model="inputs.name" placeholder="name">
                </div>
              </div>
              <div class="col-md-4">
                <div class="mb-3">
                  <input type="text" class="form-control" v-model="inputs.street" placeholder="address">
                </div>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn btn-primary mb-3" @click="update">update</button>
              </div>

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
  name: "HouseEditView",
  data(){
    return {
      inputs:{
        name:null,
        street:null
      }
    }
  },
  methods:{
    get(){

      axios.get(BASE_URL+'/api/houses/'+this.$route.params.id).then(function (res){
        this.inputs.name = res.data.name
        this.inputs.street = res.data.street
        console.log(res)
      }.bind(this))

    },
    update(){
      axios.put(BASE_URL+'/api/houses/'+this.$route.params.id , {name:this.inputs.name , street:this.inputs.street})
          .then(function (res) {

            this.$router.push({ name: 'house' })

          }.bind(this));    }
  },
  mounted() {
    this.get()
  }
}
</script>

<style scoped>

</style>