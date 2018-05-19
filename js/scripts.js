//背景图片切换
// window.onload=function(){
//     console.log(document.body.clientWidth)
//     var imgs =["images/first.jpg", "images/second.jpg", "images/third.jpg"];    //（设定想要显示的图片）
//     var i = 0;
//     var head=document.getElementById("view");//获取DIV对象
//     head.style.background="url(images/first.jpg)";   //设置图片的初始图片为该路径的图片
//     head.style.backgroundSize= "100% 100%";
//             function time(){
//                    i++;   
//                    i=i%3;         // 超过2则取余数，保证循环在0、1、2之间
//                    head.style.background="url("+imgs[i]+")";
//                    head.style.backgroundSize= "100% 100%";
//             }
//             setInterval(time,3000);//循环调用time1()函数，时间间隔为2000ms
//             //setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式
//     }