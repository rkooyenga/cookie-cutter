/*
cookie2console.js
execute within devtools panel to
grab cookies for the current page context.
flatten out to txt file with rows
cookie file should then be readabl for wget, yt-dlp, and more
*/

function getNetscapeCookies() {
  const cookies = document.cookie.split(';');
  const netscapeCookies = [];

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    const [name, value] = cookie.split('=');

    const domain = window.location.hostname; 
    const flag = 'FALSE';
    const path = '/'; 
    const secure = 'FALSE';
    const expiration = Math.floor(Date.now() / 1000) + 3600; 

    const netscapeCookie = `${domain}\t${flag}\t${path}\t${secure}\t${expiration}\t${name.trim()}\t${value.trim()}`;
    netscapeCookies.push(netscapeCookie);
  }

  return netscapeCookies.join('\n');
}

const netscapeCookies = getNetscapeCookies();
console.log(netscapeCookies);
