import { insertLast } from './insert.js';


function createReviewPage({
  id="",visitDate="",description="",store="",loacation="",image="/assets/images/map/Image-field-feed.png"
}){
  const template = /*html*/`
  <li data-index="user${id}">
  <!-- no.부분 -->
  <div class="flex" >
    <span class="my-3 rounded-3xl bg-secondary p-2">
      <img
        src="/assets/icons/paper.svg"
        alt=""
        aria-hidden="true"
      />
    </span>
    <span
      class="ml-1 inline-block flex-grow self-center font-semibold text-secondary"
      >NO.${id}</span
    >
  </div>
  <!-- 본문 -->
  <!-- 이미지 포함 div -->
  <div class="relative mx-auto restaurantList">
    <img
      src=${image}
      alt="커피"
      class="w-full"
    />
    <div>
      <!-- 이미지 제외 div -->
      <div
        class="w-full shadow-[0px_6px_7px_0px_rgba(126,39,39,0.25)]"
      >
        <!-- 리뷰 내용 -->
        <div class="bg-white px-[38px] py-6">
          <p class="text-center text-xs text-secondary">
            <span class="font-medium">${visitDate}</span>
            <span
              class="inline-block rounded-md border border-solid border-secondary px-1"
              >방문</span
            >
          </p>
          <p
            class="mt-2 line-clamp-3 h-[50px] w-full text-ellipsis break-all text-xs"
          >
            ${description}
          </p>
          <div class="mx-auto mt-2 text-center text-xs">
            <span class="rounded-md bg-gray-100 p-1 text-gray-500"
              >⏱ 수업 시간이 충분해요
            </span>
            <span
              class="mx-2 rounded-md bg-gray-100 px-2 py-1 text-gray-500"
            >
              +4
            </span>
            <button>
              <img
                src="/assets/icons/close-theme.svg"
                alt="닫기"
                class="absolute -right-1.5 -top-1.5"
              />
            </button>
          </div>
        </div>
        <!-- 가게 리뷰 정보 -->
        <div class="ml-2 border-t border-dashed py-3 pl-3">
          <p class="text-base font-bold">${store}</p>
          <p class="text-xs text-gray-500">
            <span>리뷰</span
            ><span class="font-semibold"> 5&nbsp;|&nbsp;</span
            ><span>${loacation}</span>
          </p>
        </div>
      </div>
      <!-- 핑킹가위 디자인 -->
      <div
        class="-mt-[1px] mb-20 bg-[url('/assets/icons/triangle.svg')] bg-top bg-repeat-x p-2"
      ></div>
    </div>
  </div>
</li>
`
  return template;
}

function createEmptyData(
  size = 200,
  errorMessage = "알 수 없는 오류가 발생했습니다.😓",
) {
  return `
  <figure class="empty-data">
    <svg class="mx-auto" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption class="text-center">데이터가 없습니다.</figcaption>
  </figure>
  `;
}

export function renderReviewPage(target, data) {
  insertLast(target, createReviewPage(data));
}

export function renderEmptyPage(target) {
  insertLast(target, createEmptyData());
}