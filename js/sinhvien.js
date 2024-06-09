// var sinhVien = {
//     maSV: "22000400", 
//     tenSV: "Nguyen Van A", 
//     ngaySinh: "01/01/2004", 
//     gioiTinh: "Nam",
//     diaChi: "HaNoi"
// }

// document.writeln(sinhVien.maSV);
// document.writeln(sinhVien.tenSV);
// document.writeln(sinhVien.ngaySinh);
// document.writeln(sinhVien.gioiTinh);
// document.writeln(sinhVien.diaChi);

x = sumAll(1,2,3,4,5,6,7);
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++){
    sum += arguments[i];
    }
    return sum;
}

document.writeln(sumAll());
