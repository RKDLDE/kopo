async function logJSONData(){

  // json link fetch
  const response = await fetch("https://prof-jwchi.github.io/kopo-front2026/Json/baseball.json");

  // json 형태로 가져오기
  const jsonData = await response.json();
  
  // console.log(jsonData);

  // 년도 받아오기
  document.getElementById('calendar_year').innerText = jsonData.season.seasonKey;
  
  // baseball-area 선택
  const baseballArea = document.querySelector('.baseball-area');

  // basecall-area가 있으면
  if (baseballArea) {
    // display: none 없애기, 자리 대기
    baseballArea.classList.add('active');
  }

  // tbody 값 지우기
  const tableBody = document.getElementById('baseball-body');
  tableBody.innerHTML = '';

  // tbody 값 받아오기
  jsonData.list.forEach(team => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${team.rank.rank}</td>
      <td class="td_name">
        <img src="${team.imageUrl}" class="team-logo">
        ${team.shortName}
      </td>
      <td>${team.rank.game}</td>
      <td>${team.rank.win}</td>
      <td>${team.rank.draw}</td>
      <td>${team.rank.loss}</td>
      <td>${team.rank.wpct}</td>
      <td>${team.rank.gb}</td>
      <td>${team.rank.streak}</td>
    `;
    
    tableBody.appendChild(row);
  });
}

// 야구 메뉴
const baseballMenu = document.getElementById('menu_baseball');
    
// 버튼이 있을 때만 실행
if (baseballMenu) { 

  // 이벤트 리스터 (클릭)
  baseballMenu.addEventListener('click', function(e) {
    e.preventDefault(); 
    logJSONData();  
  });
}