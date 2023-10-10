class Utils {
    static toISOLocaleString(date) {
        let year = date.getFullYear();
        let month = ("00" + (date.getMonth() + 1)).slice(-2);
        let day = ("00" + date.getDate()).slice(-2);
        let hour = ("00" + date.getHours()).slice(-2);
        let minute = ("00" + date.getMinutes()).slice(-2);
        let second = ("00" + date.getSeconds()).slice(-2);
        let millisecond = ("000" + date.getMilliseconds()).slice(-3);
        let tz_os = date.getTimezoneOffset();
        let tz_sign = tz_os < 0 ? "+" : "-";
        let tz_hour = ("00" + Math.floor(Math.abs(tz_os) / 60)).slice(-2);
        let tz_minute = ("00" + Math.abs(tz_os) % 60).slice(-2);

        return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}${tz_sign}${tz_hour}:${tz_minute}`;
    }
}

module.exports = Utils;