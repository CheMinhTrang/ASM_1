

// TC 1: 200k
// const gioVao = new Date('2022-04-06 13:00:00')
// const gioRa = new Date('2022-04-07 11:00:00')

// TC 2: 230K
// const gioVao = new Date('2022-04-06 13:00:00')
// const gioRa = new Date('2022-04-07 13:00:00')

// TC 3: 290K
// const gioVao = new Date('2022-04-06 13:00:00')
// const gioRa = new Date('2022-04-07 15:00:00')

// TC 4: 400K
// const gioVao = new Date('2022-04-06 13:00:00')
// const gioRa = new Date('2022-04-07 20:00:00')

// TC 5: 230K
// const gioVao = new Date('2022-04-06 10:00:00')
// const gioRa = new Date('2022-04-07 11:00:00')

const giaTien = 200;
const phuThu = 30;

let soTienPhaiTra = 0;

let soTieng = 12;

let hour = Math.abs(gioRa.getHours() - soTieng);



// tinh so ngay
function tinhNgay(day1, day2) {
    return (day2 - day1)/(1000*60*60*24);
}
let days = (tinhNgay(+gioVao, +gioRa));
console.log(`${days} ngay`)



// cac truong hop

if (days < 1) {
    days = 1;
    soTienPhaiTra+=giaTien*days;
    console.log(`So Tien Phai Tra la: ${soTienPhaiTra}`)
    // console.log(days + 'ngay sau khi cong so 1')
}

if (days > 1 && hour >= 1 && hour < 7) {
    days = 1;
    soTienPhaiTra+=(giaTien*days + phuThu*hour)    
    console.log(`So Tien Phai Tra la: ${soTienPhaiTra}`)
    // console.log(days + 'ngay sau khi cong so 2')
    // console.log(hour)
}

if (days > 1 && hour > 7) {
    days = 1;
    hour = 7;
    soTienPhaiTra+=(giaTien*days + phuThu*hour - 10) ;   
    console.log(`So Tien Phai Tra la: ${soTienPhaiTra}`)
    // console.log(days + 'ngay sau khi cong so 3')
    // console.log(hour + 'tieng sau khi cong')
}


