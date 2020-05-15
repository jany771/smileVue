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
        <!--AD banner area-->
        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
        </div>
        <!--Recommend goods area-->
        <div class="recommend-area">
            <div class="recommend-title">
                商品推荐
            </div>
            <div class="recommend-body">
                <!-- swiper -->
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
                        <div class="recommend-item">
                            <img :src="item.image" alt="" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
                        </div>                        
                    </swiper-slide>
                     <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <!-- floor one area -->
        <div class="floor">
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img :src="floor1_0.image" alt="" width="100%">
                </div>
                <div >
                    <div class="floor-two">
                        <img :src="floor1_1.image" alt="" width="100%">
                    </div>
                    <div><img :src="floor1_2.image" width="100%" alt=""></div>
                </div>
            </div>
            <div class="floor-rule">
                <div v-for="(item ,index) in floor1.slice(3)" :key="index">
                   <img :src="item.image" alt="" width="100%"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        data (){
            return{
                msg:'Shopping Mall',
                locationIcon: require('../../assets/images/icon_loacation.png'),
                 bannerPicArray:[
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361758057472.jpg'},
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361789580288.jpg'},
                {imageUrl:'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534361932694528.jpg'},
                ],
                category:[],
                adBanner:'',
                recommendGoods:[],
                swiperOption:{
                    // pagination:{
                    //     el:'.swiper-pagination'
                    // },
                    //direction:'vertical',                 
                    loop:true,
                    slidesPerView: 3,//一行显示3个                  
                },
                floor1:[],
                floor1_0:{},
                floor1_1:{},
                floor1_2:{},
            }
        },
        created () {
            // axios.get('https://www.easy-mock.com/mock/5ebb6c1ca2293e5119c96abc/SimleVue/index')
             axios.get('http://www.mocky.io/v2/5ebdee993100008400c5cf3c')
            .then(response=>{
                    console.log(response);
                    if(response.status==200){                    
                        this.category = response.data.data.category; //获得类目
                       this.adBanner = response.data.data.advertesPicture;//获得广告图片
                       this.recommendGoods = response.data.data.recommend;//推荐商品
                       this.floor1 = response.data.data.floor1;              //楼层1数据
                        this.floor1_0 =this.floor1[0];
                        this.floor1_1 =this.floor1[1];
                        this.floor1_2 =this.floor1[2];
                         
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

    //recommend-area
     .recommend-area{
        background-color: #fff;
        margin-top: .3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        font-weight: bold;
        padding:.2rem;
        color:#041040;
        text-align: left;
    }
      .recommend-body{
       border-bottom: 1px solid #eee;
       display: flex;
   }

  .recommend-item{
      width:99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
  }

//   floor
.floor-anomaly{
    display: flex;
    flex-direction: row;
    div{
        width: 10rem;
        box-sizing: border-box;
    }
    .floor-one{
       border-right: 1px solid #ededed;
    }
    .floor-two{
       border-bottom: 1px solid #ededed;
    }
}
.floor-rule{

}

</style>