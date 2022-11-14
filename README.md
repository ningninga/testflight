# flight_website. 
Do you have the moments that you really want to travel but you don't have a certain destination?   
This website is aimed at sending the most affordable price to your email address based on the depature place you selected.   



## Table of Contents

- [Background](#background)
- [Install](#install)
- [Use](#use)
- [API](#api)
- [Version](#version)



## Background

The inspiration for this website began with [flight_discount_info_push](https://github.com/ningninga/flight_discount_info_push), so I won't go over it too much here.   
After much consideration, there are two big differences. The first one is visualization page, the second one is method of pushing message.  
  
With this website, you can select departure place all by yourself and then input your email address, and the most cheapest price will be sent to your email address immediately.


## Install

See requirements.txt, it contains all of the required dependencies and their version numbers.
## Use



## API
For V1.x:   
- https://ws.qunar.com/lowerPrice.jcp?&callback=DomesticLowPriceHome.showLowPrice  btw, thank you Quna:)
- http://jjn.4zcf.com:2888/sendEmail send email


## Version
### V1.0 (2022.02.15)
I choose Dingding is because it has open Webhook for free, you can change it into other app which has the similar function as you want.    
I choose Quna web is because it is almost the only one OTA Website that its data can be crawled, frankly speaking, I also tried Xiecheng, Feizhu and etc. Finally, I found Quna is the most friendly one to me.  
According to what I said before, this program is for Chinese airline. But I just want to say, maybe I will enlarge my program to overseas website in some day:)
### V1.1 (2022.03.17)
Attention: the Sign In/Up tab on the page are all fake now. Because I have not finished the api yet, and these functions are not main function on this page, so please ingore them LOL, btw, I have already designed the style of the two tabs, you could have a look if you want.

  





