import { getNode } from "../dom/index.js";
import { typeError } from "../error/typeError.js";

export function createMap({ node, lat, lng, img }) {
  const mapContainer = getNode(node); // 지도를 표시할 div
  // 마커를 표시할 위치와 title 객체 배열입니다
  const defaultCenter = new kakao.maps.LatLng(lat, lng)
  const mapOption = {
    center: defaultCenter, // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  const positions = [
    {
      title: "HOTMESS",
      latlng: new kakao.maps.LatLng(37.562489614978645, 126.9227830443036),
      img: "/assets/images/map/Image-field-feed.png",
    },
    {
      title: "홍대디디치",
      latlng: new kakao.maps.LatLng(37.561763177568395, 126.92106624376268),
      img: "/assets/images/map/Image-field-feed.png",
    },
  ];

  let content = [];
  for (let i = 0; i < positions.length; i++) {
    // HTML 문자열 또는 Dom Element 입니다
    content.push(`
    <div class="marker">
    <img src=${positions[i].img} alt="" aria-hidden="true" class="markerImg"/>
    <span class="markerTitle">&nbsp;${positions[i].title}&nbsp;</span>
    </div>`);

    // 커스텀 오버레이가 표시될 위치입니다
    const position = new kakao.maps.LatLng(lat, lng);

    // 커스텀 오버레이를 생성합니다
    const customOverlay = new kakao.maps.CustomOverlay({
      position: positions[i].latlng,
      content: content[i],
      yAnchor: 1.23,
      xAnchor: 0.3,
    });

    // 커스텀 오버레이를 지도에 표시합니다
    customOverlay.setMap(map);
  }

  // 마커 이미지의 이미지 주소입니다
  const imageSrc = img;

  for (let i = 0; i < positions.length; i++) {
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new kakao.maps.Size(15, 15);

    // 마커 이미지를 생성합니다
    let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      image: markerImage, // 마커 이미지
    });
  }
  //줌인 줌아웃 구현
  function zoomIn() {
    const level = map.getLevel();
    map.setLevel(level - 1);
  }

  function zoomOut() {
    const level = map.getLevel();
    map.setLevel(level + 1);
  }
  
  getNode("#zoomIn").addEventListener("click", zoomIn);
  getNode("#zoomOut").addEventListener("click", zoomOut);


  getNode('#returnHome').addEventListener('click', ()=>{
    map.setCenter(defaultCenter);

})

  function myLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          const locPosition = new kakao.maps.LatLng(lat, lng);
          displayMarker(locPosition);

          map.setCenter(locPosition);
        },
        () => {
          alert("위치 정보를 가져오는데 실패하였습니다.");
        },
      );
    } else {
      alert("이 브라우저는 Geolocation을 지원하지 않습니다.");
    }
    function displayMarker(position) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: position,
      });
      marker.setMap(map);
    }
  }
  getNode("#myLocation").addEventListener("click", myLocation);



     function addRoadview(){ 
      map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);    
    }

  // 아래 코드는 위에서 추가한 로드뷰 도로 정보 지도타입을 제거합니다
    function removeRoadview() {
      map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW); 
    }   

    let count = 0;
    let roadviewButton = document.getElementById("roadViewBtn");
    // let roadviewButton=document.querySelector('.roadView__button');
    console.log(roadviewButton);
    roadviewButton.addEventListener("click", function () {
      count += 1;
      if (count % 2 === 0) {
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW)
      } else {
        map.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
      }
  
    });
}

