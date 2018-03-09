import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../product";
// import {LocationStrategy, HashLocationStrategy} from "@angular/router";

@Component({
  template: `

        <div class="big-clothes">
       
        <div class="middle-box"><br>
        <h2>Nittaku服飾特約經銷商</h2><br>
        <div class="line-clothes"></div><br>
        <p>本店販售Butterfly，Nittaku，Donic...等各大桌球品牌求衣褲，<br>款式多樣，尺碼齊全，現場提供各式廠牌樣衣試穿，歡迎來店選購。<br>若有團購需求請直接聯繫本店洽詢，價格另享有優惠<br><br>*本店提供團購服飾燙/印字服務</p>
        </div></div>
  
        
        <div class="container">
        <div class="title-clothes">
        <div class="title-clothes-line"></div>球衣尺寸參考<div class="title-clothes-line2"></div>
        </div>
        <div class="img-clothes">
        <div class="pic1"></div>
         <div class="pic2"></div>
          <div class="pic3"></div>
           <div class="pic4"></div>
        </div>
        <br>
        <div class="table-clothes">
        <h2>球衣尺寸表(男)</h2>
        <br>
        <table width="100%" >
            <tr>    
                <td>建議尺寸</td>
                <td>XXS</td>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                <td>L</td>
                <td>XL</td>
                <td>XXL</td>
                <td>XXXL</td>
            </tr>
            <tr>
                <td>胸圍(cm)</td>
                <td>34-35</td>
                <td>36-37</td>
                <td>38-39</td>
                <td>40-41</td>
                <td>42-43</td>
                <td>44-45</td>
                <td>46-47</td>
                <td>48-49</td>
            </tr>
            <tr>
                <td>體重</td>
                <td>30-38</td>
                <td>38-47</td>
                <td>47-56</td>
                <td>56-65</td>
                <td>65-75</td>
                <td>75-82</td>
                <td>82-90</td>
                <td>90-100</td>
            </tr>
        </table>
        </div><br>
        <div class="table-clothes">
        <h2>球衣尺寸表(女)</h2>
        <br>
        <table width="100%" >
            <tr>    
                <td>建議尺寸</td>
                <td>XXS</td>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                <td>L</td>
                <td>XL</td>
                <td>XXL</td>
                <td>XXXL</td>
            </tr>
            <tr>
                <td>胸圍(cm)</td>
                <td>34-35</td>
                <td>36-37</td>
                <td>38-39</td>
                <td>40-41</td>
                <td>42-43</td>
                <td>44-45</td>
                <td>46-47</td>
                <td>48-49</td>
            </tr>
            <tr>
                <td>體重</td>
                <td>30-38</td>
                <td>38-47</td>
                <td>47-56</td>
                <td>56-65</td>
                <td>65-75</td>
                <td>75-82</td>
                <td>82-90</td>
                <td>90-100</td>
            </tr>
        </table>
        </div><br>
        <div class="table-clothes">
        <h2>球褲尺寸表</h2>
        <br>
        <table width="100%">
            <tr>    
                <td>建議尺寸</td>
                <td>XXS</td>
                <td>XS</td>
                <td>S</td>
                <td>M</td>
                <td>L</td>
                <td>XL</td>
                <td>XXL</td>
                <td>XXXL</td>
            </tr>
            <tr>
                <td>腰圍(吋)</td>
                <td>34-35</td>
                <td>36-37</td>
                <td>38-39</td>
                <td>40-41</td>
                <td>42-43</td>
                <td>44-45</td>
                <td>46-47</td>
                <td>48-49</td>
            </tr>
           
        </table>
        </div><br><br>
        <div class="text-wow">各尺碼僅供參考，實際大小以實物為準</div>
        </div>
       
       

         
    `
})


export class ClothesComponent {






}
