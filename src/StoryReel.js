import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="StoryReel">
            <Story
                image="https://digital-photography-school.com/wp-content/uploads/2012/06/Portrait-Photography-Next-Level-04.jpg"
                profileSrc="https://st2.depositphotos.com/3369547/11870/v/950/depositphotos_118702258-stock-illustration-man-male-avatar-person-people.jpg"
                title="Yash khandelwal" />

            <Story
                image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/02/Famous_graphic_designer_portfolios_jpg_LR4w6-rk.jpg?auto=format&q=60&w=1280&h=1280&fit=crop&crop=faces" 
                profileSrc="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg"
                title="Abhishek Chaudhary" />

            <Story
                image="https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141641/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-01.jpg"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFD7rVDIsj77R6CBhfwmiidoHUQY76Ze4ShORloVE-_ECfbYnDCVri9odpInT7eHXyHw&usqp=CAU"
                title="Rahul Mishra" />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQol68P9TqYOtdGyi5UUApkzjWhb7LEzUVzj8nKbCkA0x5ym1UjHex4uzj_w3dNmK6Rr6Y&usqp=CAU"
                profileSrc="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                title="Soman Mitra" />
            <Story
                image="https://images.iphonephotographyschool.com/28251/1120/Best-Photo-Editing-Apps.jpg"
                profileSrc="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg"
                title="Anurag Sharma" />
                
        </div>
    )
}

export default StoryReel
