<!--<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">-->
<template>
    <div>
      <router-link to="/time/time-add" class="btn btn-primary">创建</router-link>
      <hr>
      <router-view></router-view>
      <hr>
      <ul class="list-group" v-for="list in lists">
        <li class="list-group-item">
          <div class="row">
            <div class="col-md-2 text-center">
              <img :src="list.avatar" class="img-circle img-responsive">
              {{list.name}}
            </div>
            <div class="col-md-3">
              <div>
                <i class="glyphicon-time glyphicon"></i>{{list.time}}小时
            </div>
              <div class="text-info">
                <i class="glyphicon-calendar glyphicon"></i>{{list.date}}
              </div>
            </div>
            <div class="col-md-5">
              {{list.comment}}
          </div>
            <div class="col-md-2"><button class="btn btn-danger" @click="remove(list)">删除</button></div>
          </div>
        </li>
      </ul>
      <div class="text-warning h3" v-show="!isShow">目前没有可执行计划,请添加计划</div>
    </div>
</template>
<script>
  import * as types from '@/store/types';
  import {mapState,mapActions,mapGetters} from 'vuex';
    export default {
        data(){
            return {

            }
        },
        computed:{
          ...mapState(['lists']),
          ...mapGetters(['isShow'])
        },
        components: {},
        methods: {
          ...mapActions([types.DECREMENT_TOTALTIME,types.REMOVE_PLAN]),
          remove(list){
              this[types.REMOVE_PLAN](list);
              this[types.DECREMENT_TOTALTIME](list.time);
          }
        }
    }
</script>
<style scoped>

</style>
