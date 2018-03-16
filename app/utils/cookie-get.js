export default function getCookie(name) {
    let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    console.log(value);
    return value ? value[2] : null;
}
