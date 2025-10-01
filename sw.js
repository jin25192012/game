// 캐시 이름과 캐싱할 파일 목록 정의
const CACHE_NAME = 'brick-breaker-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './bgm.mp3'
];

// 서비스 워커 설치 이벤트: 파일을 캐시에 저장합니다.
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // waitUntil: 캐싱이 완료될 때까지 설치 이벤트를 연장합니다.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // addAll: 지정된 모든 파일을 캐시에 추가합니다.
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// 서비스 워커 활성화 이벤트: 이전 버전의 캐시를 정리할 수 있습니다. (지금은 비워둠)
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});


// fetch 이벤트: 네트워크 요청을 가로채서 캐시된 파일을 반환합니다.
self.addEventListener('fetch', event => {
  event.respondWith(
    // caches.match: 요청과 일치하는 캐시된 응답이 있는지 확인합니다.
    caches.match(event.request)
      .then(response => {
        // 캐시에 응답이 있으면 캐시된 값을 반환하고, 없으면 네트워크로 요청을 보냅니다.
        return response || fetch(event.request);
      })
  );
});



