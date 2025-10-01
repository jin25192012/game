// 서비스 워커 설치 이벤트
self.addEventListener('install', event => {
  console.log('Service worker installing...');
  // 여기에 오프라인 캐싱 로직을 추가할 수 있습니다.
});

// 서비스 워커 활성화 이벤트
self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});