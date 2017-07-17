export const chocolateChip = function (cookieName) {
  var re = new RegExp(`${cookieName}=([^;]+)`);
  var value = re.exec(document.cookie);
  var cookie = (value !== null) ? unescape(value[1]) : null;
  cookie = JSON.parse(cookie);
  for (var key in cookie) {
    if (typeof cookie[key] === 'string') {
      cookie[key] = cookie[key].split('+').join(' ');
    }
  }
  return cookie;
};

export const cookieDough = function (name, cookieObject, expires, path) {
  document.cookie = `${name}=${JSON.stringify(cookieObject)}; expires=${expires.wDay}, ${expires.date}  ${expires.time}; path=${path}`;
};

export const cookieCrumb = function (name) {
  document.cookie = `${name}=; expires=Fri, 27 Dec 1996 08:54:00 UTC`;
};

export default {
  chocolateChip,
  cookieDough,
  cookieCrumb,
};
