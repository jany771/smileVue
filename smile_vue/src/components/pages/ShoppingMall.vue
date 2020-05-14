<template>
    <div>
         <!-- {{msg}} -->
        <div class="search-bar">       
        <van-row>
            <van-col span='3'>
                <img :src="locationIcon" class="icon" alt="">
            </van-col>
            <van-col span='16'>
                <input type="text" class="search-input">
            </van-col>
            <van-col span='5'>
                <van-button size="mini">查找</van-button>
            </van-col>
        </van-row>
        </div>
        <!-- swiper -->
        <div class="swiper-area">
            <van-swipe :autoplay="1000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img :src="banner.imageUrl" v-lazy="banner.imageUrl" width="100%" alt="" class="swipe-img"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type-bar -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%" alt="">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data (){
            return{
                msg:'Shopping Mall',
                locationIcon: require('../../assets/images/icon_loacation.png'),
                 bannerPicArray:[
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361758057472.jpg'},
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361789580288.jpg'},
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361932694528.jpg'},
                ],
                category:[]
            }
        },
        created () {
            // axios.get('https://www.easy-mock.com/mock/5ebb6c1ca2293e5119c96abc/SimleVue/index')
             axios.get('http://www.mocky.io/v2/5ebd0e3c310000e2c05b0fba')
            .then(response=>{
                    console.log(response);
                    if(response.status==200){                    
                        this.category = response.data.data.category;
                         console.log("category:",this.category);
                    }
                }
            ).catch((error)=>{
                console.log(error)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .search-bar{
        height: 2.2rem;
        background-color: #041040;
        line-height: 2.2rem;
        .icon{
           height: 1.5rem;
           margin-top:.35rem;
        }
        overflow: hidden;
        clear: both;
    }
    .search-input{
      width:100%;
      height: 1.3rem;
      border-top:0px;
      border-left:0px;
      border-right:0px;
      border-bottom: 1px solid 1px !important ;
      background-color: #041040;
      color:#fff;
  }

  .swiper-area{
      width: 100%;
      clear: both;
      .swipe-img{
          width:100%;
          height:10.2rem;
      }
  }
    
    // type-bar
    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        div{
            padding:.3rem;
            font-size: 12px;
            text-align: center;
        }
    }
</style>