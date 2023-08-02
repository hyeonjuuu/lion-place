import { getNode } from "../dom/index.js";
import { typeError } from "../error/typeError.js";


export function createThemeMap({node,lat,lng,img}){
    const mapContainer = getNode(node) // 지도를 표시할 div 
    // 마커를 표시할 위치와 title 객체 배열입니다 
    let mapOption = { 
            center: new kakao.maps.LatLng(lat,lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }; 
    
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


    let positions = [
        {
            title: 'HOTMESS', 
            latlng: new kakao.maps.LatLng(37.562489614978645,126.9227830443036),
            img:"/assets/images/map/Image-field-feed.png"
        },
        {
            title: '홍대디디치', 
            latlng: new kakao.maps.LatLng(37.561763177568395,126.92106624376268),
            img:"/assets/images/map/Image-field-feed.png"
    
        },
    ];


let content = []
for (let i = 0; i < positions.length; i ++) {
    // HTML 문자열 또는 Dom Element 입니다 
    content.push(`
    <div class="marker">
    <img src=${positions[i].img} alt="" aria-hidden="true" class="markerImg"/>
    <span class="markerTitle">&nbsp;${positions[i].title}&nbsp;</span>
    </div>`);


    // 커스텀 오버레이가 표시될 위치입니다 
    let position = new kakao.maps.LatLng(lat,lng);
    
    
    // 커스텀 오버레이를 생성합니다
    let customOverlay = new kakao.maps.CustomOverlay({
        position: positions[i].latlng,
        content: content[i],
        yAnchor: 1.25,
        xAnchor: 0.3
    });
    
    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
    }

// 마커 이미지의 이미지 주소입니다
const imageSrc = img; 
    
for (let i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(15, 15); 
    
    // 마커 이미지를 생성합니다    
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        image : markerImage // 마커 이미지 
    });



}

}
