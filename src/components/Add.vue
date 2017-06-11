<template>
    <div>
      <form>
        <div class="form-group">
          <div class="row">
            <div class="col-md-6">
              <label for="date" class="control-label">日期</label>
              <input type="date" id="date" class="form-control" v-model="date">
            </div>
            <div class="col-md-6">
              <label for="time" class="control-label">时间</label>
              <input type="number" id="time" class="form-control" v-model.number="time">
            </div>
          </div>
        </div>
        <div class="form-group">
          <textarea class="form-control" placeholder="请输入提示内容" v-model="comment"></textarea>
        </div>
        <div class="form-group">
          <button @click="addplan" class="btn btn-success">添加计划</button>
          <button class="btn btn-default" @click="cancel">取消</button>
        </div>
      </form>
    </div>
</template>
<script>
  import * as types from '@/store/types';
  import {mapActions} from 'vuex';
    export default {
        data(){
            return {
                date:'',
                time:'',
                comment:''
            }
        },
        components: {},
        methods: {
          ...mapActions([types.ADD_PLAN,types.INCREMENT_TOTALTIME]),
          addplan(){
              this[types.ADD_PLAN]({
                date:this.date,
                time:this.time,
                comment:this.comment
              });
              this[types.INCREMENT_TOTALTIME](this.time);//添加发布增加总时间的动作
          },
          cancel(){
              this.$router.go(-1);//回到上一级
          }
        }
    }
</script>
<style scoped>

</style>
